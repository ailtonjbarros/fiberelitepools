import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { SITE } from "@/lib/site";

const TITLE = "Privacy Policy | Fiber Elite Pools";
const DESCRIPTION =
  "How Fiber Elite Pools collects, uses and protects the information homeowners share when requesting a fiberglass pool quote.";

export const Route = createFileRoute("/privacy-policy")({
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
    links: [{ rel: "canonical", href: `${SITE.url}/privacy-policy` }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="Last updated: 2026">
      <h2>Information we collect</h2>
      <p>
        When you submit a quote request, we collect the details you provide, such as your name,
        phone number, email address, city, ZIP code and project preferences.
      </p>
      <h2>How we use your information</h2>
      <p>
        We use your information to respond to your request, discuss your pool project, prepare a
        quote and provide related follow-up communication. We do not sell your personal information.
      </p>
      <h2>Communications</h2>
      <p>
        By submitting the quote form, you agree to be contacted by {SITE.name} regarding your pool
        project by phone, text or email. You may ask us to stop contacting you at any time.
      </p>
      <h2>Analytics and advertising</h2>
      <p>
        This website may use analytics and advertising tools to understand how visitors use the site
        and to measure marketing performance. These tools may use cookies or similar technologies.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy? Call {SITE.name} at {SITE.phone}.
      </p>
    </LegalPage>
  );
}
