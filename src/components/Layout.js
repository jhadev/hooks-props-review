import React from 'react';
import { Input, Heading, Button, Flex } from '@chakra-ui/core';

const Layout = props => {
  // const disableInput = () => {
  //   if (props.disable) {
  //     if (props.firstName === '' || props.lastName === '') {
  //       return true;
  //     }
  //     return false;
  //   }
  // };
  return (
    <>
      <Flex align="center">
        <Heading my={3} as="h2" size="md">
          {props.header}
        </Heading>
        <Button
          variantColor="red"
          size="xs"
          ml="auto"
          onClick={() => {
            props.setFirstName('');
            props.setLastName('');
          }}>
          Reset
        </Button>
      </Flex>
      <Heading my={2} as="h4" size="md">
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
