import React, { useEffect, useRef, useState } from 'react';
import Item from '../List/Item';
import List from '../List/List';

interface IProps {
  label: React.ReactChild | React.ReactNode | string;
  setLabel: (label: React.ReactChild | React.ReactNode | string) => void;
  className?: string;
  count?: number;
  labels?:  React.ReactChild[] | React.ReactNode[] | string;
}

const Select: React.FC<IProps> = ({
  label,
  setLabel,
  className = '',
  labels = [],
  count = 1
}) => {
  const elements = Array.from(Array(count).keys()),
        [active, setActive] = useState(''),
        [labelNumber, setLabelNumber] = useState(0),
        targetRef = useRef<HTMLDivElement>(null);

  const handler = (e: Event) => {
    if (targetRef.current && e.target instanceof Node && !targetRef.current.contains(e.target)) {
      setActive('');
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handler);
    return(() => document.removeEventListener('mousedown', handler))
  });

  return (
    <div
      ref={targetRef}
      className={`select ${className}`}>
      <div
        className="select__selected"
        onClick={() => setActive(active === '' ? '-active' : '')}>{labels[labelNumber]}</div>
      <List className={`select__menu ${active !== '' ? 'select__menu' + active : active}`}>
        {elements.map((key) => (
          <Item
            key={key}
            className={`select__item`}
            onClick={() => {
              setLabelNumber(key < labels.length ? key : labels.length - 1);
              setActive('');
              setLabel(labels[key]);
            }}>
            {labels[key < labels.length ? key : labels.length - 1]}
          </Item>
        ))}
      </List>
      <div className={`select__arrow ${active !== '' ? 'select__arrow' + active : active}`}></div>
    </div>
  );
};

export default  Select;