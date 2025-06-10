module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600 - Deep blue for trust and professionalism
          700: "#1D4ED8", // blue-700
          DEFAULT: "#2563EB", // blue-600
        },
        secondary: {
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500 - Sophisticated slate gray
          600: "#475569", // slate-600
          DEFAULT: "#64748B", // slate-500
        },
        accent: {
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500 - Success-oriented emerald
          600: "#059669", // emerald-600
          DEFAULT: "#10B981", // emerald-500
        },
        background: "#FAFAFA", // gray-50 - Warm off-white
        surface: "#FFFFFF", // white - Pure white for content cards
        text: {
          primary: "#1E293B", // slate-800 - Rich charcoal
          secondary: "#64748B", // slate-500 - Medium gray
          tertiary: "#94A3B8", // slate-400
        },
        success: {
          DEFAULT: "#059669", // emerald-600 - Deeper emerald for success states
          light: "#D1FAE5", // emerald-100
        },
        warning: {
          DEFAULT: "#D97706", // amber-600 - Warm amber for caution
          light: "#FEF3C7", // amber-100
        },
        error: {
          DEFAULT: "#DC2626", // red-600 - Clear red for error states
          light: "#FEE2E2", // red-100
        },
        border: "#E2E8F0", // slate-200
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '80px',
      },
      borderRadius: {
        'sm': '0.25rem',
        DEFAULT: '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'lg': '0 10px 25px rgba(0, 0, 0, 0.1)',
        'focus': '0 0 0 3px rgba(37, 99, 235, 0.1)',
      },
      animation: {
        'pulse-gentle': 'pulse-gentle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in': 'slide-in 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scale-in 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        'loading': 'loading 1.5s infinite',
      },
      keyframes: {
        'pulse-gentle': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.8',
          },
        },
        'slide-in': {
          'from': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'scale-in': {
          'from': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'loading': {
          '0%': {
            'background-position': '-200% 0',
          },
          '100%': {
            'background-position': '200% 0',
          },
        },
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
      },
      transitionTimingFunction: {
        'ease-out-custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      minHeight: {
        'touch': '44px', // Minimum touch target size
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.hover-scale': {
          transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
        '.skeleton': {
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          'background-size': '200% 100%',
          animation: 'loading 1.5s infinite',
        },
        '.touch-target': {
          'min-height': '44px',
          'min-width': '44px',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}