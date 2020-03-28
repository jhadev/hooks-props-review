import React, { useState, useEffect } from 'react';
import { Input, Heading, Stack } from '@chakra-ui/core';
import Child from './Child';

const Parent = props => {
  const [parentFirstName, setParentFirstName] = useState('');
  const [parentLastName, setParentLastName] = useState('');

  return (
    <div>
      <Heading my={3} as="h2" size="md">
        Parent
      </Heading>
      <Heading my={2} as="h4" size="md">
        {parentFirstName} {parentLastName}
      </Heading>
      <Input
        my={2}
        placeholder="parent first name"
        size="lg"
        onChange={e => setParentFirstName(e.target.value)}
      />
      <Input
        my={2}
        placeholder="parent last name"
        size="lg"
        onChange={e => setParentLastName(e.target.value)}
      />
      <Child
        parentLastName={parentLastName}
        setParentLastName={setParentLastName}
      />
    </div>
  );
};

export default Parent;
