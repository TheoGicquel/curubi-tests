/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/img/bg_space.png')",
      },
      fontFamily: {
        bunken: ['Bunken Tech Sans Pro'],
        tech: ['TechnicalForest'],
        bunkenwide: ['BunkenWide'],
        bunkenlight: ['Bunken Tech Sans Pro Light']
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(0px, 5px)' },
          
        }
      }

    },
  },
  plugins: [],
}

