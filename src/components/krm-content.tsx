import { Link } from "@tanstack/react-router";
import heroCar from "@/assets/hero-car.jpg";
import logo from "@/assets/logo.png";
import galleryFront from "@/assets/gallery-front.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryRear from "@/assets/gallery-rear.jpg";

export const WHATSAPP_URL = "https://wa.me/966556436548";
const PHONE_DISPLAY = "0556436548";
const PHONE_INTL = "+966 55 643 6548";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-1/4 size-[420px] rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute top-40 -left-20 size-[360px] rounded-full bg-accent-soft blur-3xl"></div>
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-6">
          <span className="rise inline-flex items-center gap-2 rounded-full bg-frost/70 px-3 py-1 text-xs font-medium text-ink-soft ring-1 ring-line backdrop-blur">
            <span className="size-1.5 rounded-full bg-accent"></span>
            متخصصون في تأجير سيارات مرسيدس فقط
          </span>
          <h1 className="rise mt-6 text-4xl font-bold leading-[1.15] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            مرسيدس جاهزة،
            <br />
            وأنت في طريقك.
          </h1>
          <p className="rise mt-6 max-w-[42ch] text-lg leading-relaxed text-ink-soft text-pretty">
            KRM للتأجير نؤجّر سيارات مرسيدس حصرًا — نظيفة ومجهّزة بالكامل، بتسليم سريع وسعر واضح، في
            قلب الرياض.
          </p>
          <div className="rise mt-8 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-frost ring-1 ring-ink/5 transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="size-4" />
              تواصل عبر واتساب
            </a>
            <Link
              to="/gallery"
              className="rounded-full bg-frost/70 px-6 py-3 text-sm font-semibold text-ink ring-1 ring-line backdrop-blur transition-colors hover:bg-frost"
            >
              شاهد السيارة
            </Link>
          </div>
          <div className="rise mt-10 flex gap-8 border-t border-line pt-6">
            <div>
              <p className="font-latin text-2xl font-bold tracking-tight">100%</p>
              <p className="text-xs text-ink-soft">مرسيدس حصرًا</p>
            </div>
            <div>
              <p className="font-latin text-2xl font-bold tracking-tight">S500</p>
              <p className="text-xs text-ink-soft">موديل 1996</p>
            </div>
            <div>
              <p className="font-latin text-2xl font-bold tracking-tight">24/7</p>
              <p className="text-xs text-ink-soft">دعم متواصل</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="rise relative">
            <div className="absolute -inset-4 rounded-[28px] bg-accent/5"></div>
            <img
              src={heroCar}
              alt="مرسيدس S500 موديل 1996 بلون كحلي في استوديو بإطلالة هادئة"
              width={1024}
              height={768}
              className="relative aspect-[4/3] w-full rounded-[24px] object-cover outline-1 -outline-offset-1 outline-ink/5"
            />
            <div className="absolute -bottom-6 right-6 rounded-2xl bg-frost/80 px-5 py-4 ring-1 ring-line backdrop-blur-xl">
              <p className="text-xs text-ink-soft">تسليم خلال</p>
              <p className="font-latin text-xl font-bold tracking-tight">30 دقيقة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-latin text-xs font-medium uppercase tracking-[0.2em] text-accent">
            نبذة
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance">
            مرسيدس فقط، بلا استثناء
          </h2>
        </div>
        <div className="lg:col-span-8">
          <p className="max-w-[52ch] text-lg leading-relaxed text-ink-soft text-pretty">
            نؤجّر سيارات مرسيدس حصرًا — ولا نؤجّر أي نوع آخر. اخترنا مرسيدس لأنها تجمع الفخامة
            والاعتمادية، ونحرص على أن تصل كل سيارة نظيفة ومجهّزة بالكامل، لتجربة هادئة من لحظة الحجز
            حتى العودة.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-frost/70 p-5 ring-1 ring-line backdrop-blur">
              <p className="text-sm font-semibold">مرسيدس حصرًا</p>
              <p className="mt-1 text-sm text-ink-soft">
                أسطولنا بالكامل من سيارات مرسيدس — لا شيء غيرها.
              </p>
            </div>
            <div className="rounded-2xl bg-frost/70 p-5 ring-1 ring-line backdrop-blur">
              <p className="text-sm font-semibold">تسليم مرن</p>
              <p className="mt-1 text-sm text-ink-soft">نسلّم السيارة في المكان الذي يناسبك.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-12">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="font-latin text-xs font-medium uppercase tracking-[0.2em] text-accent">
            الخدمات
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance">
            ثلاث طرق لتستأجر مرسيدسك
          </h2>
        </div>
        <p className="hidden text-sm text-ink-soft sm:block">اختر ما يناسبك، ونجهّزه لك.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="group rounded-3xl bg-frost/70 p-6 ring-1 ring-line backdrop-blur transition-colors hover:bg-frost">
          <div className="grid size-12 place-items-center rounded-xl bg-accent-soft text-accent">
            <span className="font-latin text-lg font-bold">01</span>
          </div>
          <h3 className="mt-5 text-xl font-bold tracking-tight">تأجير يومي</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft text-pretty">
            مرسيدس نظيفة جاهزة ليومك، مع تسليم واستلام مرن في أي وقت.
          </p>
          <p className="mt-5 font-latin text-2xl font-bold tracking-tight">
            من 150 ر.س
            <span className="text-sm font-medium text-ink-soft"> /يوم</span>
          </p>
        </div>
        <div className="group rounded-3xl bg-frost/70 p-6 ring-1 ring-line backdrop-blur transition-colors hover:bg-frost">
          <div className="grid size-12 place-items-center rounded-xl bg-accent-soft text-accent">
            <span className="font-latin text-lg font-bold">02</span>
          </div>
          <h3 className="mt-5 text-xl font-bold tracking-tight">تأجير أسبوعي</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft text-pretty">
            خيارات أوسع وسعر أفضل للرحلات الأطول، مع صيانة شاملة.
          </p>
          <p className="mt-5 font-latin text-2xl font-bold tracking-tight">
            من 850 ر.س
            <span className="text-sm font-medium text-ink-soft"> /أسبوع</span>
          </p>
        </div>
        <div className="group rounded-3xl bg-frost/70 p-6 ring-1 ring-line backdrop-blur transition-colors hover:bg-frost">
          <div className="grid size-12 place-items-center rounded-xl bg-accent-soft text-accent">
            <span className="font-latin text-lg font-bold">03</span>
          </div>
          <h3 className="mt-5 text-xl font-bold tracking-tight">تأجير شهري</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft text-pretty">
            حلول شهرية للشركات والأفراد، مع صيانة دورية شاملة.
          </p>
          <p className="mt-5 font-latin text-2xl font-bold tracking-tight">
            من 2,400 ر.س
            <span className="text-sm font-medium text-ink-soft"> /شهر</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-12">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="font-latin text-xs font-medium uppercase tracking-[0.2em] text-accent">
            المعرض
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance">
            مرسيدس S500 · موديل 1996 · كحلي
          </h2>
        </div>
        <p className="hidden text-sm text-ink-soft sm:block">السيارة المتوفرة لدينا حاليًا.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <figure className="group overflow-hidden rounded-3xl bg-frost/70 ring-1 ring-line">
          <img
            src={galleryFront}
            alt="الواجهة الأمامية لمرسيدس S500 كحلية موديل 1996"
            width={1280}
            height={720}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <figcaption className="px-5 py-4 text-sm text-ink-soft">
            الواجهة الأمامية — الشبك الكروم وشعار النجمة
          </figcaption>
        </figure>
        <figure className="group overflow-hidden rounded-3xl bg-frost/70 ring-1 ring-line">
          <img
            src={galleryInterior}
            alt="المقصورة الداخلية لمرسيدس S500 بمقاعد جلدية فاتحة"
            width={1280}
            height={720}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <figcaption className="px-5 py-4 text-sm text-ink-soft">
            المقصورة — جلد فاتح وخشب طبيعي
          </figcaption>
        </figure>
        <figure className="group overflow-hidden rounded-3xl bg-frost/70 ring-1 ring-line">
          <img
            src={galleryRear}
            alt="الواجهة الخلفية لمرسيدس S500 كحلية موديل 1996"
            width={1280}
            height={720}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <figcaption className="px-5 py-4 text-sm text-ink-soft">
            الواجهة الخلفية — تصميم كلاسيكي أنيق
          </figcaption>
        </figure>
        <figure className="group overflow-hidden rounded-3xl bg-frost/70 ring-1 ring-line">
          <img
            src={heroCar}
            alt="مرسيدس S500 موديل 1996 بلون كحلي في استوديو بإطلالة هادئة"
            width={1024}
            height={768}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </figure>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <div className="relative overflow-hidden rounded-[28px] bg-ink px-8 py-14 text-frost ring-1 ring-ink/5">
        <div className="pointer-events-none absolute -top-20 -left-10 size-72 rounded-full bg-accent/20 blur-3xl"></div>
        <div className="relative grid gap-10 lg:grid-cols-2">
          <div>
            <p className="font-latin text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
              تواصل
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance">جاهز للتحرك؟</h2>
            <p className="mt-4 max-w-[40ch] text-pretty text-frost/70">
              أرسل رسالة على واتساب وسنرد عليك خلال دقائق لتأكيد حجز مرسيدسك.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-wa px-6 py-3 text-sm font-semibold text-frost ring-1 ring-ink/5 transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="size-4" />
              واتساب {PHONE_DISPLAY}
            </a>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl bg-frost/5 p-5 ring-1 ring-frost/10">
              <p className="text-xs text-frost/60">الهاتف / واتساب</p>
              <p className="mt-1 font-latin text-lg font-bold tracking-tight" dir="ltr">
                <a href="tel:+966556436548">{PHONE_INTL}</a>
              </p>
            </div>
            <div className="rounded-2xl bg-frost/5 p-5 ring-1 ring-frost/10">
              <p className="text-xs text-frost/60">الموقع</p>
              <p className="mt-1 text-lg font-bold">الرياض، المملكة العربية السعودية</p>
            </div>
            <div className="rounded-2xl bg-frost/5 p-5 ring-1 ring-frost/10">
              <p className="text-xs text-frost/60">ساعات العمل</p>
              <p className="mt-1 text-lg font-bold">يوميًا، 24 ساعة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
