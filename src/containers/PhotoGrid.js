import React from 'react';
import Photo from './Photo';

const PhotoGrid = (props) =>  {
    return (
      <div className="photo-grid">
        {
          props.posts.map((post, index) => {
            return (
              <Photo {...props} key={index} post={post} index={index} />
            );
          })
        }
      </div>
    );
};


export default PhotoGrid;
