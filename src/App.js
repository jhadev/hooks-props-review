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
      <ToggleColorMode />
      <Flex my={5} flexDirection="row" justify="center">
        <Stack width="40%" spacing={2} mr={4}>
          <Heading
            color="cyan.500"
            mb={2}
            as="h1"
            textAlign="center"
            fontSize={60}>
            Hooks and Props
          </Heading>
          <Info />
        </Stack>
        <Stack width="20%" spacing={2}>
          <Parent />
        </Stack>
      </Flex>
    </ColorMode>
  );
};

export default App;
