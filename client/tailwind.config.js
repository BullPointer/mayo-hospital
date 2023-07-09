/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sb: "14.7px",
      },
      fontWeight: {
        // thin: '100',
      },
      screens: {
        xxsm: '432px',
        xsm: '600px',
        sm: '640px',
        md: '768px',
        avg: '900px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

