import React from 'react';
import { Input, Heading, Button, Flex } from '@chakra-ui/core';

const Layout = props => {
  return (
    <>
      <Flex align="center">
        <Heading textShadow="md" my={3} as="h3" size="lg">
          {props.header}
        </Heading>
        <Button
          variantColor="red"
          size="sm"
          ml="auto"
          disabled={!props.firstName && !props.lastName}
          onClick={() => {
            props.setFirstName('');
            props.setLastName('');
          }}>
          Reset
        </Button>
      </Flex>
      <Heading my={2} as="h4" size="lg">
        {props.firstName} {props.lastName}
      </Heading>
      <Input
        my={2}
        placeholder={`${props.header} first name`}
        size="lg"
        value={props.firstName}
        onChange={e => props.setFirstName(e.target.value)}
      />
      <Input
        my={2}
        placeholder={`${props.header} last name`}
        size="lg"
        value={props.lastName}
        onChange={e => props.setLastName(e.target.value)}
      />
    </>
  );
};

export default Layout;
