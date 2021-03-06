import React from 'react';
import { Button, Icon, useColorMode } from '@chakra-ui/core';

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button size="sm" m={3} onClick={toggleColorMode}>
        {colorMode === 'light' ? <Icon name="moon" /> : <Icon name="sun" />}
      </Button>
    </header>
  );
};

export default ToggleColorMode;
