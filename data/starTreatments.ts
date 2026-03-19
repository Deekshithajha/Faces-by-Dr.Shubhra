export interface StarTreatment {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  href: string;
}

export const starTreatments: StarTreatment[] = [
  {
    id: "star-1",
    name: "Bye Bye Dark Circles",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/our-star-treatments//Bye-Bye-1-ppnt7m40795wyhpnhtvfgmq6wt700fe2hw9kyys6ys.png",
    description:
      "A proprietary treatment inspired by Dr. Goel's personal journey, designed to address dark circles with a personalized multi-step plan.",
    href: "/service/our-treatment/dark-circles",
  },
  {
    id: "star-2",
    name: "No More Baggy / Puffy Eyelids",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/our-star-treatments//Baggy-puffy-pppgtkl95oth1il7lxjohltu6e1i7rozvefp5uy7gk.png",
    description:
      "A high-impact eye-area correction pathway focused on reducing puffiness and restoring a fresher, naturally rested appearance.",
    href: "/service/our-treatment/puffy-baggy-eyes",
  },
  {
    id: "star-3",
    name: "Correction of Treatments Gone Wrong",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/our-star-treatments//Correction-Of-Treatments-1-ppnt9b7ijhhjx58wl2a6gpb5iutuwr4meao55y9lqc.png",
    description:
      "Specialized corrective care for previous unsatisfactory procedures, combining aesthetic revision and emotional confidence restoration.",
    href: "/service#normal-services-grid",
  },
];
