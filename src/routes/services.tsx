import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/krm-content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "الخدمات | KRM للتأجير | تأجير سيارات مرسيدس في الرياض" },
      {
        name: "description",
        content:
          "خدمات KRM للتأجير في الرياض: تأجير سيارات مرسيدس يوميًا وأسبوعيًا وشهريًا، مع خدمات الصيانة المذكورة ضمن خيارات التأجير.",
      },
      { property: "og:title", content: "الخدمات | KRM للتأجير | تأجير سيارات مرسيدس في الرياض" },
      {
        property: "og:description",
        content:
          "خدمات KRM للتأجير في الرياض: تأجير سيارات مرسيدس يوميًا وأسبوعيًا وشهريًا، مع خدمات الصيانة المذكورة ضمن خيارات التأجير.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return <Services />;
}
