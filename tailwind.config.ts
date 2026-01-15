import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        headline: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        code: ['monospace'],
      },
      fontSize: {
        'hero-xl': ['64px', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'hero-l': ['56px', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'hero-m': ['48px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h1': ['40px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h2': ['32px', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'h3': ['24px', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'h4': ['20px', { lineHeight: '1.3', letterSpacing: 'normal' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body-base': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.55' }],
        'caption': ['13px', { lineHeight: '1.4' }],
        'button-text': ['14px', { lineHeight: '1' }],
        'nav-links': ['14px', { lineHeight: '1' }],
        'label': ['12px', { lineHeight: '1.2', letterSpacing: '0.08em' }],
        
        // Mobile sizes
        'm-hero-xl': ['40px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'm-hero-l': ['36px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'm-hero-m': ['32px', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'm-h1': ['30px', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'm-h2': ['26px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'm-h3': ['22px', { lineHeight: '1.25', letterSpacing: 'normal' }],
        'm-h4': ['18px', { lineHeight: '1.3', letterSpacing: 'normal' }],
        'm-body-base': ['15px', { lineHeight: '1.6' }],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: '20px',
      },
      boxShadow: {
        subtle: '0 10px 30px rgba(0,0,0,0.04)',
      },
      maxWidth: {
        'page': '1240px',
        'readable': '720px',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
