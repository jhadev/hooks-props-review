import React from 'react';
import { Stack, Box, Text } from '@chakra-ui/core';
// import our array of info props from info.js
import info from '../utils/info';

const Info = () => {
  return (
    <Box
      opacity={50}
      maxW="100%"
      p={6}
      borderWidth="1px"
      rounded="lg"
      mt={2}
      overflow="hidden">
      <Stack spacing={4}>
        {/* map over info array, destructure text bc we don't need that as a direct prop bc it will be a child of the Text component
        
        ...props will have everything in that object other than text so we can pass all those keys/values (fontSize, fontWeight, etc. to the Text component without explicity writing them.)
        */}
        {info.map(({ text, ...props }, index) => (
          <Text key={index} {...props}>
            {text}
          </Text>
        ))}
      </Stack>
    </Box>
  );
};

export default Info;
