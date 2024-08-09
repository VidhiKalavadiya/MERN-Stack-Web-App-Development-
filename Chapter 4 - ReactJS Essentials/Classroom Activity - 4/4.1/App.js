import React from 'react';
// Parent component
function App() {
    const printNote = (content) => {
      console.log(content);
    };
  
    return (
      <Note
        id="1"
        title="This is the title"
        content="Blog about props"
        onClickNote={printNote}
      />
    );
  }
  
  // Child component
  function Note(props) {
    return (
      <div>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={() => props.onClickNote(props.content)}>
          Print Note
        </button>
      </div>
    );
  }
  
  

export default App;
