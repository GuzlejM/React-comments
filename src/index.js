import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


// TODO 
    // Refactor separate to components,
    // Import faker databases

const firstName1 = faker.name.firstName()
const firstName2 = faker.name.firstName()
const firstName3 = faker.name.firstName()
        
const App = () => {
  return (      
      <div className="flex flex-col md:flex-row items-center h-screen w-full justify-around">
        <CommentDetail 
          authorFirstName={firstName1}
          avatar={faker.image.people()}
        
        />
        <CommentDetail 
          authorFirstName={firstName2}
          avatar={faker.image.people()}
        />
        <CommentDetail 
          authorFirstName={firstName3}
          avatar={faker.image.people()}
        />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));