import { Phone, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, track } from "@/lib/site";
import heroPool from "@/assets/hero-pool.jpg";

const indicators = [
  { icon: Sparkles, label: "Premium Fiberglass" },
  { icon: Wrench, label: "Professional Installation" },
  { icon: ShieldCheck, label: "Complete Project Support" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[92svh] overflow-hidden">
      <img
        src={heroPool}
        alt="Luxury inground fiberglass swimming pool in a modern Florida backyard with travertine deck"
        width={1920}
        height={1088}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-navy/55"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-navy/85 via-navy/25 to-navy/60"
        aria-hidden
      />

      <div className="mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-center px-4 pt-28 pb-20 md:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow reveal is-visible text-aqua">Premium Fiberglass Pools</p>
          <h1 className="reveal is-visible mt-5 font-display text-4xl leading-[1.05] font-extrabold text-background uppercase sm:text-5xl lg:text-6xl">
            Your dream backyard starts here.
          </h1>
          <p className="reveal is-visible mt-5 font-display text-lg font-semibold text-aqua sm:text-xl">
            Premium Fiberglass Pools, Expertly Installed.
          </p>
          <p className="reveal is-visible mt-5 max-w-2xl text-base leading-relaxed text-background/85 sm:text-lg">
            Transform your backyard into a beautiful place to relax, entertain, and create lasting
            memories with a professionally installed fiberglass pool designed around your home and
            lifestyle.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              id="hero-quote"
              variant="quote"
              size="xl"
              asChild
              onClick={() => track("click_quote", { location: "hero" })}
            >
              <a href="#quote">Get Your Free Quote</a>
            </Button>
            <Button
              id="hero-call"
              variant="outlineLight"
              size="xl"
              asChild
              onClick={() => track("click_phone", { location: "hero" })}
            >
              <a href={SITE.phoneHref}>
                <Phone aria-hidden /> Call {SITE.phone}
              </a>
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {indicators.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="size-4 text-aqua" aria-hidden />
                <span className="font-display text-[0.7rem] font-bold tracking-[0.16em] text-background/90 uppercase">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
