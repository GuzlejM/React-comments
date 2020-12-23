import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

// TODO 
    // Refactor separate to components,
    // Import faker databases
        
const App = () => {
  return (      
      <div className="flex sm:flex-nowrap md:flex-wrap flex-col md:flex-row items-center md:h-screen w-full justify-around">
        <ApprovalCard
          avatar={ faker.image.people() }
        />
        <ApprovalCard
          avatar={ faker.image.animals() }

        />
        <ApprovalCard
          avatar={ faker.image.abstract() }
        />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));