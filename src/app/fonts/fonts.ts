import { Bebas_Neue, Cormorant_Garamond, Alfa_Slab_One } from "next/font/google";

export const bebas = Bebas_Neue({
    subsets: ['latin'],
    variable: '--font-accent',
    weight: '400',
    display: 'swap',
  });
  
export const garamond = Cormorant_Garamond({
    subsets: ['latin'],
    variable: '--font-serif',
    weight: '400',
    display: 'swap',
});

export const slab = Alfa_Slab_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cartoon'
});