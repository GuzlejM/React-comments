import React from 'react';
import faker from 'faker';


const CommentDetail = (props) => {
    console.log(props)
    return (
        <div className="mt-5 w-64 h-96">
        <div className="bg-white shadow-xl rounded-lg py-3">
          <div className="photo-wrapper p-2">
              <img 
                className="w-32 h-32 rounded-full mx-auto" 
                src={ props.avatar } 
                alt={props.author} />
          </div>
          <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                  {props.author}
              </h3>
              <div className="text-center text-gray-400 text-xs font-semibold">
                  <p>{ faker.name.jobTitle()}</p>
              </div>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                    <td className="px-2 py-2">{ `${faker.address.country()}, ${faker.address.city()} ` }</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td className="px-2 py-2">{ `+44/${faker.phone.phoneNumberFormat()}` }</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2">{ `${faker.commerce.department()}@${faker.address.county()}.com` }</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    );
};

export default CommentDetail;