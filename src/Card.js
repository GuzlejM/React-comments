import React from 'react';
import faker from 'faker';
import CardDetail from './CardDetail';
import ApprovalCard from './ApprovalCard';

console.log(faker)

const Card = () => {
    return (
        <div className="mt-20 mx-5 lg:mt-0 w-64 h-96">
            <CardDetail
              author={`${faker.name.firstName()} ${faker.name.lastName()}`}
            />
            <ApprovalCard />
          </div>
    );
};

export default Card;