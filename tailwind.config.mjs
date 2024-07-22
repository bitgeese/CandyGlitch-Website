module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        fontFamily: {
          display: ['Obviously', 'sans-serif'],
          handwritten: ['Skribblugh', 'cursive'],
          degular: ['Degular Text', 'sans-serif'],
          mono: ["Degular Mono", "sans-mono"]

        },
        fontWeight: {
            thin: 100,
            light: 300,
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            black: 900,
            super: 950,
          },
      },
    },
    plugins: [],
  }