"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/data/site-config";
import { assets } from "@/data/assets";
import { company } from "@/data/company";
export function Brand() {
  return (
    <>
      {assets.logo ? (
        <Image
          src={assets.logo}
          alt="LEGON"
            width={1076}
            height={691}
            sizes="110px"
          className="brand-image"
        />
      ) : (
        <span className="wordmark">
          LEGON<span className="brand-note">MARCA TIPOGRÁFICA PROVISÓRIA</span>
        </span>
      )}
    </>
  );
}
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    const modal = dialog.current;
    const opener = toggle.current;
    modal?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      modal?.close();
      document.body.style.overflow = previous;
      opener?.focus();
    };
  }, [open]);
  return (
    <header
      className={`site-header ${pathname === "/" && !scrolled ? "over-hero" : ""}`}
    >
      <div className="header-inner">
        <Link href="/" aria-label="LEGON — Início">
          <Brand />
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={pathname === n.href ? "page" : undefined}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" href={company.whatsappUrl || "/contactos"} target={company.whatsappUrl ? "_blank" : undefined} rel={company.whatsappUrl ? "noopener noreferrer" : undefined}>
          Pedir orçamento <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <Menu />
        </button>
      </div>
      <dialog
        ref={dialog}
        id="mobile-navigation"
        className="mobile-menu"
        onCancel={() => setOpen(false)}
        aria-label="Menu de navegação"
      >
        <div className="mobile-menu-top">
          <Brand />
          <button onClick={() => setOpen(false)} aria-label="Fechar menu">
            <X />
          </button>
        </div>
        <nav>
          {navigation.map((n, i) => (
            <Link
              href={n.href}
              key={n.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === n.href ? "page" : undefined}
            >
              <small>0{i + 1}</small>
              {n.label}
              <ArrowUpRight size={20} />
            </Link>
          ))}
        </nav>
        <p className="eyebrow">MONTAGEM ESPECIALIZADA · PORTUGAL E ESPANHA</p>
      </dialog>
    </header>
  );
}
