import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';


// TODO 
    // Refactor separate to components,
    // Import faker databases

const firstName = faker.name.firstName()
const lastName = faker.name.lastName()
        
const App = () => {
  return (      
      <div className="flex items-center h-screen w-full justify-around">
        
        <div className="max-w-xs">
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
                <img 
                  className="w-32 h-32 rounded-full mx-auto" 
                  src={ faker.image.business() } 
                  alt={ `${firstName}, ${lastName} ` } />
            </div>
            <div className="p-2">
                <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                    { `${firstName}, ${lastName} ` }
                </h3>
                <div className="text-center text-gray-400 text-xs font-semibold">
                    <p>{ faker.name.jobTitle()}</p>
                </div>
                <table className="text-xs my-3">
                    <tbody><tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                        <td className="px-2 py-2">{ `${faker.address.country()}, ${faker.address.city()} ` }</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                        <td className="px-2 py-2">{ `+44/${faker.phone.phoneNumberFormat()}` }</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                        <td className="px-2 py-2">{ `${firstName}.${lastName}@${faker.company.companyName()}.com` }</td>
                    </tr>
                </tbody></table>
                <div className="text-center my-3">
                    <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));