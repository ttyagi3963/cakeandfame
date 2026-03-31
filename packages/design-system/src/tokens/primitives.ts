/**
 * LAYER 1: PRIMITIVE TOKENS (TypeScript mirror)
 *
 * Same values as primitives.css.
 * Use these when you need token values in JS/TSX logic.
 * CSS custom properties remain the runtime source of truth.
 */

export const colors = {
  black: '#000000',
  white: '#ffffff',

  zinc: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#0a0a0a',
  },

  blue: {
    50: '#e6f1fe',
    100: '#cce3fd',
    200: '#99c7fb',
    300: '#66aaf9',
    400: '#338ef7',
    500: '#006fee',
    600: '#005bc4',
    700: '#004493',
    800: '#002e62',
    900: '#001731',
  },

  purple: {
    50: '#f2eafa',
    100: '#e4d4f4',
    200: '#c9a9e9',
    300: '#ae7ede',
    400: '#9353d3',
    500: '#7828c8',
    600: '#6020a0',
    700: '#481878',
    800: '#301050',
    900: '#180828',
  },

  green: {
    50: '#e8faf0',
    100: '#d1f4e0',
    200: '#a2e9c1',
    300: '#74dfa2',
    400: '#45d483',
    500: '#17c964',
    600: '#12a150',
    700: '#0e793c',
    800: '#095028',
    900: '#052814',
  },

  pink: {
    50: '#fee7ef',
    100: '#fdd0df',
    200: '#faa0bf',
    300: '#f871a0',
    400: '#f54180',
    500: '#f31260',
    600: '#c20e4d',
    700: '#920b3a',
    800: '#610726',
    900: '#310413',
  },

  yellow: {
    50: '#fefce8',
    100: '#fdedd3',
    200: '#fbdba7',
    300: '#f9c97c',
    400: '#f7b750',
    500: '#f5a524',
    600: '#c4841d',
    700: '#936316',
    800: '#62420e',
    900: '#312107',
  },

  cyan: {
    50: '#f0fcff',
    100: '#e6fafe',
    200: '#d7f8fe',
    300: '#c3f4fd',
    400: '#a5eefd',
    500: '#7ee7fc',
    600: '#06b7db',
    700: '#09aacd',
    800: '#0e8aaa',
    900: '#053b48',
  },
} as const;

export const spacing = {
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
} as const;

export const radius = {
  none: '0',
  sm: '8px',
  md: '12px',
  lg: '14px',
  xl: '18px',
  '2xl': '24px',
  full: '9999px',
} as const;

export const fontSize = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
} as const;

export const fontFamily = {
  sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "'Fira Code', 'JetBrains Mono', 'Consolas', monospace",
} as const;

export const transition = {
  fast: '150ms ease',
  normal: '250ms ease',
  slow: '350ms ease-out',
  spring: '500ms cubic-bezier(0.16, 1, 0.3, 1)',
} as const;