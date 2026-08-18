"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { personaList } from "../for/persona-content";
import { serviceLeverGroups } from "./service-lever-groups";

interface SiteHeaderProps {
  activeService?: string;
  ctaHref: string;
  ctaLabel: string;
  homeHref?: string;
}

export function SiteHeader({
  activeService,
  ctaHref,
  ctaLabel,
  homeHref = "/",
}: SiteHeaderProps) {
  const [navOpen, setNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const servicesTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!navOpen && !servicesOpen) return;

    const closeWhenOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setNavOpen(false);
        setServicesOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setNavOpen(false);
        setServicesOpen(false);
        if (navOpen) {
          menuToggleRef.current?.focus();
        } else {
          servicesTriggerRef.current?.focus();
        }
      }
    };

    document.addEventListener("pointerdown", closeWhenOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeWhenOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [navOpen, servicesOpen]);

  const closeMenu = () => {
    setNavOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className="site-header site-header-services"
      onClick={() => {
        if (navOpen || servicesOpen) closeMenu();
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
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/skills" onClick={closeMenu}>Free skills</Link>
        <div className="services-menu">
          <button
            aria-controls="services-mega-menu"
            aria-expanded={servicesOpen}
            className="services-trigger"
            onClick={(event) => {
              event.stopPropagation();
              setServicesOpen((open) => !open);
            }}
            ref={servicesTriggerRef}
            type="button"
          >
            Services <span aria-hidden="true">+</span>
          </button>
          {servicesOpen ? (
            <div className="services-mega" id="services-mega-menu">
              <div className="services-mega-heading">
                <p>START FROM THE PROBLEM</p>
                <strong>Tell us what is stuck. We ship the fix.</strong>
              </div>
              <div className="services-mega-groups">
                {serviceLeverGroups.map((group) => (
                  <div className="services-mega-group" key={group.label}>
                    <p className="services-mega-group-label">{group.label}</p>
                    {group.services.map((service) => (
                      <Link
                        aria-label={`${service.title} service page`}
                        aria-current={activeService === service.slug ? "page" : undefined}
                        className={activeService === service.slug ? "is-current" : undefined}
                        href={service.href}
                        key={service.slug}
                        onClick={closeMenu}
                      >
                        <span className="services-mega-tile-lever">{service.lever}</span>
                        <b>{service.problem}</b>
                        <small>{service.title}. {service.description}</small>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
              <div className="services-mega-personas">
                <p>OR START FROM WHERE YOU SIT</p>
                {personaList.map((persona) => (
                  <Link href={`/for/${persona.slug}`} key={persona.slug} onClick={closeMenu}>
                    {persona.label.replace(/^For /, "")}
                  </Link>
                ))}
              </div>
              <Link className="services-home-link" href="/services" onClick={closeMenu}>
                Explore all B2B SaaS GTM services <span aria-hidden="true">→</span>
              </Link>
            </div>
          ) : null}
        </div>
        <Link href="/#workflow" onClick={closeMenu}>How it works</Link>
        <Link href="/pricing" onClick={closeMenu}>Plans</Link>
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
          setServicesOpen(false);
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
