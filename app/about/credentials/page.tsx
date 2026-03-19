import Link from "next/link";

import { Container } from "@/components";
import { EducationCylinder } from "@/components/EducationCylinder";
import { HeroSection } from "@/sections";

type CredentialItem = {
  stage: string;
  institution: string;
  distinction: string;
  imageUrl: string;
};

type LeadershipCategory = {
  title: string;
  items: Array<{ role: string; organization: string }>;
};

const education: CredentialItem[] = [
  {
    stage: "MBBS",
    institution: "JJ Group of Hospitals",
    distinction: "Medical Degree",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/education//Grant-Medical-College-1-1.png",
  },
  {
    stage: "Post-graduation",
    institution: "KEM Hospital",
    distinction: "Distinction",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/education//Logo_gsmc_my_creation-4.png",
  },
  {
    stage: "DNB",
    institution: "Diplomate of National Board",
    distinction: "All India Gold Medal",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/education//dnb-diplomate-of-national-board-logo-png_seeklogo-398758.png",
  },
  {
    stage: "Fellowship",
    institution: "Sankara Nethralaya",
    distinction: "Best Outgoing Fellow",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/education//Sankara_Nethralaya-4-1-1.webp",
  },
  {
    stage: "International Fellowship",
    institution: "University of Wisconsin, Madison",
    distinction: "Best International Fellow",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/education//uw-logo-centered-web-1-1.webp",
  },
  {
    stage: "Advanced Training",
    institution: "Dr. Cynthia Boxrud, Los Angeles",
    distinction: "Celebrity Oculoplastic Surgery",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/education//Black-Elegant-Modern-Name-Initials-Monogram-Logo.png",
  },
  {
    stage: "Skin Health Training",
    institution: "Dr. Zein Obagi, Beverly Hills",
    distinction: "Advanced ZO Skincare Certification",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/education//OPAI_logo-2-1-1.webp",
  },
];

const experience: LeadershipCategory[] = [
  {
    title: "Leadership",
    items: [
      { role: "Co-founder and CEO", organization: "Faces" },
      { role: "Head of Oculofacial Aesthetics", organization: "CFS Hyderabad" },
      { role: "Head of Aesthetic Clinic", organization: "Sankara Nethralaya" },
    ],
  },
  {
    title: "Clinical Excellence",
    items: [
      { role: "Consultant", organization: "Apollo Hospitals, Hyderabad" },
      { role: "In-Charge", organization: "Sankara Nethralaya" },
      { role: "Oculoplasty Fellowship", organization: "Training Program" },
    ],
  },
  {
    title: "Industry Recognition",
    items: [
      { role: "Key Opinion Leader for India", organization: "Plexr Plasma Pro" },
      { role: "Faculty and Consultant", organization: "Asia Pacific Allergen Academy" },
      { role: "Honorary Co-Faculty", organization: "University of Wisconsin, Madison" },
    ],
  },
  {
    title: "Editorial and Academic",
    items: [
      { role: "Editor", organization: "Insight" },
      { role: "Section Editor, Facial Aesthetics", organization: "IJO" },
      { role: "Co-Editor, Oculoplasty", organization: "Eye Wiki" },
      { role: "Associate Preceptor", organization: "E-Learning" },
      { role: "Member, Complication Board", organization: "For Fillers" },
    ],
  },
];

const impactStats = [
  { value: "15+", label: "Years of Experience" },
  { value: "10,000+", label: "Patients Treated" },
  { value: "5,000+", label: "Procedures Performed" },
  { value: "50+", label: "Research Publications" },
];

export default function CredentialsPage() {
  return (
    <>
      <HeroSection
        title="Dr. Shubhra Goel Credentials"
        subtitle="Academic depth, global training, and sustained clinical leadership across oculofacial aesthetics and advanced skin care."
        primaryCta={{ href: "/contact", label: "Book a Consultation" }}
      />

      <section className="py-20 md:py-24">
        <Container>
          <div className="elevated-panel rounded-2xl border border-border p-8 md:p-12">
            <p className="section-label text-xs uppercase text-secondary">Recognition</p>
            <h2 className="mt-4 font-serif text-4xl text-primary md:text-5xl">
              Amongst Top 10 Women Surgeons in India
            </h2>
            <p className="mt-5 max-w-4xl leading-8 text-text-secondary">
              Featured by Women Entrepreneur Magazine for pioneering patient-first oculofacial
              treatment pathways and balancing non-invasive and surgical options for realistic
              outcomes.
            </p>
            <Link
              href="https://www.womenentrepreneursreview.com/leader/dr-shubhra-goel-giving-a-makeover-to-oculofacial-plastic-surgery-vid-362.html"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-primary-hover"
            >
              Read Full Feature
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <p className="section-label text-xs uppercase text-secondary">Educational Excellence</p>
          <h2 className="mt-3 font-serif text-4xl text-primary md:text-5xl">
            A journey of continuous learning
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-text-secondary">
            Each academic milestone is displayed with its institute visual in a continuous rotating 3D
            hollow-cylinder showcase.
          </p>
          <div className="mt-10">
            <EducationCylinder items={education} />
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <p className="section-label text-xs uppercase text-secondary">Professional Journey</p>
          <h2 className="mt-3 font-serif text-4xl text-primary md:text-5xl">
            Leadership and clinical impact
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {experience.map((category) => (
              <article
                key={category.title}
                className="elevated-panel rounded-2xl border border-border p-6 md:p-8"
              >
                <h3 className="text-xl font-semibold text-text-primary">{category.title}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-text-secondary">
                  {category.items.map((item) => (
                    <li key={`${item.role}-${item.organization}`} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <strong className="text-text-primary">{item.role}</strong> -{" "}
                        {item.organization}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-24">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="elevated-panel rounded-2xl border border-border p-6">
                <p className="font-serif text-4xl text-primary">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-widest text-secondary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
