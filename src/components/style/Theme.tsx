'use client'
import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = (px: number) => `${round(px / 16)}rem`;

export const theme: DefaultTheme = {
  colors: {
    purpleLigth: "#DDD2EF",
    purpleBase: '#9359F3',
    purpleDark: '#6F3CC3',
    greenLigth: '#BFE3D0',
    greenDark: '#479C6E',
    greenBase: '#2D6C4A',
    gray100: '#F0EDF2',
    gray200: '#E5E2E9',
    gray330: '#E0DCE4',
    gray400: '#D1CBD7',
    gray500: '#6B6572',
    gray600: '#262428',
    danger: '#C2464D'
  },
  
  fontFamily: {
    heading: ['IBM Plex Sans', 'sans-serif'].join(','),
    sans: ['Open Sans', 'Arial', 'Helvetica', 'sans-serif'].join(','),
    mono: ['var(--font-inter)', 'serif'].join(','),
    Inter: ['var(--font-inter)'].join(','),
    
  },
  fontSize: {
    xs: rem(10),
    sm: rem(12),
    md: rem(14),
    base: rem(16),
    lg: rem(18),
    xl: rem(20),
    '2xl': rem(24),
    '3xl': rem(32),
    '4xl': rem(40),
    '5xl': rem(64),
  },
};

interface ThemeProps {
  children: ReactNode
}

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;

}


