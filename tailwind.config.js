/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1220',
          800: '#111A2C',
          700: '#182238',
          600: '#232F49',
        },
        paper: '#F6F7FA',
        signal: {
          DEFAULT: '#14B8A6',
          light: '#5EEAD4',
          dark: '#0D9488',
        },
        flag: {
          DEFAULT: '#FB7185',
          dark: '#E11D48',
        },
        slate: {
          925: '#0B1220',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px 0 rgba(11,18,32,0.04), 0 1px 3px 0 rgba(11,18,32,0.06)',
      },
    },
  },
  plugins: [],
}
