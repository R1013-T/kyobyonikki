/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'brand-1': '#69E0B3',
        'brand-2': '#C8D5BB',
        'brand-3': '#47585C',
        'black-1': '#2C2C2C',
        'black-2': '#495057',
        'white-1': '#FAFAFA',
        'white-2': '#F7F7F9',
        'white-3': '#EDEDED',
        background: '#F8FAFC',
      },
      height: {
        dvh: '100dvh',
      },
      borderColor: {
        'border-1': '#EDEDED',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
