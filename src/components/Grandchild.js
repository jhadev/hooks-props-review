import React, { useState, useEffect } from 'react';
import Layout from './Layout';

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
      <Layout
        header="Grandchild"
        firstName={grandChildFirstName}
        lastName={grandChildLastName}
        setFirstName={setGrandChildFirstName}
        setLastName={setGrandChildLastName}
      />
    </div>
  );
};

export default Grandchild;
