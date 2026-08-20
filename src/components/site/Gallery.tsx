import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { track } from "@/lib/site";
import { cn } from "@/lib/utils";
import heroPool from "@/assets/hero-pool.jpg";
import sunsetPool from "@/assets/sunset-pool.jpg";
import lifestyle from "@/assets/lifestyle.jpg";
import poolModern from "@/assets/pool-modern.jpg";
import poolFamily from "@/assets/pool-family.jpg";
import poolResort from "@/assets/pool-resort.jpg";
import poolCompact from "@/assets/pool-compact.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

type Category = "All" | "Pools" | "Backyards" | "Details" | "Lifestyle";

const items: { src: string; alt: string; cat: Exclude<Category, "All"> }[] = [
  { src: heroPool, alt: "Luxury inground fiberglass swimming pool in a Florida backyard", cat: "Pools" },
  { src: poolModern, alt: "Modern fiberglass pool installed in a contemporary backyard", cat: "Pools" },
  { src: poolFamily, alt: "Fiberglass pool with tanning ledge and travertine deck", cat: "Pools" },
  { src: poolResort, alt: "Resort style fiberglass pool with spa and water features", cat: "Pools" },
  { src: poolCompact, alt: "Compact fiberglass plunge pool in a small modern backyard", cat: "Pools" },
  { src: g1, alt: "Aerial view of a fiberglass pool with modern backyard landscaping", cat: "Backyards" },
  { src: g3, alt: "Screen enclosed pool patio at a Florida home", cat: "Backyards" },
  { src: g4, alt: "Outdoor kitchen and pergola beside a lit swimming pool", cat: "Backyards" },
  { src: g2, alt: "Close-up of pool waterline tile and travertine coping detail", cat: "Details" },
  { src: g6, alt: "Spa spillover with LED pool lighting at night", cat: "Details" },
  { src: lifestyle, alt: "Family enjoying an inground fiberglass swimming pool", cat: "Lifestyle" },
  { src: g5, alt: "Homeowners relaxing beside a luxury backyard pool at sunset", cat: "Lifestyle" },
  { src: sunsetPool, alt: "Luxury backyard fiberglass pool glowing at sunset", cat: "Lifestyle" },
];

const categories: Category[] = ["All", "Pools", "Backyards", "Details", "Lifestyle"];

export function Gallery() {
  const [active, setActive] = useState<Category>("All");
  const visible = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="gallery" className="bg-navy py-20 text-navy-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-aqua">Gallery</p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold uppercase sm:text-4xl">
            See what your backyard could become.
          </h2>
        </Reveal>

        <div
          className="mt-9 -mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:flex-wrap md:px-0"
          role="tablist"
          aria-label="Gallery categories"
        >
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={cn(
                "shrink-0 snap-start rounded-full border px-5 py-2.5 font-display text-[0.65rem] font-bold tracking-[0.16em] uppercase transition-colors",
                active === c
                  ? "border-aqua bg-aqua text-aqua-foreground"
                  : "border-navy-foreground/25 text-navy-foreground/75 hover:border-aqua hover:text-aqua",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <Reveal key={item.alt} delay={(i % 6) * 70}>
              <div className="group relative overflow-hidden rounded-md">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/25"
                  aria-hidden
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Button
            variant="quote"
            size="xl"
            asChild
            onClick={() => track("click_quote", { location: "gallery" })}
          >
            <a href="#quote">Get Your Free Quote</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
