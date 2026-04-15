export type WhyChooseUsFaqItem = {
  id: string;
  question: string;
  /** Plain text answer; omit when only `cta` is shown */
  answer?: string;
  /** Optional link shown below the answer (or alone when no answer) */
  cta?: { label: string; href: string };
};

export const TREATMENTS_PAGE_HREF = "/service";

export const whyChooseUsFaqs: Record<"faces" | "treatment" | "admin", WhyChooseUsFaqItem[]> = {
  admin: [
    {
      id: "admin-book",
      question: "How do I book my appointment?",
      answer:
        "Simply press the book or contact button and you will be taken through our booking procedure.",
    },
    {
      id: "admin-contact",
      question: "How can I contact you?",
      answer:
        "Just click on the contact button you will be redirected to the call page or you can also click on book button which will take you to our Book an appointment page.",
    },
    {
      id: "admin-where",
      question: "Where will I get my treatment done?",
      answer:
        "We organise a virtual consultation using a proprietary and secure video calling system where Dr. Shubhra Goel spends time to understand your problem areas, history and needs. She then presents a holistic plan drawn from the treatments published on this website, including surgical and non-surgical options when appropriate. Procedures are administered at designated consulting facilities, and logistics are explained during your consultation.",
    },
    {
      id: "admin-cost",
      question: "How much do your services cost?",
      answer:
        "We create bespoke treatments for each of our patients depending on their concerns. Due to this, we don't publish any standard rates on our website. We will work with you to ensure that we create a treatment plan that works for you. If you want to know further, please book a video consultation or contact us.",
    },
  ],
  treatment: [
    {
      id: "treat-risks",
      question: "Are there any risks or side effects involved in the treatments?",
      answer:
        "There are minimal risks involved in these procedures when performed by a trained ophthalmic cosmetic surgeon. The detailed pros and cons of any procedure are explained during the counselling sessions and consultation. Feel free to ask and raise your queries. Dr. Shubhra Goel focuses on providing realistic results and hence spends a significant amount of time talking to her patients about what to expect and answer any questions they may have about the recovery times etc.",
    },
    {
      id: "treat-expect",
      question: "What should I expect, what is recovery time and how do I know I am the right candidate?",
      answer:
        "Every patient undergoes a thorough examination and counseling session to help and discover the best possibilities for making positive changes. The realistic outcomes and results are explained. For now, you should know there are barely any visible scars from these procedures and you can expect to be ready to show the world your new look after approximately a week or two of recovery. Also, some of these procedures have a medical basis and could possibly be eligible for coverage under your insurance plan. Be sure to ask.",
    },
    {
      id: "treat-expensive",
      question: "How expensive are these procedures?",
      answer:
        "The cost of these procedures do differ from one city to other. Most of the procedures can be performed at a very optimal load to ones pocket. Also, some of these procedures have a medical basis and could possibly be eligible for coverage under your insurance plan. Be sure to ask.",
    },
    {
      id: "treat-all",
      question: "What all treatments do you provide?",
      cta: { label: "View our treatments", href: TREATMENTS_PAGE_HREF },
    },
  ],
  faces: [
    {
      id: "faces-clinic",
      question: "What is an Eye and Face Enhancement Clinic?",
      answer:
        "An Eye and Face Enhancement Clinic is a specialist setting that addresses disorders, defects, and blemishes of the eyes, eyelids, face, and skin through super-specialist-led evaluation. Functional and appearance-related concerns are approached with the same disciplined planning. At FACES, Dr. Shubhra Goel provides holistic treatment planning grounded in the clinical offerings published on this website.",
    },
    {
      id: "faces-different",
      question: "How are you different from other cosmetic services?",
      answer:
        "We are led by an internationally trained oculofacial surgeon and take a holistic, medically grounded approach—realistic planning, candid counsel, and tailored surgical and non-surgical options rather than generic cosmetic packages. The full picture is discussed in your consultation.",
    },
    {
      id: "faces-oculoplasty",
      question: "What is Oculoplasty?",
      answer:
        "Oculoplasty, or ophthalmic plastic surgery, is a specialist field, that deals with treating functional and appearance related disorders / diseases / defects of the eye and the surrounding areas. An oculoplastic surgeon specialises in plastic and reconstructive surgery of the periorbital and facial tissues including the eyelids, eyebrows, forehead, cheeks, orbit (bony cavity around the eye), and lacrimal (tear) system. Dr. Shubhra Goel has received her medical training from some of world's leading universities and institutions - GMC Mumbai, KEM Hospitals Mumbai, Rotary Eye Institute Navsari, Sankara Nethralaya Chennai and University of Wisconsin, Madison.",
    },
    {
      id: "faces-who-oculofacial",
      question: "Who is an Oculofacial plastic surgeon?",
      answer:
        "An Oculofacial Surgeon is an Ophthalmologist (someone who has been trained as a medical doctor and then has done specialist training in ophthalmology) who has completed additional education (2-3 year long fellowships) in the plastic surgery of eyes and surrounding areas. Dr. Shubhra Goel has completed two such fellowships—first one from the leading institution in Asia—Sankara Nethralaya and the second one from the leading institution in USA—University of Madison, Wisconsin. Also known as Ophthalmic Facial Plastics, this is an expanded work horizon of Oculoplastic surgeons, with the focus on aesthetic and reconstructive aspects of the eyes and face. The main organising body for oculofacial plastic surgery in India is OPAI (Oculoplastic Association of India), and in the world is American Society of Ophthalmic Plastic and Reconstructive Surgery (ASOPRS). Dr. Shubhra Goel is a member of both these associations.",
    },
    {
      id: "faces-all-eye-docs",
      question: "Are all eye doctors Oculofacial Surgeons?",
      answer:
        "No. An Oculofacial Surgeon is an Ophthalmologist (someone who has been trained as a medical doctor and then has done specialist training in ophthalmology) who has completed additional education (2-3 year long fellowships) in the plastic surgery of eyes and surrounding areas. Dr. Shubhra Goel has completed two such fellowships—first one from the leading institution in Asia—Sankara Nethralaya and the second one from the leading institution in USA—University of Madison, Wisconsin.",
    },
    {
      id: "faces-vs-others",
      question: "How are your services different from plastic surgeons, dermatologists and other cosmetic clinics?",
      answer:
        "Oculofacial surgeons spend years focused on the eyelids, orbit, lacrimal system, and the tissues immediately around the eyes. That depth matters when concerns sit at the boundary of function and appearance. At FACES, Dr. Goel works strictly within the treatment portfolio published on this website—nothing is implied beyond what is listed. Consultations prioritise candidacy, safety, realistic outcomes, and recovery, rather than commercial packaging.",
    },
    {
      id: "faces-why-oculoplasty",
      question: "Why should I come to an Oculoplasty surgeon for my cosmetic / reconstructive work?",
      answer:
        "You are dealing with your most important assets—your face and your eyes. You don't want to take chances with these. An ophthalmic or oculofacial surgeon is most qualified to perform procedures which involve such delicate structures as your eyes, eyelids and face. They are also trained to provide appropriate before and after care.",
    },
    {
      id: "faces-services",
      question: "What services do you offer?",
      cta: { label: "View our treatments", href: TREATMENTS_PAGE_HREF },
    },
  ],
};

export type WhyChooseUsTabId = keyof typeof whyChooseUsFaqs;

/** Teaser copy for division cards (selected state), on-brand with FACES knowledge center */
export const whyChooseUsDivisionMeta: Record<
  WhyChooseUsTabId,
  { title: string; teaser: string }
> = {
  faces: {
    title: "FACES",
    teaser:
      "Understand what defines our eye and face enhancement clinic, what oculoplasty is, and how specialist-led care differs from generic cosmetic offerings—with honest, holistic planning.",
  },
  treatment: {
    title: "Treatment",
    teaser:
      "Explore how we approach safety, candidacy, recovery, and value in treatment—pros and cons are discussed in depth so you know what to expect before you decide.",
  },
  admin: {
    title: "Admin",
    teaser:
      "Everything practical: how to book and reach us, where consultations and procedures take place, and how bespoke plans and pricing are handled with discretion.",
  },
};
