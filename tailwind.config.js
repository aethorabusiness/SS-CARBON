/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0A0A0A",
          surface: "#121212",
          card: "#1A1A1A",
          cardBorder: "#262626",
          green: "#8BC34A",
          greenHover: "#9ECC3B",
          greenGlow: "rgba(139, 195, 74, 0.25)",
          silver: "#C0C0C0",
          silverLight: "#E0E0E0",
          metallic: "#2A2A2A",
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'metallic-gradient': 'linear-gradient(135deg, #E0E0E0 0%, #999999 50%, #4D4D4D 100%)',
        'dark-metallic': 'linear-gradient(180deg, #1C1C1C 0%, #0A0A0A 100%)',
        'green-gradient': 'linear-gradient(135deg, #8BC34A 0%, #689F38 100%)',
        'carbon-mesh': 'radial-gradient(circle, rgba(139, 195, 74, 0.08) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 2s infinite alternate',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%': { boxShadow: '0 0 10px rgba(139, 195, 74, 0.2)' },
          '100%': { boxShadow: '0 0 25px rgba(139, 195, 74, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}

