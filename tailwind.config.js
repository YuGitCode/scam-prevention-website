/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      backgroundImage: {
        'gray-laptop': 'url(/src/assets/pexels-picjumbocom-196659.jpg)',
        'blue-laptop': 'url(/src/assets/pexels-photoscom-93405.jpg)',
        'security-bg': 'url(src/assets/pexels-pixabay-60504.jpg)',
        'social-media':
          'url(src/assets/alexander-shatov-mr4JG4SYOF8-unsplash.jpg)',
      },
    },
  },
  plugins: [],
};
