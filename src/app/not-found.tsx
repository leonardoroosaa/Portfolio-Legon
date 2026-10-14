import { ButtonLink } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="container not-found">
      <p className="eyebrow">404 / PÁGINA NÃO ENCONTRADA</p>
      <h1>
        Este caminho ainda não foi construído<span className="lime">.</span>
      </h1>
      <p>
        A página que procura não existe. Volte ao início ou explore os nossos
        projetos.
      </p>
      <div className="button-group">
        <ButtonLink href="/">Voltar ao início</ButtonLink>
        <ButtonLink href="/projetos" secondary>
          Explorar projetos
        </ButtonLink>
      </div>
    </section>
  );
}
