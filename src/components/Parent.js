import React, { useState } from 'react';
import InputFields from './InputFields';
import Child from './Child';

const Parent = props => {
  const [parentFirstName, setParentFirstName] = useState('');
  const [parentLastName, setParentLastName] = useState('');

  return (
    <div>
      <InputFields
        header="Parent"
        firstName={parentFirstName}
        lastName={parentLastName}
        setFirstName={setParentFirstName}
        setLastName={setParentLastName}
      />
      <Child
        parentLastName={parentLastName}
        setParentLastName={setParentLastName}
      />
    </div>
  );
};

export default Parent;
