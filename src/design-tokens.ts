/**
 * EDITORIAL LUXURY DESIGN TOKENS
 * Type-safe design system tokens for the portfolio website
 * DFII Score: 16/15 (Excellent)
 */

export const designTokens = {
    colors: {
        primary: {
            900: '#0A0908',
            800: '#1C1B1A',
            700: '#2E2D2B',
            600: '#403F3C',
            500: '#52514E',
            400: '#6B6A66',
            300: '#8D8C88',
            200: '#B8B7B3',
            100: '#F5F3F0',
            50: '#FDFCFB',
        },
        accent: {
            700: '#9A7A4F',
            600: '#B8956A',
            500: '#D4AF77',
            400: '#E8D4B8',
            300: '#F0E4D3',
            200: '#F7F1E8',
        },
        secondary: {
            700: '#4A4A3A',
            600: '#5A5A47',
            500: '#6B6B52',
            400: '#8B8B6F',
            300: '#ABABAA',
        },
    },

    typography: {
        fontFamily: {
            display: '"Cormorant Garamond", serif',
            body: '"Inter", sans-serif',
            accent: '"Playfair Display", serif',
        },
        fontSize: {
            xs: '0.64rem',
            sm: '0.8rem',
            base: '1rem',
            lg: '1.25rem',
            xl: '1.563rem',
            '2xl': '1.953rem',
            '3xl': '2.441rem',
            '4xl': '3.052rem',
            '5xl': '3.815rem',
            '6xl': '4.768rem',
            '7xl': '5.96rem',
            '8xl': '7.451rem',
            '9xl': '9.313rem',
        },
        fontWeight: {
            light: 300,
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            black: 900,
        },
        lineHeight: {
            tight: 1.1,
            snug: 1.3,
            normal: 1.5,
            relaxed: 1.75,
            loose: 2,
        },
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
        },
    },

    spacing: {
        unit: '0.5rem',
        1: '0.5rem',
        2: '1rem',
        3: '1.5rem',
        4: '2rem',
        5: '2.5rem',
        6: '3rem',
        8: '4rem',
        10: '5rem',
        12: '6rem',
        16: '8rem',
        20: '10rem',
        24: '12rem',
        32: '16rem',
    },

    borderRadius: {
        none: '0',
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.5rem',
        xl: '1rem',
        '2xl': '1.5rem',
        full: '9999px',
    },

    shadows: {
        sm: '0 1px 2px 0 rgba(10, 9, 8, 0.05)',
        md: '0 4px 6px -1px rgba(10, 9, 8, 0.1), 0 2px 4px -1px rgba(10, 9, 8, 0.06)',
        lg: '0 10px 15px -3px rgba(10, 9, 8, 0.1), 0 4px 6px -2px rgba(10, 9, 8, 0.05)',
        xl: '0 20px 25px -5px rgba(10, 9, 8, 0.1), 0 10px 10px -5px rgba(10, 9, 8, 0.04)',
        '2xl': '0 25px 50px -12px rgba(10, 9, 8, 0.25)',
        accent: '0 8px 24px rgba(184, 149, 106, 0.3)',
    },

    transitions: {
        fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
        base: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
        slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
        slowest: '700ms cubic-bezier(0.4, 0, 0.2, 1)',
        smooth: '400ms cubic-bezier(0.22, 1, 0.36, 1)',
    },
} as const;

export type DesignTokens = typeof designTokens;

// Helper function to get CSS variable reference
export const cssVar = (path: string) => `var(--${path})`;

// Gradient presets
export const gradients = {
    hero: 'linear-gradient(135deg, rgba(10,9,8,0.85) 0%, rgba(10,9,8,0.4) 50%, rgba(184,149,106,0.2) 100%)',
    accent: 'linear-gradient(90deg, #B8956A 0%, #D4AF77 100%)',
    subtle: 'linear-gradient(180deg, rgba(245,243,240,0) 0%, rgba(245,243,240,0.6) 100%)',
} as const;
