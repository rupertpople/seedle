import React, { useState } from "react";
import './index.css'

const PostList = (speciesInfo) => {
  const [array, setArray] = useState(speciesInfo.speciesInfo[0]);
  
  return (
    <div className="post-list">
      {array.map((species, index)=>{
        return <div key={index}><p> {species.commonName} </p><p> {species.latinName} </p></div>;
      })}
    </div>
  );
};

export default PostList;
