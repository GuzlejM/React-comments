import React from 'react';
import faker from 'faker';
import CardDetail from './CardDetail';
import ApprovalCard from './ApprovalCard';
import RoundedProfileImg from './RoundedProfileImg';

console.log(faker)

const Card = () => {
    return (
        <div className="mt-5 w-64 h-96">
          <div className="bg-white shadow-xl rounded-lg py-3">
            <RoundedProfileImg 
            avatar={faker.image.unsplash.people()}
            />
            <CardDetail
              author={`${faker.name.firstName()} ${faker.name.lastName()}`}
            />
            <ApprovalCard />
          </div>
        </div>
    );
};

export default Card;