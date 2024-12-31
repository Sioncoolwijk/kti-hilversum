/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#ffffff",
      red: {
        DEFAULT: '#E13A36',
        50: '#FDF2F2',
        100: '#FDE8E8',
        200: '#FBD5D5',
        300: '#F8B4B4',
        400: '#F98080',
        500: '#F05252',
        600: '#E02424',
        700: '#C81E1E',
        800: '#9B1C1C',
        900: '#771D1D'
      },
      blue: {
        DEFAULT: '#1fb6ff',
        50: '#EBF8FF',
        100: '#E1F0FF',
        200: '#C3DAFE',
        300: '#A4CAFE',
        400: '#76A9FA',
        500: '#3F83F8',
        600: '#1C64F2',
        700: '#1A56DB',
        800: '#1E429F',
        900: '#233876'
      },
      purple: {
        DEFAULT: '#7e5bef',
        50: '#F5F3FF',
        100: '#EDE9FE',
        200: '#DDD6FE',
        300: '#C4B5FD',
        400: '#A78BFA',
        500: '#8B5CF6',
        600: '#7C3AED',
        700: '#6D28D9',
        800: '#5B21B6',
        900: '#4C1D95'
      },
      pink: {
        DEFAULT: '#ff49db',
        50: '#FDF2F8',
        100: '#FCE7F3',
        200: '#FBCFE8',
        300: '#F9A8D4',
        400: '#F472B6',
        500: '#EC4899',
        600: '#DB2777',
        700: '#BE185D',
        800: '#9D174D',
        900: '#831843'
      },
      orange: {
        DEFAULT: '#ff7849',
        50: '#FFF7ED',
        100: '#FFEDD5',
        200: '#FED7AA',
        300: '#FDBA74',
        400: '#FB923C',
        500: '#F97316',
        600: '#EA580C',
        700: '#C2410C',
        800: '#9A3412',
        900: '#7C2D12'
      },
      green: {
        DEFAULT: '#13ce66',
        50: '#F0FDF4',
        100: '#DCFCE7',
        200: '#BBF7D0',
        300: '#86EFAC',
        400: '#4ADE80',
        500: '#22C55E',
        600: '#16A34A',
        700: '#15803D',
        800: '#166534',
        900: '#14532D'
      },
      yellow: {
        DEFAULT: '#ffc82c',
        50: '#FEFCE8',
        100: '#FEF9C3',
        200: '#FEF08A',
        300: '#FDE047',
        400: '#FACC15',
        500: '#EAB308',
        600: '#CA8A04',
        700: '#A16207',
        800: '#854D0E',
        900: '#713F12'
      },
      gray: {
        DEFAULT: '#8492a6',
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827'
      }
    },
    fontFamily: {
      sans: ["Poppins", ...fontFamily.sans],
      serif: ["Montserrat", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out forwards',
      },
    },
  },
  plugins: [],
};
