import type { TreatmentEducation, TreatmentEducationContext } from "@/types/treatmentEducation";

const ABSENT_SCANTY_BROWS_LASHES: TreatmentEducation = {
  causesTitle: "What Causes Sparse Brows and Lashes?",
  causesSubtitle: "Multiple factors can contribute to eyebrow and eyelash loss",
  causes: [
    {
      title: "Hereditary/Genetic",
      description: "Congenital conditions affecting hair follicle development",
      icon: "🧬",
    },
    {
      title: "Autoimmune Conditions",
      description: "Alopecia areata and other immune system disorders",
      icon: "🔬",
    },
    {
      title: "Physical Trauma",
      description: "Burns, injuries, or surgical scars affecting follicles",
      icon: "⚡",
    },
    {
      title: "Over-plucking",
      description: "Excessive tweezing leading to follicle damage",
      icon: "🪒",
    },
    {
      title: "Thyroid Issues",
      description: "Hypo/hyperthyroidism causing hair loss",
      icon: "🦋",
    },
    {
      title: "Nutritional Deficiencies",
      description: "Lack of essential vitamins and minerals",
      icon: "🥗",
    },
  ],
  patientConcerns: [
    {
      title: "Cosmetic Concern",
      description: "Significant impact on facial aesthetics and self-confidence",
      icon: "😟",
    },
    {
      title: "Facial Asymmetry",
      description: "Uneven brow or lash distribution affecting facial balance",
      icon: "⚖️",
    },
    {
      title: "Emotional Distress",
      description: "Psychological impact from changes in appearance",
      icon: "💔",
    },
    {
      title: "Eye Protection Loss",
      description: "Reduced natural protection leading to eye irritation",
      icon: "👁️",
    },
  ],
  mythSubtitle: "Common misconceptions about brow and lash loss:",
  mythBusters: [
    {
      myth: "Mascara damages eyelashes permanently",
      truth: "Quality mascara doesn't cause permanent lash loss — it's about underlying conditions",
    },
    {
      myth: "Regular threading thins eyebrows",
      truth: "Proper threading technique doesn't damage follicles — over-plucking does",
    },
    {
      myth: "Crying makes eyelashes fall out",
      truth: "Tears don't cause lash loss — rubbing eyes aggressively might cause temporary damage",
    },
  ],
  treatmentOptionsIntro:
    "Advanced therapeutic approaches for brow and lash restoration:",
  treatmentOptions: [
    {
      name: "Topical Growth Serums",
      description: "Minoxidil and bimatoprost for stimulating follicle growth",
      icon: "💧",
    },
    {
      name: "PRP Therapy",
      description: "Platelet-rich plasma to rejuvenate dormant follicles",
      icon: "🩸",
    },
    {
      name: "Hair Transplantation",
      description: "Surgical transplant of hair follicles for permanent results",
      icon: "🌱",
    },
    {
      name: "Camouflage Techniques",
      description: "Microblading, tattooing, and prosthetic solutions",
      icon: "🎨",
    },
  ],
  treatmentOptionsNote: {
    title: "Comprehensive Treatment Approach",
    body: "Each patient requires individualized assessment and treatment plan based on the underlying cause, extent of loss, and desired outcomes. Dr. Goel will determine the most effective combination of treatments for your specific condition.",
  },
  proprietarySubtitle:
    "Our exclusive approach to brow and lash restoration with measured, medically grounded protocols.",
  proprietaryCards: [
    {
      title: "Comprehensive Diagnosis",
      description:
        "Thorough evaluation including hormonal assessment, autoimmune screening, and follicle analysis when indicated",
      icon: "🔍",
    },
    {
      title: "Customized Treatment",
      description:
        "Personalized therapy combining medical treatments, procedures, and lifestyle modifications",
      icon: "🎯",
    },
    {
      title: "Safe Regrowth Plan",
      description: "Evidence-based protocols with clear expectations on pace and maintenance",
      icon: "📈",
    },
  ],
  promiseItems: [
    "Comprehensive evaluation of underlying causes",
    "Personalized treatment protocols",
    "Safe and proven regrowth techniques",
  ],
  proprietaryGrading: {
    title: "Density Grading System",
    levels: [
      {
        label: "Grade 1 (Mild)",
        description: "25–50% reduction in density with some follicles intact",
        tone: "calm",
      },
      {
        label: "Grade 2 (Moderate)",
        description: "50–75% loss with scattered remaining follicles",
        tone: "caution",
      },
      {
        label: "Grade 3 (Severe)",
        description: "75–100% loss requiring advanced reconstruction techniques",
        tone: "alert",
      },
    ],
  },
  faqs: [
    {
      question: "Do castor oil or lash serums really work?",
      answer:
        "Castor oil may provide moisturizing benefits, but scientific evidence for significant hair growth is limited. Prescription growth serums containing bimatoprost or minoxidil are more effective for actual follicle stimulation when clinically appropriate.",
    },
    {
      question: "Is eyebrow/eyelash hair transplant permanent?",
      answer:
        "Transplanted hair follicles can be long-lasting as they're taken from areas less affected by pattern loss. Transplanted hairs may have donor-site characteristics and can require trimming; expectations are reviewed in consultation.",
    },
    {
      question: "Is thyroid-related brow and lash loss reversible?",
      answer:
        "Often yes, if the thyroid condition is properly managed. Complete reversal depends on duration and extent of follicle involvement. Early treatment generally supports better outcomes.",
    },
    {
      question: "How long does it take to see results from treatment?",
      answer:
        "Hair growth is gradual. Topical approaches may show early changes over weeks to months, while surgical options evolve over longer horizons. Your plan will include realistic timelines.",
    },
    {
      question: "Can stress alone cause complete brow and lash loss?",
      answer:
        "Severe stress can trigger conditions like alopecia areata. Complete loss is more often multifactorial; assessment helps identify contributors.",
    },
    {
      question: "Are there side effects to growth-stimulating treatments?",
      answer:
        "Topical treatments may cause mild irritation or pigment changes in some patients. Risks and monitoring are discussed before starting any prescription pathway.",
    },
  ],
};

function buildTemplateEducation(ctx: TreatmentEducationContext): TreatmentEducation {
  const { name, overview, catalogSection } = ctx;
  const lower = name.toLowerCase();
  const isSignature = catalogSection === "unique";

  return {
    causesTitle: `What causes or contributes to ${lower}?`,
    causesSubtitle: "Several factors can overlap—your consultation focuses on which apply to you.",
    causes: [
      {
        title: "Biology and genetics",
        description: `${name} can relate to inherited traits, natural ageing patterns, and how your skin and deeper tissues heal.`,
        icon: "🧬",
      },
      {
        title: "Hormonal and systemic health",
        description:
          "Thyroid shifts, inflammation, or other medical factors can influence appearance, comfort, and healing.",
        icon: "🦋",
      },
      {
        title: "Environment and lifestyle",
        description: "Sun exposure, sleep, stress, habits, and skincare routines can amplify concerns over time.",
        icon: "☀️",
      },
      {
        title: "Prior treatment or trauma",
        description: "Previous procedures, injury, or irritation can change anatomy and tissue behaviour.",
        icon: "⚕️",
      },
      {
        title: "Clinical focus of your assessment",
        description:
          overview.length > 280 ? `${overview.slice(0, 277).trim()}…` : overview,
        icon: "🔍",
      },
    ],
    patientConcerns: [
      {
        title: "Visible change or asymmetry",
        description: `Patients often notice differences in balance, contour, or symmetry related to ${lower}.`,
        icon: "👁️",
      },
      {
        title: "Daily comfort and function",
        description: "Irritation, dryness, watering, or visual symptoms may accompany appearance concerns.",
        icon: "💧",
      },
      {
        title: "Confidence and social impact",
        description: "Many people seek care when the concern affects expression, photographs, or self-assurance.",
        icon: "💬",
      },
      {
        title: "Uncertainty about next steps",
        description: "Conflicting advice online can make it hard to know what is safe, proportionate, and effective.",
        icon: "📋",
      },
    ],
    mythSubtitle: "Straight talk on common misconceptions:",
    mythBusters: [
      {
        myth: "There is always one right fix for everyone.",
        truth: `Plans are individualised. What suits one person may not suit another, even for similar concerns about ${lower}.`,
      },
      {
        myth: "The fastest option is always the safest.",
        truth: "Rushing intensity often increases downtime or risk. Staged, medically grounded steps usually serve long-term outcomes better.",
      },
      {
        myth: "Results never require maintenance.",
        truth: "Skin and tissues continue to age; honest planning includes what to expect over time and how to maintain outcomes safely.",
      },
    ],
    treatmentOptionsIntro: `Care pathways for ${lower} are selected only after review of your history, examination, and priorities.`,
    treatmentOptions: [
      {
        name: "Assessment and counselling",
        description: "Clarify contributors, candid expectations, and a short list of appropriate options.",
        icon: "📋",
      },
      {
        name: "Medical and supportive care",
        description: "Prescription or clinician-led adjuncts when they match your pattern and goals.",
        icon: "💊",
      },
      {
        name: "In-clinic procedures",
        description: "Surgical or device-led options when appropriate to anatomy, diagnosis, and downtime.",
        icon: "✨",
      },
      {
        name: "Maintenance and review",
        description: "Spaced follow-up so adjustments stay proportionate, safe, and aligned with healing.",
        icon: "🗓️",
      },
    ],
    treatmentOptionsNote: {
      title: "Personalised sequencing",
      body: "Dr. Goel determines which combination is suitable for you rather than applying a generic template.",
    },
    proprietarySubtitle: isSignature
      ? `This signature FACES pathway layers proven steps for ${lower} where your diagnosis and anatomy support them.`
      : `Your plan for ${lower} is built with staged, anatomy-first judgment and transparent counselling.`,
    proprietaryCards: [
      {
        title: "Structured evaluation",
        description: "Goals, lifestyle, anatomy, and prior treatments inform what is offered—and what is deferred.",
        icon: "🔍",
      },
      {
        title: "Calibrated intensity",
        description: "Sessions and interventions are matched to healing capacity and your timeline.",
        icon: "⚖️",
      },
      {
        title: "Safety-led pacing",
        description: "Progress is reviewed before escalating so results accumulate without unnecessary risk.",
        icon: "🛡️",
      },
    ],
    promiseItems: [
      "Candid discussion of benefits, limitations, and alternatives",
      "Plans aligned with what is medically appropriate for you",
      "Continuity of care through recovery and review windows",
    ],
    faqs: [
      {
        question: `How do I know if I am a candidate for care related to ${lower}?`,
        answer:
          "Candidacy is confirmed in consultation after history, examination, and—when relevant—targeted tests or imaging.",
      },
      {
        question: "What should I bring to my first visit?",
        answer:
          "A concise timeline of your concern, prior treatments, allergies, and any relevant reports helps the team plan efficiently.",
      },
      {
        question: "How soon will I see change?",
        answer:
          "Timelines depend on the pathway chosen. You will leave consultation with a realistic sense of milestones and follow-up.",
      },
      {
        question: "Can I combine this with other treatments?",
        answer:
          "Combination plans are considered when sequencing is safe and evidence supports synergy for your specific case.",
      },
    ],
  };
}

export function getTreatmentEducation(ctx: TreatmentEducationContext): TreatmentEducation {
  if (ctx.slug === "absent-scanty-brows-lashes") {
    return ABSENT_SCANTY_BROWS_LASHES;
  }
  return buildTemplateEducation(ctx);
}
