import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexShrink:{
        2: '2',
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
        "custom-point-1": {"max" : "766px"},
        "custom-point-2": {"max" : "620px"},
      },
      gap: {
        5: "5rem",
        4: "4rem",
        3: "3rem",
        2: "2rem",
        1: "1rem",
        0: "0rem"
      },
      padding: {
        "5px": "5px",
        "10px": "7px",
        "8px": "8px",
        "16px": "16px",
        5: "5%",
      },
      margin: {
        0: "0%",
        .5:".5%",
        1: "1%",
        3: "3%",
        5: "5%",
        8: "8%",
        10: "10%",
        12.5: "12.5%",
        15: "15%",
        20: "20%",
        25: "25%",
        30: "30%",
        40: "40%",
        50: "50%"
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "portfolio-theme": {
          // this is a theme from nextUI with my own spin on the custom colors
          colors: {
            background: "#0019d6",
            foreground: "#ffffff",
            Blue: {
              50: "#8997ff",
              100: "#6678ff",
              200: "#4259ff",
              300: "#1e39ff",
              400: "#001ef9",
              500: "#0019d6",
              600: "#0015b2",
              700: "#00118e",
              800: "#000c6b",
              900: "#000847",
              DEFAULT: "#0019d6",
              foreground: "#ffffff",
            },
            Gray:{
              50: "#c4c4c4",
              100: "#b2b2b2",
              200: "#a0a0a0",
              300: "#8e8e8e",
              400: "#7c7c7c",
              500: "#6b6b6b",
              600: "#595959",
              700: "#474747",
              800: "#353535",
              900: "#232323",
            },
            Yellow:{
              50: "#ffe889",
              100: "#ffe166",
              200: "#ffda42",
              300: "#ffd31e",
              400: "#f9c800",
              500: "#d6ac00",
              600: "#b28f00",
              700: "#8e7200",
              800: "#6b5600",
              900: "#473900",
            },
            Black: {
              50: "#000000"
            },
            focus: "#d6ac00",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              none: "0",
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
