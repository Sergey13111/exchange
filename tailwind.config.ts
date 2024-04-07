import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        'bg-hero': "url('/images/bg_hero.jpg')",
      },

      fontFamily: {
        workSans: ['var(--font-work-sans)'],
        robotoRegular: ['var(--font-roboto-regular)'],
        robotoMedium: ['var(--font-roboto-medium)'],
        robotoBold: ['var(--font-roboto-bold)'],
      },
      lineHeight: {
        normal: 'normal',
      },
      colors: {
        primary: '#1F1E25',
        secondary: '#707C87',
        light: '#F6F7FF',
        blue: '#2C36F2',
        grey: '#E0E1EA',
        hover: '#aacbed',
      },
      container: {
        padding: '10px',
        center: true,
        screens: {
          xl: '1200px',
        },
      },
      maxWidth: {
        '868': '54.25rem',
      },
    },
  },
  plugins: [],
};
export default config;
