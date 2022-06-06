import React, { useState } from "react";
import Post from '../post';
import Location from '../location';

const PostList = (speciesInfo) => {
  const [array, setArray] = useState(speciesInfo);

  // const speciesPromise = Promise.all(speciesInfo);
  // console.log(speciesPromise);

  console.log(speciesInfo.speciesInfo[0])
  
  return (
    <div className="post-list">
      <p> Hi hello howdy howdo hoi</p>
      {speciesInfo.speciesInfo[0].map((species, index)=>{
        return <div key={index}>{species.commonName}</div>;
      })}
    </div>
  );
};

export default PostList;
