# Portifolio-Legon

Website institucional e portfólio digital da LEGON, empresa especializada na montagem de pré-fabricados em betão, GRC, reparações e acabamentos. Projeto desenvolvido com foco em design moderno, responsividade e experiência do utilizador.

## LEGON — Website institucional

Next.js App Router, React, TypeScript, Tailwind CSS, Motion e Lucide. Conteúdo em português de Portugal. Não foi realizado deploy.

## Executar localmente

```powershell
# Se Node/npm não estiverem no PATH desta sessão:
$env:Path = 'C:\Program Files\nodejs;' + $env:Path
npm.cmd install
npm.cmd run dev
```

Abrir o endereço indicado pelo terminal. Para produção local: `npm.cmd run build` e `npm.cmd start`.

## Verificações

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
npx.cmd playwright install chromium
npm.cmd run test:e2e
```

Os testes E2E requerem a aplicação em `http://localhost:3000` (ou `PLAYWRIGHT_BASE_URL`).

## Organização

- `src/app/`: páginas, layout, estilos, SEO, 404, sitemap e robots.
- `src/components/`: navegação, imagens, serviços, projetos, filtros, galeria, formulário e WhatsApp.
- `src/data/`: dados empresariais, serviços, projetos, assets e configuração SEO.
- `.opencode/skills/legon-premium-frontend/SKILL.md`: skill fornecida, preservada.

## Substituir imagens

### Favicon LEGON

O símbolo fornecido em `icone.png` está preservado em `public/images/branding/icone-original.png`. Os ícones são configurados automaticamente pelas convenções do Next.js: `src/app/favicon.ico` (16/32/48 px), `src/app/icon.png` (32 px) e `src/app/apple-icon.png` (180 px). Existem ainda PNGs de 192 e 512 px e `public/apple-touch-icon.png`. Não foram alteradas as cores nem as proporções do símbolo. Para regenerar: `node scripts/generate-favicons.mjs`.

O carregamento das referências no navegador é verificado pelo teste de favicons. Se a aba ainda mostrar o ícone anterior, fechar/reabrir a aba ou limpar a cache de ícones do navegador.

Não foram encontrados assets originais. As composições geométricas são placeholders explicitamente identificados, não fotografias de obras.

1. Colocar o logotipo aprovado em `public/images/branding/`.
2. Colocar fotografias originais nas pastas `hero`, `services`, `projects/<slug>` e `safety`.
3. Editar `src/data/assets.ts`: definir `logo` e os campos `src` com caminhos como `/images/hero/montagem.webp`; atualizar `alt` e `caption` com descrições verdadeiras, retirando as menções a fotografias pendentes.
4. Acrescentar imagens à propriedade `gallery` em `src/data/projects.ts` para ativar navegação entre fotografias. Apenas projetos `published && verified` são mostrados.

A página de serviços apresenta apenas as especialidades por escrito, sem fotografias ou painéis ilustrativos.

O logotipo temporário é apenas tipográfico, sem símbolo inventado. O verde #A6FF00 é aproximado: ajustar o token em `globals.css` ao logotipo oficial. Não existem imagens ou código retirados das referências.

## Integrações pendentes

- WhatsApp: definir `company.whatsappUrl` em `src/data/company.ts` apenas com URL verificado. Enquanto `null`, o componente não aparece.
- Formulário: validação local apenas, sem armazenamento ou transmissão. O botão não simula envio. Implementar endpoint real, proteção anti-abuso e estados de envio; aprovar informações de privacidade e consentimento antes de ativar. Não existe e-mail institucional inventado.
- SEO: definir `NEXT_PUBLIC_SITE_URL` em `.env.local` quando existir domínio oficial. Até lá, robots e metadados indicam não indexar, sitemap vazio, sem domínio fictício. Open Graph tem título e descrição; imagem social depende de asset aprovado.
- Rever direitos de publicação das fotografias e conteúdo legal antes de lançamento. Nome público do cliente da adega e designação Quinta da Gandarinha não foram destacados.

## Interações

Menu mobile e lightbox utilizam dialogs nativos para foco e Escape. Galeria suporta setas do teclado quando há várias imagens; atualmente há um placeholder por projeto. Filtros incluem estados vazios sem obras inventadas. Contacto telefónico e Instagram funcionais. Nenhum pedido de orçamento é transmitido nesta versão.

## Qualidade e limites

Testes Playwright abrangem rotas, links internos e âncoras, cinco larguras (375, 768, 1024, 1440 e 1920 px), menu, foco, filtros, galeria, validação sem envio e 404. Axe verifica automaticamente regras WCAG A/AA; é uma verificação parcial e não uma certificação de acessibilidade. Capturas de revisão são geradas em `test-results/`.

A auditoria de produção (`npm audit --omit=dev`) não encontrou vulnerabilidades. A auditoria completa sinaliza cinco alertas elevados na cadeia de lint (`eslint-config-next → fast-glob → micromatch → braces`), sem atualização compatível indicada pelo npm à data da implementação. Não foi aplicado `audit fix --force` nem downgrade do Next.js. Reavaliar quando existir correção upstream.

Ainda falta validar com fotografias definitivas, navegadores/dispositivos adicionais, leitores de ecrã e métricas Core Web Vitals num ambiente de produção representativo. O formulário, dados legais, domínio e recursos oficiais dependem de confirmação antes do lançamento.
