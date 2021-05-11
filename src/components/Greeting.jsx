import React from 'react';

function Greeting({ personName, age, favoriteColor }) {
  // argument in function signature is shorthand for...
  // const {personName = 'Noname', age, favoriteColor} = props;

  let greeting = 'Hi, what is your name';

  if (personName) {
    greeting = `Hello, ${personName}, ${age}, ${favoriteColor}`;
  }

  return <div className="bg-modern-white">{greeting}</div>;
}

Greeting.defaultProps = {
  personName: 'John Doe',
  favoriteColor: 'Orange',
  age: 55,
};

export default Greeting;
