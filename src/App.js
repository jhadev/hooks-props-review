import React from 'react';
import { CSSReset, Stack, Heading, Flex } from '@chakra-ui/core';
import ColorMode from './components/ColorMode';
import ToggleColorMode from './components/ToggleColorMode';
import Parent from './components/Parent';

const App = () => {
  return (
    <ColorMode>
      <CSSReset />
      <Flex justify="center">
        <Stack spacing={2}>
          <Flex align="center">
            <ToggleColorMode />
            <Heading as="h1" size="2xl">
              This is a test!
            </Heading>
          </Flex>

          <Parent />
        </Stack>
      </Flex>
    </ColorMode>
  );
};

export default App;
