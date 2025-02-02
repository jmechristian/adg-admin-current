import type { Config } from 'tailwindcss';

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
        brand: '#d50057',
      },
      fontFamily: {
        'brand-book': 'Gotham Book',
        'brand-bold': 'Gotham Bold',
        'brand-serif': 'orpheuspro',
      },
    },
  },
  plugins: [],
} satisfies Config;
