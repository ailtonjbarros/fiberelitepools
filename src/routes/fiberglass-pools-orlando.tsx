import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Phone } from "lucide-react";

import { Header, MobileStickyCta } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Process, WhyFiberglass } from "@/components/site/Sections";
import { Button } from "@/components/ui/button";
import { SITE, track } from "@/lib/site";
import heroPool from "@/assets/hero-pool.jpg";
import poolModern from "@/assets/pool-modern.jpg";
import poolFamily from "@/assets/pool-family.jpg";
import poolCompact from "@/assets/pool-compact.jpg";

const TITLE = "Fiberglass Pools Orlando, FL | Fiber Elite Pools";
const DESCRIPTION =
  "Fiberglass pools in Orlando, FL — premium pool shells and professional installation for Central Florida backyards. Get your free Orlando pool quote from Fiber Elite Pools.";
const URL = `${SITE.url}/fiberglass-pools-orlando`;

const neighborhoods = SITE.locations;

const localFaqs = [
  {
    q: "How long does a fiberglass pool installation take in Orlando?",
    a: "Most fiberglass pool projects move much faster than concrete because the shell arrives pre-finished. Timelines depend on permitting with your local Orlando-area jurisdiction, site access and the deck and screen enclosure work you choose. We walk you through a project schedule during your consultation.",
  },
  {
    q: "Do I need a permit for a pool in Orlando?",
    a: "Yes. Pools in the Orlando area require permits and inspections, and many properties also have HOA requirements and barrier or safety rules. We handle the process with you so nothing stalls the build.",
  },
  {
    q: "Why is fiberglass a good fit for Central Florida backyards?",
    a: "Fiberglass shells have a smooth, non-porous gelcoat surface that resists algae, which means less scrubbing and generally fewer chemicals in Florida's long swim season. The shells are also engineered for our sandy soils and high water table when installed correctly.",
  },
  {
    q: "Can a fiberglass pool fit a small Orlando backyard?",
    a: "Often yes. Compact shells are designed for tighter urban and suburban lots, courtyards and screened patios. Site access for delivery is the main factor, and we assess that before recommending a model.",
  },
];

export const Route = createFileRoute("/fiberglass-pools-orlando")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "fiberglass pools orlando, fiberglass pool installation orlando, inground pools orlando fl, pool builder orlando",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: "Fiberglass Pool Installation in Orlando, FL",
              description: DESCRIPTION,
              url: URL,
              provider: {
                "@type": "LocalBusiness",
                name: SITE.name,
                telephone: SITE.phone,
                url: SITE.url,
              },
              areaServed: neighborhoods.map((city) => ({ "@type": "City", name: `${city}, FL` })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
                { "@type": "ListItem", position: 2, name: "Fiberglass Pools Orlando", item: URL },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: localFaqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: OrlandoPage,
});

function OrlandoPage() {
  useEffect(() => {
    track("page_view", { page: "orlando" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden">
          <img
            src={heroPool}
            alt="Inground fiberglass swimming pool installed in an Orlando, Florida backyard"
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-navy/70" aria-hidden />
          <div className="mx-auto max-w-7xl px-4 pt-36 pb-20 md:px-8 md:pt-44 md:pb-28">
            <p className="eyebrow text-aqua">Orlando &amp; Central Florida</p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] font-extrabold text-background uppercase sm:text-5xl">
              Fiberglass Pools in Orlando, FL
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-background/85 sm:text-lg">
              Premium fiberglass pool shells and professional installation for Orlando homeowners —
              designed around your lot, your permitting requirements and the way your family
              actually uses the backyard.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                variant="quote"
                size="xl"
                asChild
                onClick={() => track("click_quote", { location: "orlando_hero" })}
              >
                <a href="#quote">Get Your Free Quote</a>
              </Button>
              <Button
                variant="outlineLight"
                size="xl"
                asChild
                onClick={() => track("click_phone", { location: "orlando_hero" })}
              >
                <a href={SITE.phoneHref}>
                  <Phone className="size-4" aria-hidden /> Call {SITE.phone}
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="font-display text-2xl font-extrabold text-navy uppercase sm:text-3xl">
                Built for Central Florida backyards
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Orlando has one of the longest swim seasons in the country, and that changes what
                  a pool needs to do. A fiberglass shell arrives pre-finished with a smooth,
                  non-porous gelcoat surface, so it resists algae and generally needs less brushing
                  and fewer chemicals than a porous concrete interior — a real difference across a
                  year-round season.
                </p>
                <p>
                  Central Florida sites also bring their own conditions: sandy soils, a high water
                  table in many neighborhoods, screen enclosures, tight side-yard access and HOA
                  design rules. We assess all of it before recommending a shell, so the model we
                  propose is one we can actually deliver and set on your property.
                </p>
                <p>
                  Every project starts with a free consultation and a written proposal. Pricing,
                  scope and schedule are confirmed after we review your site — no guesswork numbers.
                </p>
              </div>
            </div>

            <aside className="rounded-2xl border border-border bg-sand p-8">
              <h2 className="font-display text-base font-extrabold tracking-[0.1em] text-navy uppercase">
                Orlando service area
              </h2>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-muted-foreground">
                {neighborhoods.map((city) => (
                  <li key={city}>{city}, FL</li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">{SITE.serviceArea}</p>
              <a
                href={SITE.phoneHref}
                onClick={() => track("click_phone", { location: "orlando_sidebar" })}
                className="mt-6 inline-flex items-center gap-2 font-display text-lg font-extrabold text-navy transition-colors hover:text-aqua"
              >
                <Phone className="size-4 text-aqua" aria-hidden /> {SITE.phone}
              </a>
            </aside>
          </div>
        </section>

        <section className="bg-sand/60 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="font-display text-2xl font-extrabold text-navy uppercase sm:text-3xl">
              Pool styles Orlando homeowners choose
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {[
                {
                  img: poolModern,
                  title: "Modern",
                  copy: "Clean rectangular geometry with sun shelves and spillover features — a natural fit for newer Lake Nona and Winter Park builds.",
                },
                {
                  img: poolFamily,
                  title: "Family",
                  copy: "Generous shallow ends and safe entry steps for households with kids, plus room to swim laps at the deep end.",
                },
                {
                  img: poolCompact,
                  title: "Compact",
                  copy: "Designed for tighter suburban lots, courtyards and screened patios where delivery access is limited.",
                },
              ].map((c) => (
                <article key={c.title} className="overflow-hidden rounded-2xl bg-background shadow-card">
                  <img
                    src={c.img}
                    alt={`${c.title} fiberglass pool design for Orlando homes`}
                    className="h-56 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="font-display text-lg font-extrabold text-navy uppercase">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <WhyFiberglass />
        <Process />

        <section className="mx-auto max-w-3xl px-4 py-20 md:px-8">
          <h2 className="font-display text-2xl font-extrabold text-navy uppercase sm:text-3xl">
            Orlando fiberglass pool questions
          </h2>
          <dl className="mt-10 space-y-8">
            {localFaqs.map((f) => (
              <div key={f.q}>
                <dt className="font-display text-base font-extrabold text-navy">{f.q}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <QuoteForm />
      </main>
      <Footer />
      <MobileStickyCta />
    </div>
  );
}
