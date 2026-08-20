import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SITE, track } from "@/lib/site";
import sunsetPool from "@/assets/sunset-pool.jpg";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={sunsetPool}
        alt="Luxury backyard fiberglass swimming pool glowing at sunset"
        width={1920}
        height={1088}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-navy/70" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 py-24 text-center md:px-8 md:py-36">
        <Reveal>
          <h2 className="font-display text-3xl leading-[1.1] font-extrabold text-background uppercase sm:text-4xl lg:text-5xl">
            Your backyard.
            <br />
            Your pool.
            <br />
            Your new way of living.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-background/85 sm:text-lg">
            Let&apos;s turn your vision into a backyard you&apos;ll never want to leave.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              id="final-quote"
              variant="quote"
              size="xl"
              asChild
              onClick={() => track("click_quote", { location: "final_cta" })}
            >
              <a href="#quote">Get Your Free Quote</a>
            </Button>
            <Button
              id="final-call"
              variant="outlineLight"
              size="xl"
              asChild
              onClick={() => track("click_phone", { location: "final_cta" })}
            >
              <a href={SITE.phoneHref}>
                <Phone aria-hidden /> Call {SITE.phone}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
