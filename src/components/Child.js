import React, { useState, useEffect } from 'react';
import InputFields from './InputFields';
import Grandchild from './Grandchild';

const Child = props => {
  // Child has a first name and last name as state values
  const [childFirstName, setChildFirstName] = useState('');
  const [childLastName, setChildLastName] = useState('');

  // if a child has a first name set the last name in state to the parent's last name
  // this effect will only run when those values change because we declared them in the dependency array
  useEffect(() => {
    if (childFirstName) {
      setChildLastName(props.parentLastName);
    }
  }, [childFirstName, props.parentLastName]);

  // only render this component on the page if props.parentLastName does not equal an empty string
  return (
    <>
      <InputFields
        header="Child"
        firstName={childFirstName}
        lastName={childLastName}
        setFirstName={setChildFirstName}
        setLastName={setChildLastName}
      />
      {childLastName && <Grandchild childLastName={childLastName} />}
    </>
  );
};

export default Child;
