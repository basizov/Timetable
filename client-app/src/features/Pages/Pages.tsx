import React from 'react';

interface IProps {
  className?: string;
}

const Pages: React.FC<IProps> = ({className = '', children}) => {
  return (
    <div className={`pages ${className}`}>
      {children}
    </div>
  );
};

export default  Pages;