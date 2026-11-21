import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/krm-content";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "المعرض | KRM للتأجير | تأجير سيارات مرسيدس في الرياض" },
      {
        name: "description",
        content:
          "صور مرسيدس S500 موديل 1996 باللون الكحلي لدى KRM للتأجير: الواجهة الأمامية والمقصورة الداخلية والواجهة الخلفية.",
      },
      { property: "og:title", content: "المعرض | KRM للتأجير | تأجير سيارات مرسيدس في الرياض" },
      {
        property: "og:description",
        content:
          "صور مرسيدس S500 موديل 1996 باللون الكحلي لدى KRM للتأجير: الواجهة الأمامية والمقصورة الداخلية والواجهة الخلفية.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return <Gallery />;
}
