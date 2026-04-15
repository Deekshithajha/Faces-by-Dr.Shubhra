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
    name: "Bye Bye Dark Circles©️",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/our-star-treatments//Bye-Bye-1-ppnt7m40795wyhpnhtvfgmq6wt700fe2hw9kyys6ys.png",
    description:
      "A proprietary FACES protocol for under-eye darkness, planned around your anatomy, pigment pattern, and lifestyle.",
    href: "/service/our-treatment/bye-bye-dark-circles",
  },
  {
    id: "star-2",
    name: "No More Baggy Eyes©️",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/our-star-treatments//Baggy-puffy-pppgtkl95oth1il7lxjohltu6e1i7rozvefp5uy7gk.png",
    description:
      "A signature pathway for baggy or puffy eyelids, balancing crease architecture, comfort, and a naturally rested look.",
    href: "/service/our-treatment/no-more-baggy-eyes",
  },
  {
    id: "star-3",
    name: "Correction Of Treatments Gone Wrong",
    imageUrl:
      "https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/our-star-treatments//Correction-Of-Treatments-1-ppnt9b7ijhhjx58wl2a6gpb5iutuwr4meao55y9lqc.png",
    description:
      "Specialist corrective planning after unsatisfactory prior work, with candid feasibility and staged recovery guidance.",
    href: "/service/our-treatment/correction-of-treatments-gone-wrong",
  },
];
