import React from 'react';
import { theme, ThemeProvider, ColorModeProvider } from '@chakra-ui/core';

const ColorMode = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ThemeProvider>
  );
};

export default ColorMode;
