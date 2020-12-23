import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Card from './Card';

// TODO 
    // Refactor separate to components,
    // Import faker databases
        
const App = () => {
  return (      
      <div className="flex sm:flex-nowrap md:flex-wrap flex-col md:flex-row items-center md:h-screen w-full justify-around">
        <Card
          avatar={ faker.image.people() }
        />
        <Card
          avatar={ faker.image.animals() }

        />
        <Card
          avatar={ faker.image.abstract() }
        />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));