import { Bebas_Neue, Cormorant_Garamond } from "next/font/google";

export const bebas = Bebas_Neue({
    subsets: ['latin'],
    variable: '--font-accent',
    weight: '400',
    display: 'swap',
  });
  
export const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    variable: '--font-serif',
    weight: '400',
    display: 'swap',
});