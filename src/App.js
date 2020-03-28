import React from 'react';
import { CSSReset, Stack, Heading, Flex } from '@chakra-ui/core';
import ColorMode from './components/ColorMode';
import ToggleColorMode from './components/ToggleColorMode';
import Info from './components/Info';
import Parent from './components/Parent';

const App = () => {
  return (
    <ColorMode>
      <CSSReset />
      <Flex my={2} justify="center">
        <Stack spacing={2} mr={4}>
          <Flex align="center">
            <ToggleColorMode />
            <Heading ml={2} as="h1" size="xl">
              Hooks and Props
            </Heading>
          </Flex>
          <Info />
        </Stack>
        <Stack spacing={2}>
          <Parent />
        </Stack>
      </Flex>
    </ColorMode>
  );
};

export default App;
