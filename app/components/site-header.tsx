"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { personaList, personaShortLabel } from "../for/persona-content";
import { serviceLeverGroups } from "./service-lever-groups";

interface SiteHeaderProps {
  activeService?: string;
  activePersona?: string;
  ctaHref: string;
  ctaLabel: string;
  homeHref?: string;
}

type OpenMenu = "services" | "personas" | null;

export function SiteHeader({
  activeService,
  activePersona,
  ctaHref,
  ctaLabel,
  homeHref = "/",
}: SiteHeaderProps) {
  const [navOpen, setNavOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const servicesTriggerRef = useRef<HTMLButtonElement>(null);
  const personasTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!navOpen && !openMenu) return;

    const closeWhenOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setNavOpen(false);
        setOpenMenu(null);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const wasOpen = openMenu;
      setNavOpen(false);
      setOpenMenu(null);
      if (wasOpen === "services") {
        servicesTriggerRef.current?.focus();
      } else if (wasOpen === "personas") {
        personasTriggerRef.current?.focus();
      } else if (navOpen) {
        menuToggleRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", closeWhenOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeWhenOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [navOpen, openMenu]);

  const closeMenu = () => {
    setNavOpen(false);
    setOpenMenu(null);
  };

  const toggle = (menu: Exclude<OpenMenu, null>) => (event: React.MouseEvent) => {
    event.stopPropagation();
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  return (
    <header
      className="site-header site-header-services"
      onClick={() => {
        if (navOpen || openMenu) closeMenu();
      }}
      ref={headerRef}
    >
      <Link className="brand" href={homeHref} aria-label="Grow and Close home" onClick={closeMenu}>
        <span className="brand-glyph" aria-hidden="true"><b>G</b><i /><b>C</b></span>
        <span className="brand-name"><b>GROW</b><b><i>&amp;</i> CLOSE</b></span>
      </Link>

      <nav
        aria-label="Primary navigation"
        className="desktop-nav primary-nav"
        data-open={navOpen ? "true" : "false"}
        id="site-navigation"
      >
        <div className="services-menu">
          <button
            aria-controls="services-mega-menu"
            aria-expanded={openMenu === "services"}
            className="services-trigger"
            onClick={toggle("services")}
            ref={servicesTriggerRef}
            type="button"
          >
            Services <span aria-hidden="true">+</span>
          </button>
          {openMenu === "services" ? (
            <div className="services-mega" id="services-mega-menu">
              <div className="services-mega-groups">
                {serviceLeverGroups.map((group) => (
                  <div className="services-mega-group" key={group.label}>
                    <p className="services-mega-group-label">
                      {group.label}
                      <span>{group.question}</span>
                    </p>
                    {group.services.map((service) => (
                      <Link
                        aria-current={activeService === service.slug ? "page" : undefined}
                        className={activeService === service.slug ? "is-current" : undefined}
                        href={service.href}
                        key={service.slug}
                        onClick={closeMenu}
                      >
                        <b>{service.title}</b>
                        <small>{service.problem}</small>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
              <Link className="services-home-link" href="/services" onClick={closeMenu}>
                All B2B SaaS GTM services <span aria-hidden="true">→</span>
              </Link>
            </div>
          ) : null}
        </div>

        <div className="services-menu">
          <button
            aria-controls="personas-menu"
            aria-expanded={openMenu === "personas"}
            className="services-trigger"
            onClick={toggle("personas")}
            ref={personasTriggerRef}
            type="button"
          >
            Who it is for <span aria-hidden="true">+</span>
          </button>
          {openMenu === "personas" ? (
            <div className="personas-menu" id="personas-menu">
              {personaList.map((persona) => (
                <Link
                  aria-current={activePersona === persona.slug ? "page" : undefined}
                  className={activePersona === persona.slug ? "is-current" : undefined}
                  href={`/for/${persona.slug}`}
                  key={persona.slug}
                  onClick={closeMenu}
                >
                  <span className="personas-menu-role">{persona.role}</span>
                  <b>{personaShortLabel(persona.label)}</b>
                  <small>{persona.symptomHeading}</small>
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <Link href="/#workflow" onClick={closeMenu}>How it works</Link>
        <Link href="/pricing" onClick={closeMenu}>Plans</Link>
        <Link href="/skills" onClick={closeMenu}>Free skills</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/#faq" onClick={closeMenu}>FAQ</Link>
      </nav>

      <Link className="header-cta" href={ctaHref} onClick={closeMenu}>{ctaLabel}</Link>
      <button
        aria-controls="site-navigation"
        aria-expanded={navOpen}
        aria-label={navOpen ? "Close navigation" : "Open navigation"}
        className="menu-toggle"
        onClick={(event) => {
          event.stopPropagation();
          setNavOpen((open) => !open);
          setOpenMenu(null);
        }}
        ref={menuToggleRef}
        type="button"
      >
        <span>Menu</span>
        <i aria-hidden="true"><b /><b /></i>
      </button>
    </header>
  );
}
