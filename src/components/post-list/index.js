import React, { useState } from "react";
import Post from '../post';
import Location from '../location';

const PostList = (speciesInfo) => {
  const [array, setArray] = useState(speciesInfo.speciesInfo[0]);
  
  return (
    <div className="post-list">
      {array.map((species, index)=>{
        return <div key={index}>{species.commonName}</div>;
      })}
    </div>
  );
};

export default PostList;
