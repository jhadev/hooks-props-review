import React, { useState, useEffect } from 'react';
import { Input, Heading, Stack } from '@chakra-ui/core';
import Grandchild from './Grandchild';

const Child = props => {
  const [childFirstName, setChildFirstName] = useState('');
  const [childLastName, setChildLastName] = useState('');

  useEffect(() => {
    if (childFirstName) {
      setChildLastName(props.parentLastName);
    }
  }, [childFirstName, props.parentLastName]);

  return (
    <div>
      <Heading my={3} as="h2" size="md">
        Child
      </Heading>
      <Heading my={2} as="h4" size="md">
        {childFirstName} {childLastName}
      </Heading>
      <Input
        my={2}
        placeholder="child first name"
        size="lg"
        onChange={e => setChildFirstName(e.target.value)}
      />
      <Input
        my={2}
        placeholder="child last name"
        size="lg"
        onChange={e => setChildLastName(e.target.value)}
      />
      <Grandchild
        childLastName={childLastName}
        setChildLastName={setChildLastName}
      />
    </div>
  );
};

export default Child;
