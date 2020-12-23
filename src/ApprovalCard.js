import React from 'react';

const ApprovalCard = (props) => {
    return (
        <div className="w-full text-center">
          <div>{ props.children }</div>
          <div className="p-4">
            <div className="flex justify-around">
              <button 
                className="
                  inline-block px-6 py-2 text-xs font-medium leading-6 
                  text-center text-white uppercase transition bg-green-500 
                  rounded shadow ripple hover:shadow-lg hover:bg-green-600 
                  focus:outline-none">
                Accept
              </button>
              <button 
                className="
                inline-block px-6 py-2 text-xs font-medium leading-6 text-center 
                text-white uppercase transition bg-red-500 rounded shadow ripple 
                hover:shadow-lg hover:bg-red-600 focus:outline-none  
                ">
                Reject
              </button>
            </div>
          </div>
        </div>
    );
};

export default ApprovalCard;