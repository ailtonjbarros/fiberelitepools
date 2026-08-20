import type { ReactNode } from "react";
import { Header, MobileStickyCta } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 pt-32 pb-20 md:px-8 md:pt-40">
        <h1 className="font-display text-3xl font-extrabold text-navy uppercase sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-xs tracking-[0.16em] text-muted-foreground uppercase">{updated}</p>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-base [&_h2]:font-extrabold [&_h2]:tracking-[0.1em] [&_h2]:text-navy [&_h2]:uppercase">
          {children}
        </div>
      </main>
      <Footer />
      <MobileStickyCta />
    </div>
  );
}
