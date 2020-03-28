import React from 'react';
import { Stack, Box, Text } from '@chakra-ui/core';

const Info = () => {
  return (
    <Box
      opacity={50}
      maxW="sm"
      p={3}
      borderWidth="1px"
      rounded="lg"
      overflow="hidden">
      <Stack spacing={6}>
        <Text fontWeight="bold" fontSize="2xl">
          This shows the flow of props and state from parent to child to
          grandchild.
        </Text>
        <Text as="i" fontSize="xl">
          If the parent's last name changes, it will be reflected in both the
          child and the grandchild.
        </Text>
        <Text as="i" fontSize="xl">
          If the child's last name changes it will be reflected in the
          grandchild but will not change the parent's last name.
        </Text>
        <Text as="i" fontSize="xl">
          If the grandchild's last name changes it will not change the child or
          the parent's last name.
        </Text>
      </Stack>
    </Box>
  );
};

export default Info;
