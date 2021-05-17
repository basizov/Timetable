import React, { useState } from 'react';
import { IPagination, PagingParams } from '../../app/api/models/pagination';
import left from '../../assets/navigation/leftW.svg';
import right from '../../assets/navigation/rightW.svg';

interface IProps {
  className?: string;
  pagination: IPagination | null;
  setPagingParams: (value: PagingParams) => void;
  load: () => void;
  clear: () => void;
}

const Paging: React.FC<IProps> = ({className = '', pagination, setPagingParams, load, clear}) => {
  const getCurrentPageDimention = () => {
    if (pagination) {
      let res = pagination.currentPage - 1;

      if (res % 5 !== 0) for (res; res % 5 !== 0; --res);
      return (res);
    } else return (0);
  }

  const pages = Array.from(Array(pagination ? pagination!.totalPages : 0).keys());
  const [startPaging, setStartPaging] = useState(getCurrentPageDimention());
  const [endPaging, setEndPaging] = useState(startPaging + 5);

  const setStartEndPaging = (start: number, end: number = start + 5) => {
    if (pagination && start < pagination!.totalPages) {
      if (start < 0) {
        start = 0;
        end = start + 5;
      }
      setStartPaging(start);
      setEndPaging(end);
    }
  }

  return (
    <div className={`paging ${className}`}>
      <div 
        onClick={() => setStartEndPaging(startPaging - 5)}
        className="paging__left">
        <img src={left} alt="left"/>
      </div>
      <div className="paging__pages">
        {pages.map(key => {
          if (key >= startPaging && key < endPaging) {
            return (
              <div
                key={key}
                onClick={() => {
                  setPagingParams(new PagingParams(key + 1, pagination ? pagination.itemsPerPage : 2));
                  clear();
                  load();
                }}
                className={`paging__page ${key + 1 === pagination?.currentPage && 'paging__page-select'}`}>
                {key + 1}</div>
            );
          }
        })}
      </div>
      <div
        onClick={() => setStartEndPaging(startPaging + 5)}
        className="paging__right">
        <img src={right} alt="right"/>
      </div>
    </div>
  );
};

export default  Paging;