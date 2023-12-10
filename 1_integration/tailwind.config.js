/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('src/img/bg_space.png')",
      }
    },
  },
  plugins: [],
}

