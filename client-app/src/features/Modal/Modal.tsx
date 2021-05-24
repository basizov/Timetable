import React from 'react';

interface IProps {
  className?: string;
}

const Modal: React.FC<IProps> = ({className = '', children}) => {
  return (
    <div className={`modal ${className}`}>
      {children}
    </div>
  );
};

export default  Modal;