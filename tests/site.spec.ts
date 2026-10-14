import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { company } from "../src/data/company";
import { publicProjects } from "../src/data/projects";
test("favicons LEGON carregam no navegador", async ({ page, request }) => {
  await page.goto("/");
  const icons = page.locator('head link[rel="icon"]');
  const urls = await icons.evaluateAll(nodes => nodes.map(n => n.getAttribute("href")!));
  expect(urls.some(url => url.startsWith("/favicon.ico"))).toBeTruthy();
  expect(urls.some(url => url.startsWith("/icon.png"))).toBeTruthy();
  const apple = page.locator('head link[rel="apple-touch-icon"]');
  await expect(apple).toHaveAttribute("sizes", "180x180");
  const appleUrl = await apple.getAttribute("href");
  for (const url of [...urls, appleUrl!, "/apple-touch-icon.png", "/favicon-192.png", "/favicon-512.png"]) {
    const response = await request.get(url);
    expect(response.status(), url).toBe(200);
    expect((await response.body()).length).toBeGreaterThan(100);
  }
  await page.evaluate(async () => {
    for (const link of document.querySelectorAll<HTMLLinkElement>('head link[rel="icon"], head link[rel="apple-touch-icon"]')) {
      const image = new Image(); image.src = link.href; await image.decode();
      if (!image.naturalWidth) throw new Error("Ícone inválido");
    }
  });
});
test("orçamentos e WhatsApp usam o contacto verificado", async ({ page }) => {
  for (const route of ["/", "/servicos", "/contactos"]) {
    await page.goto(route);
    for (const link of await page.getByRole("link", { name: /Pedir orçamento|Falar connosco|Contactar a LEGON pelo WhatsApp/ }).all()) {
      await expect(link).toHaveAttribute("href", company.whatsappUrl!);
      await expect(link).toHaveAttribute("target", "_blank");
    }
    await expect(page.getByRole("link", { name: "Contactar a LEGON pelo WhatsApp" })).toBeVisible();
  }
});
const routes = [
  "/",
  "/sobre",
  "/servicos",
  "/projetos",
  "/projetos/guarda-corpos-lisboa",
  "/projetos/adega-oliveira-do-conde",
  "/projetos/escadas-colombo",
  "/seguranca-qualidade",
  "/contactos",
];
test("páginas, idioma, títulos e contactos", async ({ page }) => {
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("html")).toHaveAttribute("lang", "pt-PT");
    await expect(
      page.locator('a[href="tel:+351915486194"]').first(),
    ).toBeVisible();
    await expect(page.locator('a[aria-label*="WhatsApp"]')).toHaveAttribute("href", company.whatsappUrl!);
  }
});
test("larguras responsivas sem overflow", async ({ page }) => {
  for (const width of [375, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of routes) {
      await page.goto(route);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBeTruthy();
    }
  }
});
test("menu mobile, teclado e restauro de foco", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Abrir menu" });
  await trigger.click();
  await expect(
    page.getByRole("dialog", { name: "Menu de navegação" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page
    .getByRole("dialog")
    .getByRole("link", { name: /Contactos/ })
    .click();
  await expect(page).toHaveURL(/contactos/);
  await expect(page.getByRole("dialog")).not.toBeVisible();
});
test("apenas Todos e detalhe do projeto", async ({ page }) => {
  await page.goto("/projetos");
  await expect(page.locator(".filters")).toHaveText("TODOS");
  await expect(page.locator(".filters button")).toHaveCount(0);
  await expect(page.locator(".project-card")).toHaveCount(publicProjects.length);
  await page
    .getByRole("link", { name: "Ver projeto: Adega — Oliveira do Conde" })
    .click();
  await expect(page.locator("h1")).toHaveText("Adega — Oliveira do Conde");
});
test("galeria e Escape", async ({ page }) => {
  await page.goto("/projetos/guarda-corpos-lisboa");
  const trigger = page.getByRole("button", { name: /Ampliar imagem/ }).first();
  await trigger.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("ArrowRight");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(trigger).toBeFocused();
});
test("contactos diretos sem formulário", async ({ page }) => {
  await page.goto("/contactos");
  await expect(page.locator("form")).toHaveCount(0);
  await expect(page.getByRole("link", { name: "Falar connosco" })).toHaveAttribute("href", company.whatsappUrl!);
  await expect(page.getByRole("link", { name: "Instagram / legonpt" })).toHaveAttribute("href", "https://www.instagram.com/legonpt/");
});
test("Escadas Colombo com nova capa e duas fotografias na galeria", async ({ page }) => {
  await page.goto("/projetos");
  await page.getByRole("link", { name: "Ver projeto: Escadas Colombo" }).click();
  await expect(page.locator("h1")).toHaveText("Escadas Colombo");
  await expect(page.locator(".wide-visual img")).toHaveAttribute("src", /escadaa/);
  const thumbnails = page.locator(".gallery-trigger");
  await expect(thumbnails).toHaveCount(2);
  for (const image of await thumbnails.locator("img").all()) {
    await image.scrollIntoViewIfNeeded();
    await image.evaluate((img: HTMLImageElement) => img.decode());
  }
  await thumbnails.first().click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await page.keyboard.press("ArrowRight");
  await expect(dialog.locator("img")).toHaveAttribute("src", /escadas-2/);
  await page.keyboard.press("ArrowRight");
  await expect(dialog.locator("img")).toHaveAttribute("src", /escadas\.jpeg/);
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
});
test("404", async ({ page }) => {
  const response = await page.goto("/pagina-inexistente");
  expect(response?.status()).toBe(404);
  await expect(page.locator("h1")).toContainText("Este caminho");
});
test("acessibilidade automática WCAG AA", async ({ page }) => {
  for (const route of routes) {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      results.violations,
      `${route}: ${JSON.stringify(results.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })))}`,
    ).toEqual([]);
  }
});
test("capturas para revisão visual", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await page.screenshot({
    path: "test-results/home-desktop.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.screenshot({
    path: "test-results/home-mobile.png",
    fullPage: true,
  });
});

test("links internos e âncoras válidos", async ({ page, request }) => {
  const destinations = new Set<string>();
  for (const route of routes) {
    await page.goto(route);
    const links = await page
      .locator('a[href^="/"]')
      .evaluateAll((nodes) => nodes.map((n) => n.getAttribute("href")!));
    links.forEach((link) => destinations.add(link));
  }
  for (const link of destinations) {
    const url = new URL(link, "http://localhost:3000");
    const response = await request.get(`${url.pathname}${url.search}`);
    expect(response.status(), link).toBe(200);
    if (url.hash) {
      await page.goto(link);
      await expect(page.locator(`[id="${url.hash.slice(1)}"]`)).toHaveCount(1);
    }
  }
});

test("contactos com parâmetro de serviço não mostra formulário", async ({
  page,
}) => {
  await page.goto("/contactos?servico=grc");
  await expect(page.locator("form")).toHaveCount(0);
  await expect(page.getByRole("link", { name: "Falar connosco" })).toBeVisible();
});
