import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brand: '#524f4f',
        architecture: 'rgb(199 210 254)',
        commercialInteriors: '#bef264',
        branding: '#bef26499',
        akres: '#bef26499',
        'brand-light-gray': '#e6e6e6',
        'brand-gray': '#524f4f',
        'brand-peach': '#f5e5de',
        'brand-brown': '#b0a69c',
      },
      fontFamily: {
        'brand-book': 'Gotham Book',
        'brand-bold': 'Gotham Bold',
        'brand-medium': 'Gotham Medium',
        'brand-serif': 'calluna',
      },
    },
  },
  plugins: [forms],
} satisfies Config;
