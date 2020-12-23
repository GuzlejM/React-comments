import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

// TODO 
    // Refactor separate to components,
    // Import faker databases
        
const App = () => {
  return (      
      <div className="flex sm:flex-nowrap md:flex-wrap flex-col md:flex-row items-center md:h-screen w-full justify-around">
        <CommentDetail 
          author={`${faker.name.firstName()} ${faker.name.lastName()}`}
          avatar={ faker.image.people() }
        />
        <CommentDetail 
          author={`${faker.name.firstName()} ${faker.name.lastName()}`}
          avatar={ faker.image.animals() }

        />
        <CommentDetail 
          author={`${faker.name.firstName()} ${faker.name.lastName()}`}
          avatar={ faker.image.abstract() }

        />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));