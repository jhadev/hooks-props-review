import React from 'react';
import { CSSReset, Stack, Heading, Flex, Box, Text } from '@chakra-ui/core';
import ColorMode from './components/ColorMode';
import ToggleColorMode from './components/ToggleColorMode';
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
          <Box
            opacity={50}
            maxW="sm"
            p={3}
            borderWidth="1px"
            rounded="lg"
            overflow="hidden">
            <Stack spacing={6}>
              <Text fontWeight="bold" fontSize="xl">
                This shows the flow of props and state from parent to child to
                grandchild.
              </Text>
              <Text as="i" fontSize="md">
                If the parent's last name changes, it will be reflected in both
                the child and the grandchild.
              </Text>
              <Text as="i" fontSize="md">
                If the child's last name changes it will be reflected in the
                grandchild but will not change the parent's last name.
              </Text>
              <Text as="i" fontSize="md">
                If the grandchild's last name changes it will not change the
                child or the parent's last name.
              </Text>
            </Stack>
          </Box>
        </Stack>
        <Stack spacing={2}>
          <Parent />
        </Stack>
      </Flex>
    </ColorMode>
  );
};

export default App;
