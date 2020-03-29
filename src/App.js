import React from 'react';
import { CSSReset, Stack, Heading, Flex, Box } from '@chakra-ui/core';
import ColorMode from './components/ColorMode';
import ToggleColorMode from './components/ToggleColorMode';
import Info from './components/Info';
import ModalComp from './components/ModalComp';
import Parent from './components/Parent';

const App = () => {
  return (
    <ColorMode>
      <CSSReset />
      <Flex>
        <ToggleColorMode />
        <ModalComp openButtonText="Show Info" header="Info">
          <Info />
        </ModalComp>
      </Flex>
      <Box px={10} py={2}>
        <Flex justify="center">
          <Stack width={['100%', 0.8, 0.3]} spacing={3}>
            <Heading
              color="cyan.500"
              mb={2}
              as="h1"
              textAlign="center"
              fontSize={[32, 48, 60]}>
              Hooks & Props
            </Heading>
            <Parent />
          </Stack>
        </Flex>
      </Box>
    </ColorMode>
  );
};

export default App;
