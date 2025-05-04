import { Bebas_Neue, EB_Garamond } from "next/font/google";

export const bebas = Bebas_Neue({
    subsets: ['latin'],
    variable: '--font-accent',
    weight: '400',
    display: 'swap',
  });
  
export const garamond = EB_Garamond({
    subsets: ['latin'],
    variable: '--font-serif',
    weight: '400',
    display: 'swap',
});