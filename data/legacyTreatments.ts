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
      "Specialized restoration options for sparse brows and lashes with natural-looking outcomes.",
    overview:
      "Treatment is planned after a detailed assessment of hair density, skin health, and aesthetic goals, with options ranging from medical support to advanced restorative procedures.",
    duration: "45-120 minutes",
    anesthesia: "Topical or local comfort protocol",
    recovery: "2-10 days depending on treatment type",
  },
  {
    slug: "acne",
    name: "Acne",
    shortDescription:
      "Comprehensive acne management for active breakouts, inflammation, and post-acne marks.",
    overview:
      "A layered protocol combines medical dermatology, in-clinic procedures, and skin-barrier support to control breakouts and improve long-term skin stability.",
    duration: "30-60 minutes",
    anesthesia: "Not usually required",
    recovery: "Minimal to mild downtime",
  },
  {
    slug: "anti-ageing-skin-care",
    name: "Anti-Ageing Skin Care",
    shortDescription:
      "Evidence-led anti-ageing programs focused on firmness, texture, and natural radiance.",
    overview:
      "Treatment plans may combine injectables, energy-based procedures, and medical-grade skincare to soften visible ageing while preserving facial character.",
    duration: "30-90 minutes",
    anesthesia: "Topical comfort protocol",
    recovery: "Minimal downtime in most cases",
  },
  {
    slug: "anti-cellulite-treatment",
    name: "Anti-Cellulite Treatment",
    shortDescription:
      "Targeted body-skin protocols to reduce visible cellulite and improve smoothness.",
    overview:
      "A customized plan may include device-led contouring and skin-quality treatments, paired with maintenance guidance for sustained improvement.",
    duration: "45-90 minutes",
    anesthesia: "Not usually required",
    recovery: "None to mild redness",
  },
  {
    slug: "cheek-hollowness-smile-folds",
    name: "Cheek Hollowness and Smile Folds",
    shortDescription:
      "Volume-restoration strategies for mid-face support and softer smile-line appearance.",
    overview:
      "Facial balancing is planned using anatomy-guided techniques to improve contour and support without creating an overfilled look.",
    duration: "30-60 minutes",
    anesthesia: "Topical or local comfort protocol",
    recovery: "1-5 days",
  },
  {
    slug: "chemical-peels",
    name: "Chemical Peels",
    shortDescription:
      "Medical-grade peels for pigmentation, acne, texture correction, and skin glow.",
    overview:
      "Peel depth and protocol are selected based on skin type and concern, with staged sessions to improve clarity, tone, and resurfacing safely.",
    duration: "30-60 minutes",
    anesthesia: "Not required",
    recovery: "2-10 days based on peel depth",
  },
  {
    slug: "daily-skin-care-program",
    name: "Daily Skin Care Program",
    shortDescription:
      "Doctor-designed skin routines for prevention, correction, and long-term maintenance.",
    overview:
      "A personalized home-care plan aligns active ingredients, barrier repair, and sun protection with clinic treatments for consistent visible outcomes.",
    duration: "20-40 minutes consultation",
    anesthesia: "Not required",
    recovery: "No downtime",
  },
  {
    slug: "dark-circles",
    name: "Dark Circles",
    shortDescription:
      "Under-eye treatment pathways for pigmentation, vascular shadows, and hollowness.",
    overview:
      "Cause-based management may combine skin, pigment, and volume approaches to refresh the under-eye area while maintaining a natural expression.",
    duration: "30-60 minutes",
    anesthesia: "Topical or local comfort protocol",
    recovery: "1-7 days",
  },
  {
    slug: "droopy-brows",
    name: "Droopy Brows",
    shortDescription:
      "Brow-elevation options for heaviness, tired expression, and upper-face imbalance.",
    overview:
      "Treatment planning addresses brow position, muscle activity, and skin quality to create a subtle and proportionate lifted look.",
    duration: "30-90 minutes",
    anesthesia: "Topical or local comfort protocol",
    recovery: "2-10 days",
  },
  {
    slug: "puffy-baggy-eyes",
    name: "Puffy / Baggy Eyes",
    shortDescription:
      "Eye-bag correction options for puffiness, bulging fat pads, and tired appearance.",
    overview:
      "A tailored plan addresses skin laxity, volume prominence, and under-eye support with minimally invasive or procedural options as needed.",
    duration: "45-120 minutes",
    anesthesia: "Topical, local, or sedation protocol",
    recovery: "3-14 days",
  },
  {
    slug: "ear-lobe-repair",
    name: "Ear Lobe Repair",
    shortDescription:
      "Correction of torn, stretched, or damaged earlobes with precise reconstruction.",
    overview:
      "Procedure design focuses on restoring smooth contour and symmetry, with guidance on safe re-piercing when appropriate.",
    duration: "30-60 minutes",
    anesthesia: "Local anesthesia",
    recovery: "7-14 days",
  },
  {
    slug: "excessive-sweating",
    name: "Excessive Sweating",
    shortDescription:
      "Clinical treatment for hyperhidrosis to reduce sweat and improve daily comfort.",
    overview:
      "Cause and severity are evaluated before selecting medical and procedure-based options for reliable symptom control.",
    duration: "20-45 minutes",
    anesthesia: "Topical comfort protocol",
    recovery: "No to minimal downtime",
  },
  {
    slug: "eye-socket-orbit-treatments",
    name: "Eye Socket / Orbit Treatments",
    shortDescription:
      "Specialized oculoplastic care for orbital conditions requiring precision treatment.",
    overview:
      "Management includes detailed imaging-led evaluation and a personalized procedural plan for functional and cosmetic restoration.",
    duration: "60-180 minutes",
    anesthesia: "Local with sedation or general anesthesia",
    recovery: "1-4 weeks",
  },
  {
    slug: "face-reshaping-contouring",
    name: "Face Reshaping and Contouring",
    shortDescription:
      "Anatomy-led facial contour enhancement focused on harmony and proportion.",
    overview:
      "Treatment options are tailored to bone and soft-tissue structure to refine profile balance while preserving individuality.",
    duration: "45-120 minutes",
    anesthesia: "Topical or local comfort protocol",
    recovery: "2-10 days",
  },
  {
    slug: "hollowness-under-eyes",
    name: "Hollowness Under Eyes",
    shortDescription:
      "Targeted under-eye volume support for tired-looking or sunken tear troughs.",
    overview:
      "An under-eye restoration plan is chosen after tissue and skin assessment to improve light reflection and reduce shadowing naturally.",
    duration: "30-60 minutes",
    anesthesia: "Topical or local comfort protocol",
    recovery: "1-7 days",
  },
  {
    slug: "in-turning-out-turning-lids",
    name: "In-turning and Out-turning of Lids",
    shortDescription:
      "Functional eyelid correction for entropion and ectropion with symptom relief.",
    overview:
      "Treatment restores eyelid position and improves comfort, protecting the ocular surface and reducing irritation and watering.",
    duration: "45-120 minutes",
    anesthesia: "Local anesthesia",
    recovery: "1-3 weeks",
  },
  {
    slug: "infections-injuries-fractures",
    name: "Infections, Injuries, Fractures",
    shortDescription:
      "Urgent and planned reconstruction for facial trauma and related complications.",
    overview:
      "Care pathways focus on stabilizing function first, then restoring structural alignment and cosmetic balance through staged correction when needed.",
    duration: "60-240 minutes",
    anesthesia: "Local or general anesthesia",
    recovery: "2-8 weeks",
  },
  {
    slug: "paralysis-face-eyelid",
    name: "Paralysis of Face and Eyelid",
    shortDescription:
      "Reconstructive and supportive care for facial and eyelid movement deficits.",
    overview:
      "Treatment is planned around severity and duration of paralysis, with options that protect the eye and improve facial symmetry and function.",
    duration: "60-240 minutes",
    anesthesia: "Local with sedation or general anesthesia",
    recovery: "2-12 weeks depending on procedure",
  },
  {
    slug: "pigmentation-texture-repair",
    name: "Pigmentation and Texture Repair",
    shortDescription:
      "Corrective dermatology for uneven tone, post-inflammatory marks, and rough texture.",
    overview:
      "Protocol-led treatment combines depigmenting strategies, resurfacing, and maintenance care to progressively improve skin clarity and smoothness.",
    duration: "30-75 minutes",
    anesthesia: "Topical comfort protocol",
    recovery: "2-10 days",
  },
  {
    slug: "skin-brightening",
    name: "Skin Brightening",
    shortDescription:
      "Radiance-focused skin programs that improve tone, clarity, and glow safely.",
    overview:
      "Brightening protocols are customized by skin type and concern using a blend of clinic procedures and everyday medical skincare.",
    duration: "30-60 minutes",
    anesthesia: "Not required",
    recovery: "No to mild downtime",
  },
  {
    slug: "skin-hydration",
    name: "Skin Hydration",
    shortDescription:
      "Barrier-repair and hydration therapies for dry, tired, and dull skin states.",
    overview:
      "Hydration plans use in-clinic skin-replenishment treatments and home-care optimization to improve elasticity and comfort.",
    duration: "30-60 minutes",
    anesthesia: "Not required",
    recovery: "No downtime",
  },
  {
    slug: "sleepy-droopy-eyelid",
    name: "Sleepy or Droopy Eyelid",
    shortDescription:
      "Ptosis-focused correction to improve lid position, vision comfort, and expression.",
    overview:
      "Evaluation includes levator function and ocular health, followed by a treatment strategy that prioritizes natural movement and balanced symmetry.",
    duration: "60-150 minutes",
    anesthesia: "Local anesthesia",
    recovery: "1-3 weeks",
  },
  {
    slug: "spasms-twitching",
    name: "Spasms and Twitching",
    shortDescription:
      "Clinical relief for eyelid and facial spasms using precision-guided protocols.",
    overview:
      "Diagnosis-led management reduces involuntary contractions and improves visual comfort and confidence in social interactions.",
    duration: "20-45 minutes",
    anesthesia: "Not required",
    recovery: "No to minimal downtime",
  },
  {
    slug: "tear-passage-treatments",
    name: "Tear Passage Treatments",
    shortDescription:
      "Care for blocked tear drainage pathways to reduce watering and irritation.",
    overview:
      "Lacrimal evaluation and procedure planning are tailored to blockage location and severity, with a focus on restoring normal tear flow.",
    duration: "45-120 minutes",
    anesthesia: "Local or general anesthesia based on procedure",
    recovery: "1-3 weeks",
  },
  {
    slug: "thyroid-eye-disease",
    name: "Thyroid Eye Disease",
    shortDescription:
      "Multidisciplinary treatment for thyroid-related eye changes and discomfort.",
    overview:
      "Management may include medical stabilization and oculoplastic intervention to improve eye protection, appearance, and daily comfort.",
    duration: "45-180 minutes",
    anesthesia: "Varies by intervention",
    recovery: "1-6 weeks",
  },
  {
    slug: "watering-itching-lumps-bumps",
    name: "Watering, Itching, Lumps, Bumps",
    shortDescription:
      "Focused eyelid and periocular care for common irritating and visible lesions.",
    overview:
      "After cause-based diagnosis, treatment may include medical therapy or minor procedures to reduce recurrence and restore comfort.",
    duration: "20-60 minutes",
    anesthesia: "Topical or local comfort protocol",
    recovery: "1-10 days",
  },
  {
    slug: "wrinkles-fine-lines-folds",
    name: "Wrinkles, Fine Lines, Folds",
    shortDescription:
      "Targeted rejuvenation for expression lines and age-related skin creasing.",
    overview:
      "Treatment combines wrinkle-relaxing, volume-balancing, and resurfacing options to soften lines while preserving natural movement.",
    duration: "30-75 minutes",
    anesthesia: "Topical comfort protocol",
    recovery: "No to mild downtime",
  },
];
