import { ArrowUpRight, MessageCircle } from "lucide-react";
import { PageIntro } from "@/components/ui";
import { company } from "@/data/company";
import { pageMetadata } from "@/data/site-config";
export const metadata = pageMetadata(
  "Contactos e orçamento",
  "Fale com a LEGON pelo +351 915 486 194. Montagem de pré-fabricados em betão em Portugal e Espanha.",
  "/contactos",
);
export default function Contact() {
  return (
    <>
      <PageIntro
        label="05 / CONTACTOS"
        title="Vamos construir o próximo projeto?"
        text="Conte-nos o que tem em preparação. Estamos disponíveis para conversar sobre a sua intervenção."
      />
      <section className="container contact-layout contact-direct">
        <aside className="contact-info">
          <p className="eyebrow">CONTACTO DIRETO</p>
          <a href={company.phoneUrl} className="contact-phone">
            {company.phone} <ArrowUpRight size={24} />
          </a>
          <p className="small-text">Chamada para a rede móvel nacional</p>
          <a className="button" href={company.whatsappUrl || company.phoneUrl} target={company.whatsappUrl ? "_blank" : undefined} rel={company.whatsappUrl ? "noopener noreferrer" : undefined}>
            Falar connosco <MessageCircle size={18} />
          </a>
          <div className="contact-block">
            <p className="eyebrow">ACOMPANHE O NOSSO TRABALHO</p>
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Instagram / legonpt <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="contact-block">
            <p className="eyebrow">ÁREA DE ATUAÇÃO</p>
            <p className="lead">Portugal e Espanha</p>
            <p>
              Montagem, reparação e selagem onde os projetos precisam de nós.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
