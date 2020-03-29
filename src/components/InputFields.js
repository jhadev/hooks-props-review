import React, { useState } from 'react';
import {
  Input,
  InputGroup,
  Heading,
  Button,
  Flex,
  InputRightElement
} from '@chakra-ui/core';

const InputFields = props => {
  const [animationDirection, setAnimationDirection] = useState('in');

  const handleReset = () => {
    props.setFirstName('');
    props.setLastName('');
    // don't want the Parent component input fields to disappear on reset
    if (props.header !== 'Parent') {
      setAnimationDirection('out');
    }
  };

  return (
    <div
      className={
        animationDirection === 'in' ? 'scale-in-center' : 'scale-out-center'
      }>
      <Flex align="center">
        <Heading textAlign="center" mr={4} my={2} as="h3" size="xl">
          {props.header}
        </Heading>
        {/* if there is both a firstName and lastName prop and they are truthy (!== '') render a reset button */}
        {props.firstName && props.lastName && (
          <Button variantColor="red" size="sm" ml="auto" onClick={handleReset}>
            Reset
          </Button>
        )}
      </Flex>
      <Heading color="cyan.500" my={[1, 3, 5]} as="h4" size="lg">
        {props.firstName} {props.lastName}
      </Heading>
      {/* input fields value are dependent on props passed in. along with the update function for each */}
      <InputGroup size="md">
        <Input
          my={3}
          placeholder={`${props.header} first name`}
          size="lg"
          value={props.firstName}
          onChange={e => props.setFirstName(e.target.value)}
        />
      </InputGroup>
      <InputGroup size="md">
        <Input
          my={3}
          placeholder={`${props.header} last name`}
          size="lg"
          value={props.lastName}
          onChange={e => props.setLastName(e.target.value)}
        />
        {props.lastName && (
          <InputRightElement mt={3} width="3rem">
            <Button h="1.75rem" size="sm" onClick={() => props.setLastName('')}>
              X
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
    </div>
  );
};

export default InputFields;
