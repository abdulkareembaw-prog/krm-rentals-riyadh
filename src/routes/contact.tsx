import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/krm-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "التواصل | KRM للتأجير | تأجير سيارات مرسيدس في الرياض" },
      {
        name: "description",
        content:
          "تواصل مع KRM للتأجير في الرياض للاستفسار عن تأجير سيارات مرسيدس عبر واتساب أو الاتصال على 0556436548.",
      },
      { property: "og:title", content: "التواصل | KRM للتأجير | تأجير سيارات مرسيدس في الرياض" },
      {
        property: "og:description",
        content:
          "تواصل مع KRM للتأجير في الرياض للاستفسار عن تأجير سيارات مرسيدس عبر واتساب أو الاتصال على 0556436548.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <Contact />;
}
