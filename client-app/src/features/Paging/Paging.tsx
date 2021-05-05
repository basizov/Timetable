import React from 'react';
import left from '../../assets/navigation/leftW.svg';
import right from '../../assets/navigation/rightW.svg';

interface IProps {
  className?: string;
}

const Paging: React.FC<IProps> = ({className = ''}) => {
  return (
    <div className={`paging ${className}`}>
      <div className="paging__left">
        <img src={left} alt="left"/>
      </div>
      <div className="paging__pages">
        <div className="paging__page paging__page-select">1</div>
        <div className="paging__page">2</div>
        <div className="paging__page">3</div>
      </div>
      <div className="paging__right">
        <img src={right} alt="right"/>
      </div>
    </div>
  );
};

export default  Paging;