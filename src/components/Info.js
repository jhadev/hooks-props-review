import React from 'react';
import { Stack, Box, Text } from '@chakra-ui/core';

const Info = () => {
  return (
    <Box
      opacity={50}
      maxW="100%"
      p={6}
      borderWidth="1px"
      rounded="lg"
      mt={2}
      mr={5}
      overflow="hidden">
      <Stack spacing={12}>
        <Text variantColor="cyan" fontWeight="bold" fontSize="4xl">
          This shows the flow of props and state from parent to child to
          grandchild.
        </Text>
        <Text fontWeight="bold" as="i" fontSize="2xl">
          If the parent's last name changes, it will be reflected in both the
          child and the grandchild.
        </Text>
        <Text fontWeight="bold" as="i" fontSize="2xl">
          If the child's last name changes it will be reflected in the
          grandchild but will not change the parent's last name.
        </Text>
        <Text fontWeight="bold" as="i" fontSize="2xl">
          If the grandchild's last name changes it will not change the child or
          the parent's last name.
        </Text>
      </Stack>
    </Box>
  );
};

export default Info;
