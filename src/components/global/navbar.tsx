"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"; 
import WidthWrapper from "../shared/width-wrapper";
import AnimatedLogo from "../shared/animated-logo";
import { ThemeButton } from "./theme-button";
import { ShimmerButton } from "../shared/shimmer-button";
import { config } from "@/lib/config";
 

export function NavBar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg transition-all duration-300",
          isScrolled ? "border-b h-16 md:h-20 shadow-sm" : "h-32"
        )}
      >
        <WidthWrapper className="flex items-center justify-between h-full gap-4">
          <Link
            href="/"
            className={cn(
              "transition-all duration-300  flex gap-3 items-center "
            )}
          >
            <span
              className={cn(
                "transition-all duration-300",
                isScrolled ? "w-16 md:w-16" : "w-20 md:w-20"
              )}
            >
              <AnimatedLogo />
            </span>

            <span
              className={cn(
                "transition-all duration-300 font-bold text-xl"
              )}
            >
              BedderNet
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-10">
            {config.pages.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                active={pathname === link.href}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <ShimmerButton className="ml-auto">
            <Calendar className="size-4 mr-2" /> Termin vereinbaren
          </ShimmerButton>
          <ThemeButton className="hidden md:flex" />
          <div className="flex md:hidden items-center justify-end gap-4">
            

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-5 w-5" />
                  <SheetTitle className="sr-only">Toggle menu</SheetTitle>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                <ThemeButton />
                  {config.pages.map((link) => (
                    <NavLink
                      key={link.href}
                      href={link.href}
                      active={pathname === link.href}
                      className="text-lg py-2"
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </WidthWrapper>
      </header>
      <div className="h-36" />{" "}
      {/* Spacer to prevent content from hiding under navbar */}
    </>
  );
}

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}

function NavLink({
  href,
  active,
  className,
  children,
  ...props
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        " transition-colors hover:text-foreground/90",
        active
          ? "underline underline-offset-4 text-foreground"
          : "text-muted-foreground/80",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
