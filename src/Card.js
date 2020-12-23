import React from 'react';
import faker from 'faker';
import CardDetail from './CardDetail';
import ApprovalCard from './ApprovalCard';
console.log(faker.image)

const Card = () => {
  return (
    <div className="mt-5 mx-5 lg:mt-0 w-64 min-h-min shadow-2xl">
      <ApprovalCard>      
         <CardDetail
           author={`${faker.name.firstName()} ${faker.name.lastName()}`}
         />
       </ApprovalCard>
     </div>
   );
};

export default Card;