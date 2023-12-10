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
      }

    },
  },
  plugins: [],
}

