import { createFileRoute } from "@tanstack/react-router";
import { Hero, Services, WHATSAPP_URL, WhatsAppIcon } from "@/components/krm-content";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/rental")({
  head: () => ({
    meta: [
      { title: "التأجير | KRM للتأجير | تأجير سيارات مرسيدس في الرياض" },
      {
        name: "description",
        content:
          "عرض مرسيدس S500 موديل 1996 باللون الكحلي، وتفاصيل التأجير اليومي والأسبوعي والشهري في الرياض. للاستفسار: 0556436548.",
      },
      { property: "og:title", content: "التأجير | KRM للتأجير | تأجير سيارات مرسيدس في الرياض" },
      {
        property: "og:description",
        content:
          "عرض مرسيدس S500 موديل 1996 باللون الكحلي، وتفاصيل التأجير اليومي والأسبوعي والشهري في الرياض. للاستفسار: 0556436548.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RentalPage,
});

function RentalPage() {
  return (
    <>
      <Hero />
      <Services />
      <div className="mx-auto max-w-6xl px-6 pb-16">
        <Button asChild className="rounded-full bg-ink px-6 py-3 text-frost">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-4" />
            الاستفسار عن التأجير
          </a>
        </Button>
      </div>
    </>
  );
}
