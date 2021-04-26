import React from 'react';

interface IProps {
  className?: string;
}

const List: React.FC<IProps> = ({className, children}) => {
  return (
    <div className={`list ${className}`}>
      {children}
    </div>
  );
};

export default  List;