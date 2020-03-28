import React from 'react';
import { Input, Heading, Button, Flex, Box } from '@chakra-ui/core';

const Layout = props => {
  return (
    <>
      <Flex align="center">
        <Heading textAlign="center" mr={4} my={3} as="h3" size="xl">
          {props.header}
        </Heading>
        {props.firstName && props.lastName && (
          <Button
            variantColor="red"
            size="sm"
            ml="auto"
            onClick={() => {
              props.setFirstName('');
              props.setLastName('');
            }}>
            Reset
          </Button>
        )}
      </Flex>
      <Heading my={3} as="h4" size="lg">
        {props.firstName} {props.lastName}
      </Heading>
      <Input
        my={3}
        placeholder={`${props.header} first name`}
        size="lg"
        value={props.firstName}
        onChange={e => props.setFirstName(e.target.value)}
      />
      <Input
        my={3}
        placeholder={`${props.header} last name`}
        size="lg"
        value={props.lastName}
        onChange={e => props.setLastName(e.target.value)}
      />
    </>
  );
};

export default Layout;
