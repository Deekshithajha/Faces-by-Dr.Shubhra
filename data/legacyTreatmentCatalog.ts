export type TreatmentCatalogSection = "explore" | "unique";

export interface LegacyTreatmentCatalogItem {
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  duration: string;
  recovery: string;
  catalogSection: TreatmentCatalogSection;
}

export const legacyTreatmentCatalog: LegacyTreatmentCatalogItem[] = [
  {
    slug: "absent-scanty-brows-lashes",
    name: "Absent / Scanty Brows and Lashes",
    description:
      "Assessment-led restoration for sparse brows and lashes, with options chosen for your anatomy, goals, and long-term natural appearance.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0005.jpg",
    duration: "1–2 hours",
    recovery: "1–2 weeks",
    catalogSection: "explore",
  },
  {
    slug: "acne",
    name: "Acne",
    description:
      "Structured care for active acne and related skin changes, combining medical management with in-clinic sessions aligned to your skin type.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/beforeandafter//acne%20before.png",
    duration: "30–60 minutes",
    recovery: "3–7 days",
    catalogSection: "explore",
  },
  {
    slug: "anti-ageing-skin-care",
    name: "Anti-Ageing Skin Care",
    description:
      "Long-term programmes focused on firmness, texture, and clarity, with staged in-clinic care and home routines kept realistic for your lifestyle.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//antiaging.jpg",
    duration: "45 minutes",
    recovery: "None",
    catalogSection: "explore",
  },
  {
    slug: "anti-cellulite-treatment",
    name: "Anti-Cellulite Treatment",
    description:
      "Focused protocols to improve the look and feel of cellulite-prone areas, with expectations and maintenance discussed clearly up front.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//Cellulite.jpg",
    duration: "60–90 minutes",
    recovery: "24–48 hours",
    catalogSection: "explore",
  },
  {
    slug: "cheek-hollowness-smile-folds",
    name: "Cheek Hollowness and Smile Folds",
    description:
      "Mid-face support and smile-line softening planned with anatomy-first judgment, prioritising balance and natural movement.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//cheek%20hollowness.png",
    duration: "30–45 minutes",
    recovery: "2–3 days",
    catalogSection: "explore",
  },
  {
    slug: "chemical-peels",
    name: "Chemical Peels",
    description:
      "Medical-grade peels selected for your concern and tolerance, used as part of a staged plan for clarity, texture, and even tone.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0012.jpg",
    duration: "30–60 minutes",
    recovery: "3–14 days",
    catalogSection: "explore",
  },
  {
    slug: "daily-skin-care-program",
    name: "Daily Skin Care Program",
    description:
      "Doctor-guided routines that pair active ingredients with barrier care, designed to support results from your in-clinic plan.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//daily%20skin%20care.png",
    duration: "Consultation: 30 min",
    recovery: "None",
    catalogSection: "explore",
  },
  {
    slug: "dark-circles",
    name: "Dark Circles",
    description:
      "Cause-based pathways for under-eye darkness—pigment, shadow, volume, and skin quality—planned without a one-size template.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//dark%20circle.png",
    duration: "30–60 minutes",
    recovery: "3–7 days",
    catalogSection: "explore",
  },
  {
    slug: "droopy-brows",
    name: "Droopy brows",
    description:
      "Options for brow heaviness and upper-face tiredness, chosen after assessment of position, muscle activity, and skin quality.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//Droopy%20brows.png",
    duration: "1–2 hours",
    recovery: "1–2 weeks",
    catalogSection: "explore",
  },
  {
    slug: "ear-lobe-repair",
    name: "Ear Lobe Repair",
    description:
      "Precise reconstruction for stretched or split earlobes, with symmetry, contour, and safe re-piercing guidance when appropriate.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//ear%20repair.png",
    duration: "30–60 minutes",
    recovery: "1–2 weeks",
    catalogSection: "explore",
  },
  {
    slug: "excessive-sweating",
    name: "Excessive Sweating",
    description:
      "Clinical hyperhidrosis care with options matched to severity and site, emphasising reliable symptom control and discretion.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0007.jpg",
    duration: "30–45 minutes",
    recovery: "24–48 hours",
    catalogSection: "explore",
  },
  {
    slug: "eye-socket-orbit-treatments",
    name: "Eye Socket / Orbit Treatments",
    description:
      "Specialist evaluation and planning for socket- and orbit-related concerns, with functional safety and appearance considered together.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//Eye%20Socket%20%20Orbit%20Treatments.png",
    duration: "2–4 hours",
    recovery: "2–6 weeks",
    catalogSection: "explore",
  },
  {
    slug: "face-reshaping-contouring",
    name: "Face reshaping and contouring",
    description:
      "Contour refinement grounded in bone and soft-tissue structure, aimed at harmony and proportion rather than trend-led change.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0010.jpg",
    duration: "1–3 hours",
    recovery: "1–3 weeks",
    catalogSection: "explore",
  },
  {
    slug: "hollowness-under-eyes",
    name: "Hollowness under Eyes",
    description:
      "Tear-trough and under-eye volume support after careful tissue assessment, focused on natural light reflection and expression.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//Hollowness%20under%20Eyes.png",
    duration: "30–60 minutes",
    recovery: "3–7 days",
    catalogSection: "explore",
  },
  {
    slug: "infections-injuries-fractures",
    name: "Infections, injuries, fractures",
    description:
      "Structured care for periocular trauma and infection-related concerns, prioritising function first and then refinement where needed.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0008.jpg",
    duration: "1–4 hours",
    recovery: "2–8 weeks",
    catalogSection: "explore",
  },
  {
    slug: "in-turning-out-turning-lids",
    name: "In-turning and Out-turning of Lids",
    description:
      "Functional eyelid repositioning to improve comfort, surface protection, and a natural lid margin appearance.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//In-turning%20and%20Out-turning%20of%20Lids.png",
    duration: "1–2 hours",
    recovery: "2–3 weeks",
    catalogSection: "explore",
  },
  {
    slug: "paralysis-face-eyelid",
    name: "Paralysis of Face and Eyelid",
    description:
      "Supportive and reconstructive options for facial and eyelid movement impairment, with eye protection and symmetry as core goals.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0009.jpg",
    duration: "2–6 hours",
    recovery: "4–12 weeks",
    catalogSection: "explore",
  },
  {
    slug: "pigmentation-texture-repair",
    name: "Pigmentation And Texture Repair",
    description:
      "Corrective pathways for uneven tone and texture, staged for safety with clear expectations on pace and maintenance.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//pigmentation.png",
    duration: "30–90 minutes",
    recovery: "3–14 days",
    catalogSection: "explore",
  },
  {
    slug: "puffy-baggy-eyes",
    name: "Puffy / Baggy Eyes",
    description:
      "Eye-area heaviness addressed with a plan matched to skin laxity, fat prominence, and your daily comfort.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/beforeandafter//eye%20bag%20before%20.png",
    duration: "1–2 hours",
    recovery: "1–2 weeks",
    catalogSection: "explore",
  },
  {
    slug: "skin-brightening",
    name: "Skin Brightening",
    description:
      "Radiance-focused care that respects your skin type, with measured steps to improve clarity without harsh shortcuts.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0011.jpg",
    duration: "45–60 minutes",
    recovery: "3–7 days",
    catalogSection: "explore",
  },
  {
    slug: "skin-hydration",
    name: "Skin Hydration",
    description:
      "Barrier-first hydration strategies for dry, dull, or uncomfortable skin, pairing in-clinic replenishment with sensible home care.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//skin%20hydration.jpg",
    duration: "60 minutes",
    recovery: "None",
    catalogSection: "explore",
  },
  {
    slug: "sleepy-droopy-eyelid",
    name: "Sleepy or Droopy Eyelid (Ptosis Surgery)",
    description:
      "Ptosis-focused assessment and correction to improve lid height, visual comfort, and a natural awake expression.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/beforeandafter//ptosis%20before.png",
    duration: "1–2 hours",
    recovery: "2–3 weeks",
    catalogSection: "explore",
  },
  {
    slug: "spasms-twitching",
    name: "Spasms and Twitching",
    description:
      "Diagnosis-led relief for eyelid and facial spasms, with follow-up tuned to symptom control and quality of life.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0004.jpg",
    duration: "20–30 minutes",
    recovery: "24–48 hours",
    catalogSection: "explore",
  },
  {
    slug: "tear-passage-treatments",
    name: "Tear Passage Treatments",
    description:
      "Care for blocked or troublesome tear drainage that contributes to watering, irritation, or recurrent surface issues.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//Tear%20passage%20treatment.png",
    duration: "1–2 hours",
    recovery: "2–4 weeks",
    catalogSection: "explore",
  },
  {
    slug: "thyroid-eye-disease",
    name: "Thyroid Eye Disease",
    description:
      "Stabilisation-minded planning for thyroid-related eye changes, with interventions timed to activity, comfort, and protection.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/beforeandafter//thyroid%20eye%20disease%20before.png",
    duration: "2–4 hours",
    recovery: "4–8 weeks",
    catalogSection: "explore",
  },
  {
    slug: "watering-itching-lumps-bumps",
    name: "Watering, Itching, Lumps, Bumps",
    description:
      "Focused assessment of eyelid and periocular irritation and lesions, with treatment aligned to the confirmed diagnosis.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//Watering,%20Itching,%20Lumps,%20Bumps.png",
    duration: "15–60 minutes",
    recovery: "3–14 days",
    catalogSection: "explore",
  },
  {
    slug: "wrinkles-fine-lines-folds",
    name: "Wrinkles, Fine Lines, Folds",
    description:
      "Line-softening plans that preserve expression, combining surface quality work with judicious support where appropriate.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0006.jpg",
    duration: "30–90 minutes",
    recovery: "3–14 days",
    catalogSection: "explore",
  },
  {
    slug: "bye-bye-dark-circles",
    name: "Bye Bye Dark Circles©️",
    description:
      "A proprietary, multi-step FACES protocol for under-eye darkness, personalised to pigment, structure, and lifestyle factors.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/our-star-treatments//Bye-Bye-1-ppnt7m40795wyhpnhtvfgmq6wt700fe2hw9kyys6ys.png",
    duration: "45–90 minutes",
    recovery: "3–10 days",
    catalogSection: "unique",
  },
  {
    slug: "correction-of-treatments-gone-wrong",
    name: "Correction Of Treatments Gone Wrong",
    description:
      "Specialist corrective planning after unsatisfactory prior work, with candid feasibility, staged recovery, and realistic goals.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/our-star-treatments//Correction-Of-Treatments-1-ppnt9b7ijhhjx58wl2a6gpb5iutuwr4meao55y9lqc.png",
    duration: "Varies",
    recovery: "Discussed in consultation",
    catalogSection: "unique",
  },
  {
    slug: "no-more-baggy-eyes",
    name: "No More Baggy Eyes©️",
    description:
      "A signature FACES pathway for baggy or puffy eyelids, emphasising natural crease architecture and rested expression.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/our-star-treatments//Baggy-puffy-pppgtkl95oth1il7lxjohltu6e1i7rozvefp5uy7gk.png",
    duration: "60–120 minutes",
    recovery: "7–14 days",
    catalogSection: "unique",
  },
  {
    slug: "non-surgical-blepharoplasty-plexr",
    name: "Non-Surgical Blepharoplasty (Plexr)",
    description:
      "Plasma-led upper and lower lid tightening for selected patients seeking rejuvenation with a non-incision-first approach.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0012.jpg",
    duration: "45–90 minutes",
    recovery: "5–10 days",
    catalogSection: "unique",
  },
  {
    slug: "plasma-facial-plexr",
    name: "Plasma Facial (Plexr)",
    description:
      "Controlled plasma resurfacing and tightening for skin quality and periocular refresh, with intensity matched to your downtime window.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0011.jpg",
    duration: "45–75 minutes",
    recovery: "5–10 days",
    catalogSection: "unique",
  },
  {
    slug: "scar-treatment-plexr",
    name: "Scar Treatment (Plexr)",
    description:
      "Plexr-assisted scar refinement where tissue quality and scar type suit a plasma micro-injury strategy.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0006.jpg",
    duration: "30–60 minutes",
    recovery: "5–10 days",
    catalogSection: "unique",
  },
  {
    slug: "warts-moles-stye-and-chalazion-plexr",
    name: "Warts, Moles, Stye And Chalazion (Plexr)",
    description:
      "Precision Plexr planning for selected benign periocular lesions and chalazion-type concerns after clinical confirmation.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//Watering,%20Itching,%20Lumps,%20Bumps.png",
    duration: "20–45 minutes",
    recovery: "3–10 days",
    catalogSection: "unique",
  },
  {
    slug: "wrinkles-and-fine-lines-plexr",
    name: "Wrinkles And Fine Lines (Plexr)",
    description:
      "Targeted Plexr tightening for fine lines where collagen support has thinned, with periorbital and facial zones selected carefully.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//antiaging.jpg",
    duration: "45–75 minutes",
    recovery: "5–10 days",
    catalogSection: "unique",
  },
  {
    slug: "xanthelasma-plexr",
    name: "Xanthelasma (Plexr)",
    description:
      "Measured Plexr treatment planning for periocular xanthelasma, with emphasis on margin control and healing predictability.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//dark%20circle.png",
    duration: "30–60 minutes",
    recovery: "5–10 days",
    catalogSection: "unique",
  },
];
