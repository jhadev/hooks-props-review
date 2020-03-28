import React from 'react';
import { Input, Heading, Button, Flex, Box } from '@chakra-ui/core';

const InputFields = props => {
  return (
    <>
      <Flex align="center">
        <Heading textAlign="center" mr={4} my={3} as="h3" size="xl">
          {props.header}
        </Heading>
        {/* if there is both a firstName and lastName prop and they are truthy (!== '') render a reset button */}
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
      <Heading color="cyan.500" my={5} as="h4" size="lg">
        {props.firstName} {props.lastName}
      </Heading>
      {/* input fields value are dependent on props passed in. along with the update function for each */}
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

export default InputFields;
