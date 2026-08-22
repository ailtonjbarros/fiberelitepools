import { Phone, Instagram } from "lucide-react";
import logoAsset from "@/assets/fiber-elite-pools-logo.png.asset.json";

import { NAV, SITE, track } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy pb-24 text-navy-foreground md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={logoAsset.url}
                alt={`${SITE.name} logo`}
                className="h-14 w-auto brightness-0 invert"
              />
            </div>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
              Premium fiberglass pools and professional installation designed to transform your
              backyard.
            </p>
            <p className="mt-4 text-sm text-navy-foreground/70">{SITE.serviceArea}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-[0.65rem] font-bold tracking-[0.2em] text-aqua uppercase">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-navy-foreground/75 transition-colors hover:text-aqua"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-[0.65rem] font-bold tracking-[0.2em] text-aqua uppercase">
              Contact
            </h2>
            <a
              id="footer-call"
              href={SITE.phoneHref}
              onClick={() => track("click_phone", { location: "footer" })}
              className="mt-5 inline-flex items-center gap-2 font-display text-lg font-extrabold transition-colors hover:text-aqua"
            >
              <Phone className="size-4 text-aqua" aria-hidden /> {SITE.phone}
            </a>
            <p className="mt-4 text-sm text-navy-foreground/70">{SITE.domain}</p>
            <a
              id="footer-instagram"
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("click_instagram", { location: "footer" })}
              className="mt-4 inline-flex items-center gap-2 text-sm text-navy-foreground/70 transition-colors hover:text-aqua"
              aria-label="Follow Fiber Elite Pools on Instagram"
            >
              <Instagram className="size-5 text-aqua" aria-hidden />
              <span className="font-medium">@fiberelitepools</span>
            </a>
            <a
              href="#quote"
              onClick={() => track("click_quote", { location: "footer" })}
              className="mt-6 inline-flex font-display text-[0.68rem] font-bold tracking-[0.18em] text-aqua uppercase underline underline-offset-8"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-navy-foreground/15 pt-6 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Fiber Elite Pools. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="transition-colors hover:text-aqua">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-aqua">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
