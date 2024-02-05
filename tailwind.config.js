/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: {
          default: '#336',
          darkMode: '#223'
        },
        gray: {
          default: '#eee',
          10: '#ddd',
          darkMode: '#445'
        },
        white: {
          default: '#f7f7f7',
          darkMode: '#556'
        },
        solidGray: {
          default: '#222',
          darkMode: '#334'
        },
        normal: {
          default: '#9099a1'
        },
        fighting: {
          default: '#ce4069'
        },
        flying: {
          default: '#92aade'
        },
        poison: {
          default: '#ab6ac8'
        },
        ground: {
          default: '#d97746'
        },
        rock: {
          default: '#c7b78b'
        },
        bug: {
          default: '#90c12c'
        },
        ghost: {
          default: '#5269ac'
        },
        steel: {
          default: '#5a8ea1'
        },
        fire: {
          default: '#ff9c54'
        },
        water: {
          default: '#4d90d5'
        },
        grass: {
          default: '#63bb5b'
        },
        electric: {
          default: '#f3d23b'
        },
        psychic: {
          default: '#f97176'
        },
        ice: {
          default: '#74cec0'
        },
        dragon: {
          default: '#096dc4'
        },
        dark: {
          default: '#5a5366'
        },
        fairy: {
          default: '#ec8fe6'
        }
      },
      fontFamily: {
        nunino: ['Nunino', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif']
      },
      backgroundImage: {
        pokemonBackground: "url('/src/assets/IMG/Background.jpg')"
      }
    }
  },
  plugins: []
}
