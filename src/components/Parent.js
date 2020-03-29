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
      {/* only render this component on the page if parentLastName does not equal an empty string */}
      {parentLastName && <Child parentLastName={parentLastName} />}
    </div>
  );
};

export default Parent;
