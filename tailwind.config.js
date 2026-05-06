/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5',
          subtle: 'rgba(99, 102, 241, 0.08)',
          muted: 'rgba(99, 102, 241, 0.15)',
        },
        surface: {
          DEFAULT: '#0a0a0f',
          raised: '#111118',
          overlay: '#16161f',
          border: '#1e1e2a',
        },
        'light-surface': {
          DEFAULT: '#F8FAFC',
          raised: '#FFFFFF',
          overlay: '#F1F5F9',
          border: '#E2E8F0',
        },
      },
      boxShadow: {
        'inner-soft': 'inset 0 1px 2px rgba(0, 0, 0, 0.3)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.03)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(99, 102, 241, 0.15)',
        'light-card': '0 1px 3px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04)',
        'light-card-hover': '0 4px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(99, 102, 241, 0.15)',
      },
      animation: {
        'scan-line': 'scanLine 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-up-delay': 'fadeInUp 0.8s ease-out 0.2s forwards',
        'fade-in-up-delay2': 'fadeInUp 0.8s ease-out 0.4s forwards',
        'dot-pulse': 'dotPulse 2s ease-in-out infinite',
        'pulse': 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        dotPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.4)', opacity: '1' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)`,
        'grid-pattern-light': `linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
    },
  },
  plugins: [],
};
