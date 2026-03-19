export interface LegacyTreatmentCatalogItem {
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  duration: string;
  recovery: string;
  category: string;
}

export const legacyTreatmentCatalog: LegacyTreatmentCatalogItem[] = [
  {
    slug: "absent-scanty-brows-lashes",
    name: "Absent / Scanty Brows and Lashes",
    description:
      "Advanced techniques for eyebrow and eyelash restoration using hair transplantation, medical treatments, and aesthetic enhancement procedures.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0005.jpg",
    duration: "1-2 hours",
    recovery: "1-2 weeks",
    category: "Aesthetic Enhancement",
  },
  {
    slug: "acne",
    name: "Acne",
    description:
      "Comprehensive acne treatment using medical-grade therapies, chemical peels, laser treatments, and hormonal management for all acne types.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/beforeandafter//acne%20before.png",
    duration: "30-60 minutes",
    recovery: "3-7 days",
    category: "Medical Dermatology",
  },
  {
    slug: "anti-ageing-skin-care",
    name: "Anti-Ageing Skin Care",
    description:
      "Evidence-based anti-aging protocols combining retinoids, antioxidants, peptides, and advanced skincare technologies for youthful skin.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//antiaging.jpg",
    duration: "45 minutes",
    recovery: "None",
    category: "Preventive Care",
  },
  {
    slug: "anti-cellulite-treatment",
    name: "Anti-Cellulite Treatment",
    description:
      "Multi-modal cellulite reduction using radiofrequency, massage therapy, topical treatments, and lifestyle modifications.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//Cellulite.jpg",
    duration: "60-90 minutes",
    recovery: "24-48 hours",
    category: "Body Contouring",
  },
  {
    slug: "cheek-hollowness-smile-folds",
    name: "Cheek Hollowness and Smile Folds",
    description:
      "Dermal filler injections and volumizing treatments to restore facial volume and reduce nasolabial folds for a youthful appearance.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//cheek%20hollowness.png",
    duration: "30-45 minutes",
    recovery: "2-3 days",
    category: "Facial Rejuvenation",
  },
  {
    slug: "chemical-peels",
    name: "Chemical Peels",
    description:
      "Professional-grade chemical peels ranging from superficial to deep for skin rejuvenation, pigmentation correction, and texture improvement.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0012.jpg",
    duration: "30-60 minutes",
    recovery: "3-14 days",
    category: "Skin Resurfacing",
  },
  {
    slug: "daily-skin-care-program",
    name: "Daily Skin Care Program",
    description:
      "Personalized medical-grade skincare regimens designed to maintain healthy skin, prevent aging, and address specific skin concerns.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//daily%20skin%20care.png",
    duration: "Consultation: 30 min",
    recovery: "None",
    category: "Preventive Care",
  },
  {
    slug: "dark-circles",
    name: "Dark Circles",
    description:
      "Comprehensive treatment for under-eye darkness using fillers, laser therapy, chemical peels, and topical treatments.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//dark%20circle.png",
    duration: "30-60 minutes",
    recovery: "3-7 days",
    category: "Eye Care",
  },
  {
    slug: "droopy-brows",
    name: "Droopy Brows",
    description:
      "Surgical and non-surgical brow lift procedures to elevate sagging eyebrows and create a more youthful, alert appearance.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//Droopy%20brows.png",
    duration: "1-2 hours",
    recovery: "1-2 weeks",
    category: "Oculoplastic Surgery",
  },
  {
    slug: "ear-lobe-repair",
    name: "Ear Lobe Repair",
    description:
      "Surgical reconstruction of torn, stretched, or damaged earlobes with precise suturing techniques for natural-looking results.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//ear%20repair.png",
    duration: "30-60 minutes",
    recovery: "1-2 weeks",
    category: "Reconstructive Surgery",
  },
  {
    slug: "excessive-sweating",
    name: "Excessive Sweating",
    description:
      "Hyperhidrosis treatment using Botox injections, topical antiperspirants, and surgical options for severe cases.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0007.jpg",
    duration: "30-45 minutes",
    recovery: "24-48 hours",
    category: "Medical Treatment",
  },
  {
    slug: "eye-socket-orbit-treatments",
    name: "Eye Socket / Orbit Treatments",
    description:
      "Specialized orbital surgery for thyroid eye disease, orbital fractures, tumors, and socket reconstruction procedures.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//Eye%20Socket%20%20Orbit%20Treatments.png",
    duration: "2-4 hours",
    recovery: "2-6 weeks",
    category: "Orbital Surgery",
  },
  {
    slug: "face-reshaping-contouring",
    name: "Face Reshaping and Contouring",
    description:
      "Advanced facial contouring using dermal fillers, fat grafting, and surgical techniques to enhance facial structure and symmetry.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0010.jpg",
    duration: "1-3 hours",
    recovery: "1-3 weeks",
    category: "Facial Enhancement",
  },
  {
    slug: "hollowness-under-eyes",
    name: "Hollowness Under Eyes",
    description:
      "Treatment of tear trough deformity using hyaluronic acid fillers, fat grafting, and surgical correction for a refreshed appearance.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//Hollowness%20under%20Eyes.png",
    duration: "30-60 minutes",
    recovery: "3-7 days",
    category: "Eye Rejuvenation",
  },
  {
    slug: "infections-injuries-fractures",
    name: "Infections, Injuries, Fractures",
    description:
      "Emergency and reconstructive treatment of facial trauma, infections, and fractures with advanced surgical techniques.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0008.jpg",
    duration: "1-4 hours",
    recovery: "2-8 weeks",
    category: "Trauma Surgery",
  },
  {
    slug: "in-turning-out-turning-lids",
    name: "In-turning and Out-turning of Lids",
    description:
      "Surgical correction of entropion and ectropion to restore normal eyelid position and protect the eye surface.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//In-turning%20and%20Out-turning%20of%20Lids.png",
    duration: "1-2 hours",
    recovery: "2-3 weeks",
    category: "Eyelid Surgery",
  },
  {
    slug: "paralysis-face-eyelid",
    name: "Paralysis of Face and Eyelid",
    description:
      "Treatment of facial palsy using nerve grafts, muscle transfers, Botox, and rehabilitative procedures to restore function.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0009.jpg",
    duration: "2-6 hours",
    recovery: "4-12 weeks",
    category: "Reconstructive Surgery",
  },
  {
    slug: "pigmentation-texture-repair",
    name: "Pigmentation And Texture Repair",
    description:
      "Advanced treatments for melasma, age spots, and skin texture using lasers, chemical peels, and medical-grade skincare.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//pigmentation.png",
    duration: "30-90 minutes",
    recovery: "3-14 days",
    category: "Skin Correction",
  },
  {
    slug: "puffy-baggy-eyes",
    name: "Puffy / Baggy Eyes",
    description:
      "Surgical and non-surgical treatment of under-eye bags using blepharoplasty, radiofrequency, and advanced techniques.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/beforeandafter//eye%20bag%20before%20.png",
    duration: "1-2 hours",
    recovery: "1-2 weeks",
    category: "Eye Surgery",
  },
  {
    slug: "skin-brightening",
    name: "Skin Brightening",
    description:
      "Professional skin brightening treatments using vitamin C, kojic acid, arbutin, and laser therapy for radiant complexion.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0011.jpg",
    duration: "45-60 minutes",
    recovery: "3-7 days",
    category: "Skin Enhancement",
  },
  {
    slug: "skin-hydration",
    name: "Skin Hydration",
    description:
      "Deep hydration treatments using hyaluronic acid, moisturizing facials, and medical-grade hydrating products.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//skin%20hydration.jpg",
    duration: "60 minutes",
    recovery: "None",
    category: "Skin Care",
  },
  {
    slug: "sleepy-droopy-eyelid",
    name: "Sleepy or Droopy Eyelid",
    description:
      "Ptosis correction surgery to lift drooping eyelids and improve vision and appearance using advanced surgical techniques.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/beforeandafter//ptosis%20before.png",
    duration: "1-2 hours",
    recovery: "2-3 weeks",
    category: "Ptosis Surgery",
  },
  {
    slug: "spasms-twitching",
    name: "Spasms and Twitching",
    description:
      "Treatment of blepharospasm and facial spasms using Botox injections and neurological management protocols.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0004.jpg",
    duration: "20-30 minutes",
    recovery: "24-48 hours",
    category: "Neurological Treatment",
  },
  {
    slug: "tear-passage-treatments",
    name: "Tear Passage Treatments",
    description:
      "Surgical treatment of blocked tear ducts using dacryocystorhinostomy and endoscopic techniques for tear drainage.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//Tear%20passage%20treatment.png",
    duration: "1-2 hours",
    recovery: "2-4 weeks",
    category: "Lacrimal Surgery",
  },
  {
    slug: "thyroid-eye-disease",
    name: "Thyroid Eye Disease",
    description:
      "Comprehensive management of thyroid-related eye changes including orbital decompression and eyelid correction.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/beforeandafter//thyroid%20eye%20disease%20before.png",
    duration: "2-4 hours",
    recovery: "4-8 weeks",
    category: "Orbital Disease",
  },
  {
    slug: "watering-itching-lumps-bumps",
    name: "Watering, Itching, Lumps, Bumps",
    description:
      "Treatment of various eyelid conditions including cysts, styes, and inflammatory conditions with medical and surgical approaches.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//Watering,%20Itching,%20Lumps,%20Bumps.png",
    duration: "15-60 minutes",
    recovery: "3-14 days",
    category: "Eyelid Conditions",
  },
  {
    slug: "wrinkles-fine-lines-folds",
    name: "Wrinkles, Fine Lines, Folds",
    description:
      "Comprehensive anti-aging treatment using Botox, fillers, laser resurfacing, and advanced skincare for smooth skin.",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//IMG-20250626-WA0006.jpg",
    duration: "30-90 minutes",
    recovery: "3-14 days",
    category: "Anti-Aging",
  },
];
