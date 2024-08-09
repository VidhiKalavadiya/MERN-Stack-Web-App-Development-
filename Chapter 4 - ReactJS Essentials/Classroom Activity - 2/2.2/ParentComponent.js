import React from 'react'

export default function ParentComponent() {
 // Inner function to handle some logic
 const handleClick = () => {
    alert('Welcome In Parent Componet!');
  };

  return (
    <div>
      <h1>Child component click on the button</h1>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
};

const ChildComponent = ({ handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}
