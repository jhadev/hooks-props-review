import React, { useState, useEffect } from 'react';
import Layout from './Layout';
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
      <Layout
        header="Child"
        firstName={childFirstName}
        lastName={childLastName}
        setFirstName={setChildFirstName}
        setLastName={setChildLastName}
      />
      <Grandchild
        childLastName={childLastName}
        setChildLastName={setChildLastName}
      />
    </div>
  );
};

export default Child;
