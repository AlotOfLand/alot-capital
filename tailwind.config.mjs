/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#3b55a3',
        'gold': '#F5B800',
        'bg-dark': '#0A1628',
        'surface': '#0F2040',
        'border-dark': '#1a3060',
        'text-muted': '#94a3b8',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gold-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(245, 184, 0, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(245, 184, 0, 0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'gold-pulse': 'gold-pulse 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
