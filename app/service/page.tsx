import { SecondaryButton, ServiceCard } from "@/components";
import { VaultIcon } from "@/components/VaultIcon";
import { legacyTreatmentCatalog } from "@/data/legacyTreatmentCatalog";
import { CtaBanner, HeroSection } from "@/sections";

const normalServiceHighlights = [
  {
    title: "Skin and Texture Repair",
    description: "Evidence-based protocols for acne, pigmentation, hydration, and long-term skin quality.",
    href: "/service/our-treatment/acne",
  },
  {
    title: "Oculofacial Expert Care",
    description: "Specialized non-surgical and surgical planning for eyelid, orbit, and under-eye concerns.",
    href: "/service/our-treatment/hollowness-under-eyes",
  },
  {
    title: "Rejuvenation and Contouring",
    description: "Personalized treatment sequencing for facial balance, anti-ageing, and confidence restoration.",
    href: "/service/our-treatment/face-reshaping-contouring",
  },
];

const allNormalServices = legacyTreatmentCatalog.map((treatment) => ({
  title: treatment.name,
  description: treatment.description,
  href: `/service/our-treatment/${treatment.slug}`,
}));

const plexerProHighlights = [
  {
    title: "Non-Surgical Blepharoplasty",
    description: "Advanced plasma arc tightening for upper and lower eyelid rejuvenation without surgery.",
    href: "/service#plexer-pro-grid",
  },
  {
    title: "Plasma Skin Resurfacing",
    description: "Targeted treatment for wrinkles, texture irregularities, and visible signs of skin aging.",
    href: "/service#plexer-pro-grid",
  },
  {
    title: "Lesion and Spot Corrections",
    description: "Precision soft-surgery solutions for selected benign lesions and stubborn aesthetic concerns.",
    href: "/service#plexer-pro-grid",
  },
];

const allPlexerProServices = [
  {
    title: "Non-Surgical Blepharoplasty",
    description: "Rejuvenate eyelids with precision plasma arcs and minimal downtime.",
    href: "/service#plexer-pro-grid",
  },
  {
    title: "Plasma Facial Rejuvenation",
    description: "Comprehensive skin tightening and surface refresh for face and periocular regions.",
    href: "/service#plexer-pro-grid",
  },
  {
    title: "Scar Revision",
    description: "Target texture and visible scar irregularities with controlled plasma micro-injury.",
    href: "/service#plexer-pro-grid",
  },
  {
    title: "Warts, Moles, Stye and Chalazion",
    description: "Soft-surgery style correction for selected benign spots and lesion-like concerns.",
    href: "/service#plexer-pro-grid",
  },
  {
    title: "Wrinkles and Fine Lines",
    description: "Focused plasma tightening where collagen support has reduced with age.",
    href: "/service#plexer-pro-grid",
  },
  {
    title: "Xanthelasma Support",
    description: "Targeted non-surgical aesthetic correction planning for periocular cholesterol plaques.",
    href: "/service#plexer-pro-grid",
  },
];

interface ServiceItem {
  title: string;
  description: string;
  href: string;
}

interface ServiceSectionProps {
  sectionId: string;
  listId: string;
  label: string;
  title: string;
  description: string;
  viewAllHref: string;
  highlights: ServiceItem[];
  allServices: ServiceItem[];
}

function ServiceGrid({ label, items }: { label: string; items: ServiceItem[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((card) => (
        <ServiceCard
          key={`${label}-${card.title}`}
          label={label}
          title={card.title}
          description={card.description}
          href={card.href}
        />
      ))}
    </div>
  );
}

function ServiceSection({
  sectionId,
  listId,
  label,
  title,
  description,
  viewAllHref,
  highlights,
  allServices,
}: ServiceSectionProps) {
  return (
    <section id={sectionId} className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-10 first:pt-20">
      <div className="mb-8 flex flex-col justify-between gap-6 md:mb-10 md:flex-row md:items-start">
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <VaultIcon />
            <p className="section-label text-xs uppercase text-secondary">{label}</p>
          </div>
          <h2 className="font-serif text-3xl text-primary md:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-text-secondary/95">{description}</p>
        </div>
        <SecondaryButton href={viewAllHref} className="w-fit">
          View All
        </SecondaryButton>
      </div>

      <ServiceGrid label={label} items={highlights} />

      <div id={listId} className="scroll-mt-28 pt-10 md:pt-12">
        <h3 className="font-serif text-2xl text-primary md:text-3xl">All {label}</h3>
        <p className="mt-3 mb-6 leading-7 text-text-secondary">
          Browse every available option in this category.
        </p>
        <ServiceGrid label={label} items={allServices} />
      </div>
    </section>
  );
}

export default function LegacyServicePage() {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Explore complete treatment pathways and advanced Plexr PRO solutions at Faces."
        primaryCta={{ href: "/contact", label: "Book Consultation" }}
      />

      <ServiceSection
        sectionId="normal-services"
        listId="normal-services-grid"
        label="Normal Services"
        title="Explore Our Treatment Services"
        description="Core concern-based treatments built for skin health, facial harmony, and long-term confidence."
        viewAllHref="/service#normal-services-grid"
        highlights={normalServiceHighlights}
        allServices={allNormalServices}
      />

      <ServiceSection
        sectionId="plexer-pro-services"
        listId="plexer-pro-grid"
        label="Plexer Pro"
        title="Explore Plexer Pro Services"
        description="Plasma technology-led treatments for precise, non-surgical rejuvenation and correction."
        viewAllHref="/service#plexer-pro-grid"
        highlights={plexerProHighlights}
        allServices={allPlexerProServices}
      />

      <CtaBanner
        title="Need help choosing the right service?"
        description="Speak with our team for a personalized recommendation and treatment roadmap."
        ctaHref="/contact"
        ctaLabel="Talk to Our Team"
      />
    </>
  );
}
