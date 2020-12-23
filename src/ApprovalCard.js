import React from 'react';
import faker from 'faker';
import CardDetail from './CardDetail';
import RoundedProfileImg from './RoundedProfileImg';


const ApprovalCard = () => {
    return (
        <div className="mt-5 w-64 h-96">
        <div className="bg-white shadow-xl rounded-lg py-3">
          <RoundedProfileImg 
          avatar={faker.image.people()}
          />
          <CardDetail
            author={`${faker.name.firstName()} ${faker.name.lastName()}`}
          />
        </div>
      </div>
    );
};

export default ApprovalCard;