import React, { useState, useEffect } from 'react';
import { Input, Heading, Stack } from '@chakra-ui/core';

const Grandchild = props => {
  const [grandChildFirstName, setGrandChildFirstName] = useState('');
  const [grandChildLastName, setGrandChildLastName] = useState('');

  useEffect(() => {
    if (grandChildFirstName) {
      setGrandChildLastName(props.childLastName);
    }
  }, [grandChildFirstName, props.childLastName]);

  return (
    <div>
      <Heading my={3} as="h2" size="md">
        Grandchild
      </Heading>
      <Heading my={2} as="h4" size="md">
        {grandChildFirstName} {grandChildLastName}
      </Heading>
      <Input
        my={2}
        placeholder="grandchild first name"
        size="lg"
        onChange={e => setGrandChildFirstName(e.target.value)}
      />
      <Input
        my={2}
        placeholder="grandchild last name"
        size="lg"
        onChange={e => setGrandChildLastName(e.target.value)}
      />
    </div>
  );
};

export default Grandchild;
