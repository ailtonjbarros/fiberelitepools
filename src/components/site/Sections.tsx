import {
  Award,
  ClipboardList,
  Compass,
  Droplets,
  Gem,
  HandHeart,
  Hammer,
  Home,
  Layers,
  MapPin,
  MessageSquare,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Timer,
  Waves,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SITE, track } from "@/lib/site";
import lifestyle from "@/assets/lifestyle.jpg";
import poolModern from "@/assets/pool-modern.jpg";
import poolFamily from "@/assets/pool-family.jpg";
import poolResort from "@/assets/pool-resort.jpg";
import poolCompact from "@/assets/pool-compact.jpg";
import g4 from "@/assets/g4.jpg";

/* ---------------------------------------------------------------- Trust strip */

const trustItems = [
  { icon: Gem, label: "Premium Fiberglass Pools" },
  { icon: Wrench, label: "Professional Installation" },
  { icon: Hammer, label: "Quality Craftsmanship" },
  { icon: HandHeart, label: "Personalized Service" },
];

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-sand" aria-label="Why homeowners choose us">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-10 md:grid-cols-4 md:px-8">
        {trustItems.map(({ icon: Icon, label }, i) => (
          <Reveal as="li" key={label} delay={i * 80} className="flex flex-col items-center gap-3 text-center">
            <Icon className="size-6 text-aqua" strokeWidth={1.5} aria-hidden />
            <span className="font-display text-[0.68rem] font-bold tracking-[0.16em] text-navy uppercase">
              {label}
            </span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* --------------------------------------------------------------------- Dream */

export function Dream() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow text-aqua">The Dream</p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-navy uppercase sm:text-4xl">
            More than a pool.
            <br />
            It&apos;s your new favorite place.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            A backyard pool is more than an addition to your home. It&apos;s where weekends become
            memories, friends gather, and everyday life feels a little more like a vacation.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            At Fiber Elite Pools, we make the process of creating that space simple — from selecting
            the right pool to professional installation and the finishing touches.
          </p>
          <Button
            variant="navy"
            size="xl"
            asChild
            className="mt-8"
            onClick={() => track("click_quote", { location: "dream" })}
          >
            <a href="#quote">Start Your Project</a>
          </Button>
        </Reveal>
        <Reveal className="order-1 lg:order-2" delay={120}>
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 hidden h-32 w-32 rounded-md border border-aqua/40 sm:block" aria-hidden />
            <img
              src={lifestyle}
              alt="Family enjoying a fiberglass swimming pool in a landscaped backyard"
              width={1408}
              height={1200}
              loading="lazy"
              decoding="async"
              className="relative aspect-4/3 w-full rounded-md object-cover shadow-elegant"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Collection */

const pools = [
  {
    name: "Modern",
    image: poolModern,
    alt: "Modern rectangular fiberglass pool with clean architectural lines",
    text: "Clean lines and contemporary styling for modern homes.",
  },
  {
    name: "Family",
    image: poolFamily,
    alt: "Family fiberglass pool with wide tanning ledge in a landscaped backyard",
    text: "Comfortable designs created for everyday family enjoyment.",
  },
  {
    name: "Resort",
    image: poolResort,
    alt: "Resort style inground fiberglass pool with spa and water features",
    text: "Larger layouts designed for entertaining and outdoor living.",
  },
  {
    name: "Compact",
    image: poolCompact,
    alt: "Compact fiberglass plunge pool in a small modern backyard",
    text: "Smart designs for homeowners with smaller backyard spaces.",
  },
];

export function Collection() {
  return (
    <section id="pools" className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-aqua">Fiberglass Pools</p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-navy uppercase sm:text-4xl">
            Designed for the way you live.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Beautiful fiberglass pools with modern designs, smooth finishes, and options for
            different backyard spaces.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {pools.map((pool, i) => (
            <Reveal as="article" key={pool.name} delay={i * 90}>
              <div className="group overflow-hidden rounded-md bg-background shadow-card transition-shadow duration-500 hover:shadow-elegant">
                <div className="relative aspect-16/11 overflow-hidden">
                  <img
                    src={pool.image}
                    alt={pool.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" aria-hidden />
                  <h3 className="absolute bottom-5 left-6 font-display text-2xl font-extrabold tracking-[0.14em] text-background uppercase">
                    {pool.name}
                  </h3>
                </div>
                <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{pool.text}</p>
                  <Button
                    variant="outlineNavy"
                    size="lg"
                    asChild
                    className="js-view-pool shrink-0"
                    onClick={() => track("view_pool", { pool_category: pool.name })}
                  >
                    <a href="#quote">View Options</a>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Button
            variant="quote"
            size="xl"
            asChild
            onClick={() => track("click_quote", { location: "collection" })}
          >
            <a href="#quote">Get Your Free Quote</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Why fiberglass */

const benefits = [
  {
    icon: Timer,
    title: "Fast Installation",
    text: "Fiberglass pools can typically be installed much faster than traditional concrete pools, helping you enjoy your backyard sooner.",
  },
  {
    icon: Droplets,
    title: "Low Maintenance",
    text: "The smooth, non-porous surface makes fiberglass pools easy to maintain and clean.",
  },
  {
    icon: ShieldCheck,
    title: "Built for Everyday Life",
    text: "Designed for durability, comfort, and long-term enjoyment.",
  },
  {
    icon: Sparkles,
    title: "Beautiful Finish",
    text: "Modern finishes create a sophisticated look that complements your backyard.",
  },
  {
    icon: Waves,
    title: "Less Upkeep",
    text: "Spend more time enjoying your pool and less time maintaining it.",
  },
  {
    icon: Home,
    title: "Designed Around Your Home",
    text: "Choose a pool style and configuration that fits your backyard and lifestyle.",
  },
];

export function WhyFiberglass() {
  return (
    <section id="why-fiberglass" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-aqua">Why Fiberglass</p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-navy uppercase sm:text-4xl">
            Why choose a fiberglass pool?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal as="article" key={b.title} delay={i * 70}>
              <div className="h-full rounded-md border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-aqua/50 hover:shadow-card">
                <b.icon className="size-7 text-aqua" strokeWidth={1.4} aria-hidden />
                <h3 className="mt-5 font-display text-base font-extrabold tracking-[0.1em] text-navy uppercase">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Button
            variant="quote"
            size="xl"
            asChild
            onClick={() => track("click_quote", { location: "benefits" })}
          >
            <a href="#quote">Get Your Free Quote</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- Process */

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    text: "Tell us what you're looking for, discuss your backyard, lifestyle and vision.",
  },
  {
    icon: Compass,
    title: "Pool Selection & Design",
    text: "We'll help you select the right fiberglass pool and plan the project around your property.",
  },
  {
    icon: ClipboardList,
    title: "Site Preparation",
    text: "Our team coordinates the necessary preparation and project requirements before installation.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    text: "Your fiberglass pool is professionally installed with attention to detail and quality craftsmanship.",
  },
  {
    icon: Layers,
    title: "Final Touches",
    text: "Complete the transformation with decking, landscaping, lighting and other finishing options.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-navy py-20 text-navy-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-aqua">Our Process</p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold uppercase sm:text-4xl">
            From empty backyard to your dream pool.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-foreground/75">
            A simple, guided process designed to make your pool project easier.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90} className="relative">
              <div className="flex h-full flex-col border-t border-navy-foreground/20 pt-6">
                <span className="font-display text-[0.68rem] font-bold tracking-[0.24em] text-aqua uppercase">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <step.icon className="mt-5 size-6 text-navy-foreground/80" strokeWidth={1.4} aria-hidden />
                <h3 className="mt-4 font-display text-base font-extrabold tracking-[0.08em] uppercase">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-foreground/70">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14">
          <Button
            variant="quote"
            size="xl"
            asChild
            onClick={() => track("click_quote", { location: "process" })}
          >
            <a href="#quote">Let&apos;s Design Your Backyard</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Transformation */

const upgrades = [
  "Pool Decking",
  "Landscaping",
  "LED Lighting",
  "Pool Heating",
  "Saltwater Systems",
  "Automation",
  "Spas",
  "Outdoor Living",
  "Pergolas",
  "Water Features",
];

export function Transformation() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow text-aqua">Complete Backyard Transformation</p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-navy uppercase sm:text-4xl">
            Make your pool the centerpiece.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Your pool is only the beginning.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Create a complete outdoor environment designed for entertaining, relaxing and enjoying
            your home.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {upgrades.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-sand px-4 py-2 font-display text-[0.65rem] font-bold tracking-[0.14em] text-navy uppercase"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">
            Available options may vary by project.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <img
            src={g4}
            alt="Outdoor kitchen, pergola and LED lit swimming pool in a luxury backyard at dusk"
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
            className="aspect-4/3 w-full rounded-md object-cover shadow-elegant"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Why our team */

const values = [
  { icon: Award, title: "Quality", text: "We focus on quality materials and professional workmanship." },
  { icon: MessageSquare, title: "Transparency", text: "Clear communication throughout your project." },
  { icon: Ruler, title: "Craftsmanship", text: "Attention to detail from preparation through installation." },
  {
    icon: HandHeart,
    title: "Customer Experience",
    text: "A straightforward, professional experience built around your needs.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow text-aqua">Why Fiber Elite Pools</p>
            <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-navy uppercase sm:text-4xl">
              Built around quality.
              <br />
              Delivered with care.
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              At Fiber Elite Pools, we believe getting a pool should be an exciting experience — not
              a stressful one.
            </p>
            <p>
              Our goal is to combine premium fiberglass pool solutions with professional
              installation, clear communication and personalized service from the first conversation
              to the final result.
            </p>
            <p>
              We focus on doing the details right, keeping homeowners informed and creating outdoor
              spaces they will enjoy for years to come.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal as="article" key={v.title} delay={i * 80}>
              <div className="h-full rounded-md bg-background p-7 shadow-card">
                <v.icon className="size-6 text-aqua" strokeWidth={1.4} aria-hidden />
                <h3 className="mt-5 font-display text-sm font-extrabold tracking-[0.14em] text-navy uppercase">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Social proof */

const testimonials = [
  {
    quote:
      "From the first visit to the final walkthrough, the crew treated our backyard like it was their own. The pool was in the ground and swimming-ready faster than we imagined.",
    name: "Michelle R.",
    location: "Winter Park, FL",
  },
  {
    quote:
      "We compared concrete and fiberglass for months. Fiber Elite Pools explained every detail without pressure, and the finished surface still looks brand new two seasons later.",
    name: "Daniel & Kara T.",
    location: "Lake Nona, FL",
  },
  {
    quote:
      "Clear pricing, a real schedule, and a project manager who actually answered the phone. Our kids are in the water every single afternoon now.",
    name: "Anthony M.",
    location: "Clermont, FL",
  },
];

export function SocialProof() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-aqua">Social Proof</p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-navy uppercase sm:text-4xl">
            Homeowners deserve a better pool experience.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="article" key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-md border border-border bg-sand p-7">
                <div className="flex gap-1 text-aqua" aria-label="Five star rating">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-relaxed text-navy/80 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 font-display text-[0.65rem] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                  — {t.name}, {t.location}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


/* -------------------------------------------------------------- Service area */

export function ServiceArea() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow text-aqua">Service Area</p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-navy uppercase sm:text-4xl">
            Serving homeowners who want more from their backyard.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">{SITE.serviceArea}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Not sure if your property is in our area? Send us your ZIP code with your quote request
            and we&apos;ll confirm availability for your project.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            In the metro?{" "}
            <a
              href="/fiberglass-pools-orlando"
              className="font-semibold text-navy underline underline-offset-4 hover:text-aqua"
            >
              See our Orlando fiberglass pools page
            </a>
            .
          </p>

          <Button
            variant="navy"
            size="xl"
            asChild
            className="mt-8"
            onClick={() => track("click_quote", { location: "service_area" })}
          >
            <a href="#quote">Check My Area</a>
          </Button>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-md border border-border bg-background p-8 shadow-card">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
              aria-hidden
            />
            <div className="relative">
              <div className="flex items-center gap-2">
                <MapPin className="size-5 text-aqua" aria-hidden />
                <span className="font-display text-sm font-extrabold tracking-[0.14em] text-navy uppercase">
                  Central Florida
                </span>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {SITE.locations.map((city) => (
                  <li
                    key={city}
                    className="rounded-md bg-sand px-4 py-3 font-display text-xs font-bold tracking-[0.12em] text-navy uppercase"
                  >
                    {city}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">
                Coverage may vary by project. Additional communities can be added as service areas
                are confirmed.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Financing */

export function Financing() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <Reveal>
          <p className="eyebrow text-aqua">Financing</p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-navy uppercase sm:text-4xl">
            Make your dream pool more achievable.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Flexible financing options may help you bring your backyard project to life while
            keeping your budget in mind.
          </p>
          <Button
            id="financing-cta"
            variant="navy"
            size="xl"
            asChild
            className="mt-8"
            onClick={() => track("financing_click", { location: "financing" })}
          >
            <a href="#quote">Ask About Financing</a>
          </Button>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Financing options are subject to lender approval and program availability. Terms and
            conditions may apply.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
