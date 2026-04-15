export interface LegacyTreatment {
  slug: string;
  name: string;
  shortDescription: string;
  overview: string;
  duration: string;
  anesthesia: string;
  recovery: string;
}

export const legacyTreatments: LegacyTreatment[] = [
  {
    slug: "absent-scanty-brows-lashes",
    name: "Absent / Scanty Brows and Lashes",
    shortDescription:
      "Restoration-focused options for sparse brows and lashes with natural-looking goals.",
    overview:
      "After assessment of density, skin health, and symmetry, a plan is tailored using medical and procedural options suited to your pattern of loss.",
    duration: "45–120 minutes",
    anesthesia: "Topical or local comfort protocol",
    recovery: "2–10 days depending on treatment type",
  },
  {
    slug: "acne",
    name: "Acne",
    shortDescription: "Structured care for active acne and post-inflammatory skin changes.",
    overview:
      "Protocols combine prescription-guided medical care, in-clinic sessions, and barrier-aware home routines to stabilise breakouts and improve clarity over time.",
    duration: "30–60 minutes",
    anesthesia: "Not usually required",
    recovery: "Minimal to mild downtime",
  },
  {
    slug: "anti-ageing-skin-care",
    name: "Anti-Ageing Skin Care",
    shortDescription: "Evidence-led programmes for firmness, texture, and natural radiance.",
    overview:
      "Plans are staged to your tolerance and goals, pairing in-clinic sessions with maintenance skincare that supports long-term skin quality.",
    duration: "30–90 minutes",
    anesthesia: "Topical comfort protocol",
    recovery: "Minimal downtime in most cases",
  },
  {
    slug: "anti-cellulite-treatment",
    name: "Anti-Cellulite Treatment",
    shortDescription: "Protocols aimed at smoother-looking skin in cellulite-prone areas.",
    overview:
      "Expectations, session spacing, and home support are discussed upfront so improvements feel realistic and sustainable.",
    duration: "45–90 minutes",
    anesthesia: "Not usually required",
    recovery: "None to mild redness",
  },
  {
    slug: "cheek-hollowness-smile-folds",
    name: "Cheek Hollowness and Smile Folds",
    shortDescription: "Mid-face support and softer smile-line appearance with anatomy-first planning.",
    overview:
      "Volume and support strategies are chosen to respect facial movement and avoid an overfilled look, with follow-up tuned to how tissue responds.",
    duration: "30–60 minutes",
    anesthesia: "Topical or local comfort protocol",
    recovery: "1–5 days",
  },
  {
    slug: "chemical-peels",
    name: "Chemical Peels",
    shortDescription: "Medical-grade peels for tone, texture, and clarity when clinically appropriate.",
    overview:
      "Depth and frequency are matched to skin type and concern, with sun protection and barrier repair integrated into the plan.",
    duration: "30–60 minutes",
    anesthesia: "Not required",
    recovery: "2–10 days based on peel depth",
  },
  {
    slug: "daily-skin-care-program",
    name: "Daily Skin Care Program",
    shortDescription: "Doctor-designed routines for prevention, correction, and maintenance.",
    overview:
      "Active ingredients, barrier repair, and sun protection are coordinated with your in-clinic schedule for steady, safe progress.",
    duration: "20–40 minutes consultation",
    anesthesia: "Not required",
    recovery: "No downtime",
  },
  {
    slug: "dark-circles",
    name: "Dark Circles",
    shortDescription: "Cause-based pathways for under-eye darkness and tired appearance.",
    overview:
      "Pigment, shadow, volume, and skin quality contributors are separated so treatment steps stay focused and proportionate.",
    duration: "30–60 minutes",
    anesthesia: "Topical or local comfort protocol",
    recovery: "1–7 days",
  },
  {
    slug: "droopy-brows",
    name: "Droopy brows",
    shortDescription: "Options for brow heaviness and upper-face imbalance.",
    overview:
      "Brow position, muscle activity, and skin quality guide the plan, with emphasis on a subtle, natural lift.",
    duration: "30–90 minutes",
    anesthesia: "Topical or local comfort protocol",
    recovery: "2–10 days",
  },
  {
    slug: "ear-lobe-repair",
    name: "Ear Lobe Repair",
    shortDescription: "Reconstruction for torn, stretched, or damaged earlobes.",
    overview:
      "Technique selection prioritises smooth contour and symmetry, with aftercare guidance for healing and optional safe re-piercing.",
    duration: "30–60 minutes",
    anesthesia: "Local anesthesia",
    recovery: "7–14 days",
  },
  {
    slug: "excessive-sweating",
    name: "Excessive Sweating",
    shortDescription: "Clinical hyperhidrosis care for improved daily comfort.",
    overview:
      "Severity and site guide the approach, with follow-up to confirm symptom control and tolerability.",
    duration: "20–45 minutes",
    anesthesia: "Topical comfort protocol",
    recovery: "No to minimal downtime",
  },
  {
    slug: "eye-socket-orbit-treatments",
    name: "Eye Socket / Orbit Treatments",
    shortDescription: "Specialist planning for socket- and orbit-related concerns.",
    overview:
      "Evaluation emphasises protection, function, and balanced appearance, with imaging and examination findings integrated into recommendations.",
    duration: "60–180 minutes",
    anesthesia: "Local with sedation or general anesthesia",
    recovery: "1–4 weeks",
  },
  {
    slug: "face-reshaping-contouring",
    name: "Face reshaping and contouring",
    shortDescription: "Contour refinement focused on harmony and proportion.",
    overview:
      "Recommendations follow bone and soft-tissue anatomy, aiming for cohesive balance rather than isolated feature change.",
    duration: "45–120 minutes",
    anesthesia: "Topical or local comfort protocol",
    recovery: "2–10 days",
  },
  {
    slug: "hollowness-under-eyes",
    name: "Hollowness under Eyes",
    shortDescription: "Under-eye volume support for sunken or tired-looking troughs.",
    overview:
      "Tissue quality and light reflection are considered together so improvements look natural in real-world lighting, not only on camera.",
    duration: "30–60 minutes",
    anesthesia: "Topical or local comfort protocol",
    recovery: "1–7 days",
  },
  {
    slug: "infections-injuries-fractures",
    name: "Infections, injuries, fractures",
    shortDescription: "Care for periocular trauma, infection, and related complications.",
    overview:
      "Acute stabilisation and staged refinement are discussed as needed, with function and safety leading each decision.",
    duration: "60–240 minutes",
    anesthesia: "Local or general anesthesia",
    recovery: "2–8 weeks",
  },
  {
    slug: "in-turning-out-turning-lids",
    name: "In-turning and Out-turning of Lids",
    shortDescription: "Functional correction for entropion and ectropion.",
    overview:
      "Eyelid position is restored to improve comfort, tear film health, and a natural lid margin appearance.",
    duration: "45–120 minutes",
    anesthesia: "Local anesthesia",
    recovery: "1–3 weeks",
  },
  {
    slug: "paralysis-face-eyelid",
    name: "Paralysis of Face and Eyelid",
    shortDescription: "Supportive and reconstructive care for movement deficits.",
    overview:
      "Eye protection, moisture, and symmetry goals are balanced with staged options matched to duration and severity.",
    duration: "60–240 minutes",
    anesthesia: "Local with sedation or general anesthesia",
    recovery: "2–12 weeks depending on procedure",
  },
  {
    slug: "pigmentation-texture-repair",
    name: "Pigmentation And Texture Repair",
    shortDescription: "Corrective care for uneven tone and rough texture.",
    overview:
      "Protocols progress in safe steps, combining targeted correction with maintenance to reduce relapse risk.",
    duration: "30–75 minutes",
    anesthesia: "Topical comfort protocol",
    recovery: "2–10 days",
  },
  {
    slug: "puffy-baggy-eyes",
    name: "Puffy / Baggy Eyes",
    shortDescription: "Plans for under-eye bags and heavy or tired eyelids.",
    overview:
      "Skin laxity, fat prominence, and support anatomy guide whether minimally invasive or procedural steps are appropriate.",
    duration: "45–120 minutes",
    anesthesia: "Topical, local, or sedation protocol",
    recovery: "3–14 days",
  },
  {
    slug: "skin-brightening",
    name: "Skin Brightening",
    shortDescription: "Radiance programmes focused on even tone and healthy glow.",
    overview:
      "Brightening is paced for your skin type, with sun habits and barrier care treated as essential partners to results.",
    duration: "30–60 minutes",
    anesthesia: "Not required",
    recovery: "No to mild downtime",
  },
  {
    slug: "skin-hydration",
    name: "Skin Hydration",
    shortDescription: "Hydration and barrier repair for dry or uncomfortable skin.",
    overview:
      "In-clinic replenishment is paired with practical home routines so comfort and elasticity improve together.",
    duration: "30–60 minutes",
    anesthesia: "Not required",
    recovery: "No downtime",
  },
  {
    slug: "sleepy-droopy-eyelid",
    name: "Sleepy or Droopy Eyelid (Ptosis Surgery)",
    shortDescription: "Ptosis-focused correction for lid height and visual comfort.",
    overview:
      "Levator function and ocular surface health inform the surgical plan, prioritising natural movement and symmetric height.",
    duration: "60–150 minutes",
    anesthesia: "Local anesthesia",
    recovery: "1–3 weeks",
  },
  {
    slug: "spasms-twitching",
    name: "Spasms and Twitching",
    shortDescription: "Clinical relief for eyelid and facial spasms.",
    overview:
      "Diagnosis guides dosing and follow-up so involuntary contractions and visual discomfort improve with monitored safety.",
    duration: "20–45 minutes",
    anesthesia: "Not required",
    recovery: "No to minimal downtime",
  },
  {
    slug: "tear-passage-treatments",
    name: "Tear Passage Treatments",
    shortDescription: "Care for blocked tear drainage and related watering.",
    overview:
      "Anatomy of the drainage pathway informs procedural planning, aiming for durable symptom improvement.",
    duration: "45–120 minutes",
    anesthesia: "Local or general anesthesia based on procedure",
    recovery: "1–3 weeks",
  },
  {
    slug: "thyroid-eye-disease",
    name: "Thyroid Eye Disease",
    shortDescription: "Planning for thyroid-related eye changes and discomfort.",
    overview:
      "Activity phase, eye protection needs, and appearance goals are reviewed together before recommending intervention timing.",
    duration: "45–180 minutes",
    anesthesia: "Varies by intervention",
    recovery: "1–6 weeks",
  },
  {
    slug: "watering-itching-lumps-bumps",
    name: "Watering, Itching, Lumps, Bumps",
    shortDescription: "Focused care for irritating or visible eyelid concerns.",
    overview:
      "Examination-first management reduces misdiagnosis risk, with treatment matched to the confirmed cause.",
    duration: "20–60 minutes",
    anesthesia: "Topical or local comfort protocol",
    recovery: "1–10 days",
  },
  {
    slug: "wrinkles-fine-lines-folds",
    name: "Wrinkles, Fine Lines, Folds",
    shortDescription: "Line-softening plans that respect natural expression.",
    overview:
      "Surface quality, muscle activity, and volume support are considered so results look fresh rather than stiff.",
    duration: "30–75 minutes",
    anesthesia: "Topical comfort protocol",
    recovery: "No to mild downtime",
  },
  {
    slug: "bye-bye-dark-circles",
    name: "Bye Bye Dark Circles©️",
    shortDescription: "Proprietary FACES protocol for under-eye darkness.",
    overview:
      "Multiple modalities are sequenced only when they fit your diagnosis, with emphasis on natural under-eye character and stable maintenance.",
    duration: "45–90 minutes",
    anesthesia: "Topical or local comfort protocol",
    recovery: "3–10 days",
  },
  {
    slug: "correction-of-treatments-gone-wrong",
    name: "Correction Of Treatments Gone Wrong",
    shortDescription: "Specialist revision planning after unsatisfactory prior treatment.",
    overview:
      "A candid review of tissue status, risks, and realistic outcomes precedes any staged correction, with recovery expectations outlined clearly.",
    duration: "Varies",
    anesthesia: "Varies by plan",
    recovery: "Discussed in consultation",
  },
  {
    slug: "no-more-baggy-eyes",
    name: "No More Baggy Eyes©️",
    shortDescription: "Signature FACES pathway for baggy or puffy eyelids.",
    overview:
      "Surgical and supportive steps are selected to refresh the eye area while preserving crease architecture and natural expression.",
    duration: "60–120 minutes",
    anesthesia: "Local with comfort support",
    recovery: "7–14 days",
  },
  {
    slug: "non-surgical-blepharoplasty-plexr",
    name: "Non-Surgical Blepharoplasty (Plexr)",
    shortDescription: "Plasma-led eyelid tightening for suitable candidates.",
    overview:
      "Skin quality, laxity pattern, and downtime tolerance determine whether Plexr tightening is appropriate versus other options.",
    duration: "45–90 minutes",
    anesthesia: "Topical or local comfort protocol",
    recovery: "5–10 days",
  },
  {
    slug: "plasma-facial-plexr",
    name: "Plasma Facial (Plexr)",
    shortDescription: "Plasma resurfacing and tightening for skin quality refresh.",
    overview:
      "Treatment zones and intensity are chosen to match healing capacity, with periocular areas handled with additional caution.",
    duration: "45–75 minutes",
    anesthesia: "Topical comfort protocol",
    recovery: "5–10 days",
  },
  {
    slug: "scar-treatment-plexr",
    name: "Scar Treatment (Plexr)",
    shortDescription: "Plexr refinement for selected scar types and locations.",
    overview:
      "Scar age, depth, and skin type inform whether plasma micro-injury is appropriate, often as part of a broader scar strategy.",
    duration: "30–60 minutes",
    anesthesia: "Topical comfort protocol",
    recovery: "5–10 days",
  },
  {
    slug: "warts-moles-stye-and-chalazion-plexr",
    name: "Warts, Moles, Stye And Chalazion (Plexr)",
    shortDescription: "Precision Plexr planning for selected benign lesions.",
    overview:
      "Clinical confirmation precedes treatment, with margins and healing discussed for each lesion type.",
    duration: "20–45 minutes",
    anesthesia: "Topical or local comfort protocol",
    recovery: "3–10 days",
  },
  {
    slug: "wrinkles-and-fine-lines-plexr",
    name: "Wrinkles And Fine Lines (Plexr)",
    shortDescription: "Plexr tightening for fine lines in suitable areas.",
    overview:
      "Fine lines with good skin elasticity respond best; expectations for tightening versus volume change are clarified before treatment.",
    duration: "45–75 minutes",
    anesthesia: "Topical comfort protocol",
    recovery: "5–10 days",
  },
  {
    slug: "xanthelasma-plexr",
    name: "Xanthelasma (Plexr)",
    shortDescription: "Measured Plexr approach for periocular xanthelasma.",
    overview:
      "Lesion extent and skin tone guide treatment geometry and aftercare, with medical follow-up for underlying lipid issues when relevant.",
    duration: "30–60 minutes",
    anesthesia: "Topical or local comfort protocol",
    recovery: "5–10 days",
  },
];
