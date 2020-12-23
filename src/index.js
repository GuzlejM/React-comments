import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

// TODO 
    // Refactor separate to components,
    // Import faker databases
    // Make it mobile friendly, that means to change it to "faceboo post format"
        
const App = () => {
  return (      
      <div className="flex sm:flex-wrap flex-col md:flex-wrap md:flex-row w-full md:h-screen items-center justify-around">
        <Card/>
        <Card/>
        <Card/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));