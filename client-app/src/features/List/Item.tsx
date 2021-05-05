import React from 'react';

interface IProps {
  className?: string;
}

const Item: React.FC<IProps> = ({className = '', children}) => {
  return (
    <div className={`item ${className}`}>
      {children}
    </div>
  );
};

export default  Item;