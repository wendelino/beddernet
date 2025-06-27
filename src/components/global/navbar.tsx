"use client";

import * as React from "react";

import { siteConfig as config } from "@/lib/siteConfig";

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
  Navbar as ResizableNavbar,
} from "@/components/shared/resizable-navbar";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  const navItems = config.pages_links.map((page) => ({
    name: page.label,
    link: page.href,
  }));

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <ResizableNavbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />

        <NavbarButton href="/anfrage">
          Projektanfrage <ArrowUpRight className="ml-2 size-6" />
        </NavbarButton>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative "
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <NavbarButton href="/anfrage" className="w-full">
            Projektanfrage <ArrowUpRight className="ml-2 size-6" />
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
}
