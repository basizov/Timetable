import React, { useState } from 'react';
import left from '../../assets/navigation/left.svg';
import right from '../../assets/navigation/right.svg';

interface IProps {
  className?: string;
  childClassName?: string;
  elemets?: React.ReactNode[] | React.ReactElement[] | string[];
}

const Slider: React.FC<IProps> = ({
  className = '',
  childClassName = '',
  elemets = []
}) => {
  const [offset, setOffset] = useState(0),
        numbers = Array.from(Array(elemets.length).keys());

  const changeOffset = (nbr: number) => {
    const newOffset = offset - nbr;

    if (newOffset > ((elemets.length - 1) * Math.abs(nbr)) && nbr < 0) setOffset(0)
    else if (newOffset < 0 && nbr > 0) setOffset((elemets.length - 1) * Math.abs(nbr));
    else setOffset(newOffset);
  }
  
  return (
    <div className={`slider ${className}`}>
      <div
        onClick={() => changeOffset(30)}
        className="slider__move">
        <img src={left} alt="left"/>
      </div>
      <div
        onClick={() => changeOffset(-30)}
        className="slider__move">
        <img src={right} alt="right"/>
      </div>
      <div className="slider__elements-radious">
        <div className="slider__elements" style={{
          width: `${elemets.length * 100}%`
        }}>
            {elemets.map((child, key) => (
              <div
                key={key}
                style={{transform: `translateX(-${offset}rem)`}}
                className={`slider__element ${childClassName}`}>
                {child}
              </div>
            ))}
        </div>
      </div>
      <div className="slider__nav">
        {numbers.map((key) => (
          <span
            key={key}
            onClick={() => setOffset(key * 30)}
            className={`slider__nav-el ${key === offset / 30 && 'slider__nav-el--active'}`}></span>
        ))}
      </div>
    </div>
  );
};

export default  Slider;