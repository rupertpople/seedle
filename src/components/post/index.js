import React from 'react';
import './index.css'

const Post = () => {
  return (
    <div className="post">
      <p className="post-commonName">Pigeon</p>
      <p className="post-latinName">Columba livia domestica</p>
      <p className="post-kingdom">Animalia</p>
      <p className="post-family">Columbidae</p>
    </div>
  );
};

export default Post;

// const Post = ({commonName, latinName, kingdom, family}) => {
//   return (
//     <div className="post">
//       <p className="post-commonName">{commonName}</p>
//       <p className="post-latinName">{latinName}</p>
//       <p className="post-kingdom">{kingdom}</p>
//       <p className="post-family">{family}</p>
//     </div>
//   );
// };