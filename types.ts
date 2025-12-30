
export type Step = 'landing' | 'checkout' | 'upsell1' | 'upsell2' | 'upsell3' | 'thankyou';

export interface UserSession {
  email: string;
  name: string;
  purchasedItems: string[];
  totalValue: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
  result: string;
}
