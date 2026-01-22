module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" }
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "white" }
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" }
        }
      },
      animation: {
        typing: "typing 8s steps(20) infinite alternate, blink .7s infinite",
        marquee: "marquee 10s linear infinite"
      },
      spacing: {
        '70': '17.5rem' // optional, if you plan to use it
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
