import React from 'react';

const Post: React.FC = ({children}) => {
  return (
    <div className={`post`}>
      {children}
    </div>
  );
};

export default  Post;