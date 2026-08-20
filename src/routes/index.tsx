import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header, MobileStickyCta } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  Collection,
  Dream,
  Financing,
  Process,
  ServiceArea,
  SocialProof,
  Transformation,
  TrustStrip,
  WhyFiberglass,
  WhyUs,
} from "@/components/site/Sections";
import { Gallery } from "@/components/site/Gallery";
import { Faq, faqs } from "@/components/site/Faq";
import { QuoteForm } from "@/components/site/QuoteForm";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { SITE, track } from "@/lib/site";

const TITLE = "Fiber Elite Pools | Premium Fiberglass Pools & Installation";
const DESCRIPTION =
  "Transform your backyard with a premium fiberglass pool from Fiber Elite Pools. Explore beautiful pool designs and professional installation. Get your free quote today.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "fiberglass pools, fiberglass pool installation, inground fiberglass pools, fiberglass pool company, fiberglass pools Florida, pool installation Florida",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": `${SITE.url}/#business`,
              name: SITE.name,
              description: DESCRIPTION,
              url: SITE.url,
              telephone: SITE.phone,
              areaServed: SITE.locations.map((city) => ({
                "@type": "City",
                name: `${city}, FL`,
              })),
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
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
  component: HomePage,
});

function HomePage() {
  useEffect(() => {
    track("page_view", { page: "home" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Dream />
        <Collection />
        <WhyFiberglass />
        <Process />
        <Transformation />
        <Gallery />
        <WhyUs />
        <SocialProof />
        <ServiceArea />
        <Financing />
        <Faq />
        <QuoteForm />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyCta />
    </div>
  );
}
