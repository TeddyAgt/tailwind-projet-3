/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  // Pour forcer l'import de classes qui ne sont pas utilisées dans les fichiers html:
  safelist: ["animate-spin"],
  theme: {
    extend: {},
    container: {
      // Permet d'automatiquement centrer les éléments qui ont la classe container,
      // sans avoir besoin d'utiliser mx-auto:
      center: true,
    },
  },
  plugins: [],
};
