import React, { Component } from 'react';  
class App extends React.Component {  
   render() {  
      return (  
         <div>  
            <First/>  
            <Second/>  
         </div>  
      );  
   }  
}  
class First extends React.Component {  
   render() {  
      return (  
         <div>  
            <h1>EDUNET FOUNDATION</h1>
         </div>  
      );  
   }  
}  
class Second extends React.Component {  
   render() {  
      return (  
         <div>  
            <h1>Edunet Foundation</h1>
            <h2>https://edunetfoundation.org/</h2>  
            <p>EMPOWERED. EQUIPPED. FUTURE-READY
            Get skilled, Get certified- Learn the best, from the best!</p>  
         </div>  
      );  
   }  
}  
export default App;  
