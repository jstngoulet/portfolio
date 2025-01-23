import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          /*
          light: colors.blue['300'], // Hyperlink color
          lighter: colors.blue['200'],
          dark: colors.indigo['600'],
          'lighter-dark': colors.indigo['500']
          */
         light: colors.red['400'],
         lighter: colors.red['300'],
         dark: colors.red['700'],
         'lighter-dark': colors.red['600']
        },
        muted: {
          DEFAULT: colors.slate['300'],
          dark: colors.slate['700']
        }
      },
      spacing: {
        18: '4.5rem'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        xl: '3rem'
      }
    },
    screens: {
      ...defaultTheme.screens,
      xs: '480px'
    }
  },
  plugins: []
} satisfies Config
