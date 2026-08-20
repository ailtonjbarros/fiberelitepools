import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { SITE } from "@/lib/site";

const TITLE = "Terms & Conditions | Fiber Elite Pools";
const DESCRIPTION =
  "Terms and conditions for using the Fiber Elite Pools website and requesting a fiberglass pool quote.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/terms` }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" updated="Last updated: 2026">
      <h2>Website content</h2>
      <p>
        The content on this website is provided for general information about fiberglass pools and
        installation services. Photography is representative and may show features, finishes or
        landscaping that are not included in every project.
      </p>
      <h2>Quotes and pricing</h2>
      <p>
        Requesting a quote does not create a contract. Pricing, availability, timelines and project
        scope are confirmed in a written proposal after a consultation and site review.
      </p>
      <h2>Financing</h2>
      <p>
        Financing options are subject to lender approval and program availability. Terms and
        conditions may apply.
      </p>
      <h2>Contact</h2>
      <p>
        For questions about these terms, call {SITE.name} at {SITE.phone}.
      </p>
    </LegalPage>
  );
}
