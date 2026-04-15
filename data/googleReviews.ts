export interface GoogleReviewItem {
  id: number;
  name: string;
  initial: string;
  rating: number;
  review: string;
}

export const googleReviews: GoogleReviewItem[] = [
  {
    id: 1,
    name: "Ahmed Mohamed",
    initial: "A",
    rating: 5,
    review:
      "My name is Zamaan Ahmed. I've consulted with Dr. Shubhra Goel regarding watering eye which causes infection and tearing of eyes. The doctor was not requiring for surgery. Dr. Shubhra Did our DCR surgery, curing the infection and...",
  },
  {
    id: 2,
    name: "Farida Farida",
    initial: "F",
    rating: 5,
    review:
      "Very good and supportive. She was like an angel for me! I am very thankful to her the way she have done my DCR operation. The results are amazing. Specially thankful to Dr Shilpa Goel and Dr Nitin Goel too who suggested me to...",
  },
  {
    id: 3,
    name: "Hamma Ahmed",
    initial: "H",
    rating: 5,
    review:
      "I'm Abdullaha Ahmed met Dr Shubhra for my eyelid comfort and appearance concerns. She did careful planning at Clinica Fai, Hyderabad and I got excellent results thanks to Dr Shubhra Goel...",
  },
  {
    id: 4,
    name: "Priya Sharma",
    initial: "P",
    rating: 5,
    review:
      "Excellent experience with Dr. Shubhra Goel. Her expertise in oculofacial surgery is remarkable. The results exceeded my expectations and the care throughout the process was outstanding.",
  },
  {
    id: 5,
    name: "Rajesh Kumar",
    initial: "R",
    rating: 5,
    review:
      "Dr. Shubhra Goel is an exceptional surgeon. Her professionalism and skill are unmatched. The clinic staff is also very supportive. Highly recommend for oculofacial and periocular care.",
  },
  {
    id: 6,
    name: "Sneha Reddy",
    initial: "S",
    rating: 5,
    review:
      "Amazing results from my Sleepy or Droopy Eyelid (Ptosis Surgery) care. Dr. Shubhra explained everything clearly and made me feel comfortable throughout. The recovery was smooth and results are perfect.",
  },
];

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Clinica+Fai+Hyderabad#lrd=0x3bcb953eee6a5d7b:0x93e1aaed7dfb3323,3,,,,";
