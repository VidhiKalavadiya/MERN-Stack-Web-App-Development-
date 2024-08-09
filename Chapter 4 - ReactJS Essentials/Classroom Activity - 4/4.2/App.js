import React from 'react';
// Parent component
function App() {
    const user = {
      name: "Alex John",
      email: "alexjohn@edunet.com",
    };
  
    return <Note user={user} />;
  }
  
  // Child component
  function Note(props) {
    return (
      <div>
        <p>Name: {props.user.name}</p>
        <p>Email: {props.user.email}</p>
      </div>
    );
  }
  

export default App;
