import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius?: string

    colors: {
      purpleLigth: string
      purpleBase: string
      purpleDark: string
      greenLigth: string
      greenDark: string
      greenBase: string
      gray100: string
      gray200: string
      gray330: string
      gray400: string
      gray500: string
      gray600: string
      danger: string
    
    }
    fontFamily: {
      heading: string
      sans: string
      mono: string
      Inter: string
    }
    fontSize: {
      xs: string
      sm: string
      md: string
      base: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      '4xl': string
      '5xl': string
    }
  }
}