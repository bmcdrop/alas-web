import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        warmwhite: "#FAF8F5",
        paper: "#FFFFFF",
        wood: {
          DEFAULT: "#C8A876",
          light: "#E4D4B8",
          dark: "#8C6A45",
        },
        coffee: {
          DEFAULT: "#4A3428",
          light: "#6F5540",
          dark: "#2E2019",
        },
        warmgray: {
          DEFAULT: "#8A8378",
          light: "#D9D4CB",
          dark: "#5C574E",
        },
        ink: "#1F1F1F",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 9vw, 8rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2.25rem, 4.2vw, 3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.75rem, 2.8vw, 2.5rem)", { lineHeight: "1.1" }],
      },
      maxWidth: {
        content: "1440px",
      },
      spacing: {
        section: "clamp(5rem, 12vw, 10rem)",
        gutter: "clamp(1.5rem, 6vw, 6rem)",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(31, 31, 31, 0.15)",
        card: "0 10px 40px -15px rgba(74, 52, 40, 0.18)",
        glass: "0 8px 32px rgba(31, 31, 31, 0.08)",
      },
      backgroundImage: {
        "beige-gradient": "linear-gradient(180deg, #FAF8F5 0%, #F3EDE3 100%)",
        "warm-radial": "radial-gradient(120% 120% at 50% 0%, #FFFDFA 0%, #F3EDE3 60%, #EAE0CE 100%)",
      },
      transitionTimingFunction: {
        "editorial": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      borderRadius: {
        xl2: "1.25rem",
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
