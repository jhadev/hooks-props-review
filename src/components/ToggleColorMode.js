import React from 'react';
import { Button, useColorMode } from '@chakra-ui/core';

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button size="xs" mr={2} onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </header>
  );
};

export default ToggleColorMode;
