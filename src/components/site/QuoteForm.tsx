import { useState, type FormEvent } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Reveal } from "@/components/site/Reveal";
import { SITE, track } from "@/lib/site";

const selectClass =
  "flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none";

const propertyTypes = ["Single-Family Home", "New Construction", "Vacation Home", "Other"];
const timelines = ["ASAP", "1–3 Months", "3–6 Months", "6+ Months", "Just Exploring"];
const budgets = [
  "Under $50,000",
  "$50,000–$75,000",
  "$75,000–$100,000",
  "$100,000+",
  "Not Sure Yet",
];

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(false);
  const [consent, setConsent] = useState(false);

  const onStart = () => {
    if (started) return;
    setStarted(true);
    track("form_start", { form: "quote" });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    track("form_submit", { form: "quote" });
    track("lead", { form: "quote", value: 1 });
    setSubmitted(true);
    if (typeof window !== "undefined") window.scrollTo({ top: window.scrollY - 80 });
  };

  return (
    <section id="quote" className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <Reveal className="text-center">
          <p className="eyebrow text-aqua">Free Quote</p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-navy uppercase sm:text-4xl">
            Ready to build your backyard oasis?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Tell us a little about your project and we&apos;ll help you take the next step.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          {submitted ? (
            <div
              id="quote-confirmation"
              role="status"
              className="rounded-md bg-background p-10 text-center shadow-elegant md:p-16"
            >
              <CheckCircle2 className="mx-auto size-12 text-aqua" strokeWidth={1.4} aria-hidden />
              <h3 className="mt-6 font-display text-2xl font-extrabold tracking-[0.1em] text-navy uppercase">
                Thank you!
              </h3>
              <p className="mt-4 text-base text-muted-foreground">Your request has been received.</p>
              <p className="mt-2 text-base text-muted-foreground">
                A Fiber Elite Pools representative will contact you shortly.
              </p>
              <Button
                variant="quote"
                size="xl"
                asChild
                className="mt-8"
                onClick={() => track("click_phone", { location: "confirmation" })}
              >
                <a href={SITE.phoneHref}>
                  <Phone aria-hidden /> Call Us Now {SITE.phone}
                </a>
              </Button>
            </div>
          ) : (
            <form
              id="quote-form"
              onSubmit={onSubmit}
              onFocus={onStart}
              className="rounded-md bg-background p-6 shadow-elegant md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="First Name" htmlFor="firstName">
                  <Input id="firstName" name="firstName" required autoComplete="given-name" className="h-11" />
                </Field>
                <Field label="Last Name" htmlFor="lastName">
                  <Input id="lastName" name="lastName" required autoComplete="family-name" className="h-11" />
                </Field>
                <Field label="Phone" htmlFor="phone">
                  <Input id="phone" name="phone" type="tel" required autoComplete="tel" className="h-11" />
                </Field>
                <Field label="Email" htmlFor="email">
                  <Input id="email" name="email" type="email" required autoComplete="email" className="h-11" />
                </Field>
                <Field label="City" htmlFor="city">
                  <Input id="city" name="city" autoComplete="address-level2" className="h-11" />
                </Field>
                <Field label="ZIP Code" htmlFor="zip">
                  <Input id="zip" name="zip" inputMode="numeric" autoComplete="postal-code" className="h-11" />
                </Field>
                <Field label="Property Type" htmlFor="propertyType">
                  <select id="propertyType" name="propertyType" className={selectClass} defaultValue="">
                    <option value="" disabled>
                      Select an option
                    </option>
                    {propertyTypes.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Desired Pool Size" htmlFor="poolSize">
                  <Input
                    id="poolSize"
                    name="poolSize"
                    placeholder="Small, medium, large or approximate size"
                    className="h-11"
                  />
                </Field>
                <Field label="Project Timeline" htmlFor="timeline">
                  <select id="timeline" name="timeline" className={selectClass} defaultValue="">
                    <option value="" disabled>
                      Select an option
                    </option>
                    {timelines.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Estimated Budget" htmlFor="budget">
                  <select id="budget" name="budget" className={selectClass} defaultValue="">
                    <option value="" disabled>
                      Select an option
                    </option>
                    {budgets.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Message" htmlFor="message">
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your backyard and what you have in mind."
                    />
                  </Field>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={consent}
                  onCheckedChange={(v) => setConsent(v === true)}
                  required
                  className="mt-0.5"
                />
                <Label htmlFor="consent" className="text-sm leading-relaxed font-normal text-muted-foreground">
                  I agree to be contacted by Fiber Elite Pools regarding my pool project.
                </Label>
              </div>

              <Button
                id="quote-submit"
                type="submit"
                variant="quote"
                size="xl"
                className="mt-7 w-full"
                disabled={!consent}
              >
                Get My Free Quote
              </Button>

              <p className="mt-4 text-center text-sm text-muted-foreground">
                No obligation. A Fiber Elite Pools representative will contact you to discuss your
                project.
              </p>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                By submitting this form you agree to our{" "}
                <a href="/privacy-policy" className="underline underline-offset-4 hover:text-aqua">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms" className="underline underline-offset-4 hover:text-aqua">
                  Terms &amp; Conditions
                </a>
                .
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label
        htmlFor={htmlFor}
        className="font-display text-[0.65rem] font-bold tracking-[0.16em] text-navy uppercase"
      >
        {label}
      </Label>
      {children}
    </div>
  );
}
