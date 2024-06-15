'use client'
import StyledComponentsRegistry from '@/lib/registry'
import isPropValid from '@emotion/is-prop-valid'
import { ReactNode } from 'react'
import { StyleSheetManager } from 'styled-components'
import { GlobalStyles } from '../style/GlobalStyles'
import { Theme } from '../style/Theme'


interface DefaultProviderProps {
  children: ReactNode
}

export function DefaultProvider({ children }: DefaultProviderProps) {
  return (
          <StyledComponentsRegistry>
            <Theme>
            <StyleSheetManager shouldForwardProp={isPropValid}>
              <GlobalStyles />
              {children}
           </StyleSheetManager>
            </Theme>
          </StyledComponentsRegistry>
  )
}
