import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";

export const faqs = [
  {
    q: "What is a fiberglass pool?",
    a: "A fiberglass pool is a pre-manufactured pool shell made from layered fiberglass with a smooth gel-coat finish. The shell is delivered to your property and installed in a prepared excavation, then finished with decking, equipment and landscaping.",
  },
  {
    q: "How long does fiberglass pool installation take?",
    a: "Installation timelines vary depending on the pool model, site conditions, permits, inspections and project scope. During your consultation, we'll provide a project timeline based on your property.",
  },
  {
    q: "Are fiberglass pools easy to maintain?",
    a: "The smooth, non-porous surface of a fiberglass pool is easy to clean and generally requires less scrubbing than rougher surfaces. Routine water balancing, filtration and cleaning are still part of normal pool ownership.",
  },
  {
    q: "How much does a fiberglass pool cost?",
    a: "Every project is different. Pricing depends on pool size, model, site preparation, installation requirements, decking, equipment and optional features. The best way to receive accurate pricing is to request a free quote.",
  },
  {
    q: "Do you handle permits?",
    a: "Permit requirements vary by location and project. Our team will explain the permitting process and responsibilities during your consultation.",
  },
  {
    q: "Can I customize my backyard?",
    a: "Yes. Beyond the pool itself, we can help plan decking, landscaping, lighting and outdoor living features so the finished space works for the way you use your backyard. Available options may vary by project.",
  },
  {
    q: "Can I add a spa, lighting or automation?",
    a: "Spas, LED lighting, heating, saltwater systems and automation are popular additions. We'll review the options that fit your pool selection, site and budget during your consultation.",
  },
  {
    q: "How do I get started?",
    a: `Simply request your free quote or call Fiber Elite Pools at ${SITE.phone}.`,
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <Reveal className="text-center">
          <p className="eyebrow text-aqua">FAQ</p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-navy uppercase sm:text-4xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display text-base font-bold text-navy hover:text-aqua">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
