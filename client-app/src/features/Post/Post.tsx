import React from 'react';

interface IProps {
  fstUser?: boolean;
}

const Post: React.FC<IProps> = ({fstUser = false, children}) => {
  return (
    <div className={`post ${fstUser && 'post--fst-user'}`}>
      {children}
    </div>
  );
};

export default  Post;