import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero, About } from "@/components/krm-content";
import { ArrowLeft, CarFront, CalendarDays, Images, Phone } from "lucide-react";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KRM للتأجير | تأجير سيارات مرسيدس في الرياض" },
      {
        name: "description",
        content:
          "KRM للتأجير — نؤجّر سيارات مرسيدس حصرًا في الرياض. تأجير يومي وأسبوعي وشهري، سيارات نظيفة، أسعار واضحة، وتسليم سريع. تواصل عبر واتساب 0556436548.",
      },
      { property: "og:title", content: "KRM للتأجير | تأجير سيارات مرسيدس في الرياض" },
      {
        property: "og:description",
        content:
          "KRM للتأجير — نؤجّر سيارات مرسيدس حصرًا في الرياض. تأجير يومي وأسبوعي وشهري، سيارات نظيفة، أسعار واضحة، وتسليم سريع. تواصل عبر واتساب 0556436548.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CarRental",
          name: "KRM للتأجير",
          description: "تأجير سيارات مرسيدس حصرًا في الرياض — تأجير يومي وأسبوعي وشهري.",
          url: "https://krm-rentals-riyadh.lovable.app/",
          telephone: "+966556436548",
          address: {
            "@type": "PostalAddress",
            addressLocality: "الرياض",
            addressCountry: "SA",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <section
        aria-label="أقسام الموقع"
        className="mx-auto grid max-w-6xl gap-4 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4"
      >
        {(
          [
            { to: "/rental", label: "التأجير", Icon: CarFront },
            { to: "/services", label: "الخدمات", Icon: CalendarDays },
            { to: "/gallery", label: "المعرض", Icon: Images },
            { to: "/contact", label: "التواصل", Icon: Phone },
          ] as const
        ).map(({ to, label, Icon }) => (
          <Link
            key={to}
            to={to}
            className="group flex items-center gap-4 rounded-2xl bg-frost/70 p-6 ring-1 ring-line backdrop-blur transition-colors hover:bg-frost"
          >
            <Icon className="size-6 shrink-0 text-accent" aria-hidden="true" />
            <h2 className="text-xl font-bold">{label}</h2>
            <ArrowLeft className="mr-auto size-5 shrink-0 text-ink-soft" aria-hidden="true" />
          </Link>
        ))}
      </section>
      <About />
    </>
  );
}
