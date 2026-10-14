import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { company } from "@/data/company";
import { navigation } from "@/data/site-config";
import { services } from "@/data/services";
import { Brand } from "./site-header";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" aria-label="LEGON — Início">
            <Brand />
          </Link>
          <p className="footer-slogan">{company.slogan}</p>
        </div>
        <div>
          <p className="eyebrow">EXPLORAR</p>
          {navigation.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </div>
        <div>
          <p className="eyebrow">ESPECIALIDADES</p>
          {services.map((s) => (
            <Link key={s.slug} href={`/servicos#${s.slug}`}>
              {s.shortTitle}
            </Link>
          ))}
        </div>
        <div>
          <p className="eyebrow">FALE CONNOSCO</p>
          <a className="footer-phone" href={company.phoneUrl}>
            {company.phone}
          </a>
          <small>Chamada para a rede móvel nacional</small>
          <a href={company.instagram} target="_blank" rel="noopener noreferrer">
            Instagram <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <p>{company.territory}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} LEGON. Todos os direitos reservados.
        </span>
        <span>MONTAGEM. RIGOR. LEGADO.</span>
      </div>
    </footer>
  );
}
