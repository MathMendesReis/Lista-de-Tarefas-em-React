import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview } from "@storybook/react";
import { theme } from '../src/components/style/Theme';
import { GlobalStyle } from '../src/components/style/global';

import { ThemeProvider } from 'styled-components';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [withThemeFromJSXProvider({
    themes: {
      light: theme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle // Corrected
  })]
};

export default preview;