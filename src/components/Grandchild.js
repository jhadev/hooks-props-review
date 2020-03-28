import React, { useState, useEffect } from 'react';
import InputFields from './InputFields';

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
      {props.childLastName && (
        <InputFields
          header="Grandchild"
          firstName={grandChildFirstName}
          lastName={grandChildLastName}
          setFirstName={setGrandChildFirstName}
          setLastName={setGrandChildLastName}
        />
      )}
    </div>
  );
};

export default Grandchild;
