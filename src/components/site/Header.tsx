import { useEffect, useState } from "react";
import { Menu, Phone, X, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV, SITE, track } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-background/95 shadow-card backdrop-blur-md"
          : "bg-gradient-to-b from-navy/70 to-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 md:px-8">
        <a
          href="#home"
          className="flex items-center gap-2.5"
          aria-label={`${SITE.name} home`}
          onClick={() => setOpen(false)}
        >
          <img
            src={logoAsset.url}
            alt={`${SITE.name} logo`}
            className={cn(
              "h-11 w-auto transition-all sm:h-12",
              dark && "brightness-0 invert",
            )}
          />

        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "font-display text-[0.7rem] font-bold tracking-[0.16em] whitespace-nowrap uppercase transition-colors",
                dark
                  ? "text-background/85 hover:text-aqua"
                  : "text-navy/75 hover:text-aqua",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            id="header-call"
            href={SITE.phoneHref}
            onClick={() => track("click_phone", { location: "header" })}
            className={cn(
              "group flex items-center gap-2 transition-colors",
              dark ? "text-background" : "text-navy",
            )}
          >
            <Phone className="size-4 text-aqua" aria-hidden />
            <span className="text-left leading-tight">
              <span className="block font-display text-[0.6rem] font-bold tracking-[0.2em] uppercase opacity-70">
                Call Now
              </span>
              <span className="block font-display text-sm font-extrabold whitespace-nowrap">{SITE.phone}</span>
            </span>
          </a>
          <Button
            id="header-quote"
            variant="quote"
            size="xl"
            asChild
            onClick={() => track("click_quote", { location: "header" })}
          >
            <a href="#quote">Get a Free Quote</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-md transition-colors lg:hidden",
            dark ? "text-background" : "text-navy",
          )}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3.5 font-display text-sm font-bold tracking-[0.14em] text-navy uppercase last:border-0"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 py-4">
              <Button
                variant="quote"
                size="xl"
                asChild
                onClick={() => {
                  track("click_quote", { location: "mobile_menu" });
                  setOpen(false);
                }}
              >
                <a href="#quote">Get a Free Quote</a>
              </Button>
              <Button
                variant="outlineNavy"
                size="xl"
                asChild
                onClick={() => track("click_phone", { location: "mobile_menu" })}
              >
                <a href={SITE.phoneHref}>Call {SITE.phone}</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-navy/20 bg-navy/95 backdrop-blur-md md:hidden">
      <a
        id="sticky-call"
        href={SITE.phoneHref}
        onClick={() => track("click_phone", { location: "sticky_bar" })}
        className="flex items-center justify-center gap-2 py-4 font-display text-xs font-extrabold tracking-[0.16em] text-navy-foreground uppercase"
      >
        <Phone className="size-4 text-aqua" aria-hidden /> Call Now
      </a>
      <a
        id="sticky-quote"
        href="#quote"
        onClick={() => track("click_quote", { location: "sticky_bar" })}
        className="flex items-center justify-center bg-aqua py-4 font-display text-xs font-extrabold tracking-[0.16em] text-aqua-foreground uppercase"
      >
        Get Free Quote
      </a>
    </div>
  );
}
