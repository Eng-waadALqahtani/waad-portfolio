/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        athar: {
          bg: '#0F1115',
          sand: '#C9A66B',
          olive: '#8F8A59',
          highlight: '#3FE0C5',
          text: '#F8F8F8',
        },
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui'],
        cairo: ['Cairo', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'sand-olive-gradient': 'linear-gradient(135deg, #C9A66B 0%, #8F8A59 100%)',
      },
    },
  },
  plugins: [],
}


