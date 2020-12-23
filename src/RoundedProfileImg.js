import React from 'react';

const RoundedProfileImg = props => {
    return (
          <div className="photo-wrapper p-2">
              <img 
                className="w-32 h-32 rounded-full mx-auto" 
                src={ props.avatar } 
                alt={ props.author } />
          </div>
    );
};

export default RoundedProfileImg;