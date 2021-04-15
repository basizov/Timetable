import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef, useState } from 'react';
import { PagingParams } from '../../../app/api/models/paginations';
import { useStore } from '../../../app/stores/store';
import left from './svg/left.svg';
import right from './svg/right.svg';

const SchedulerPaging: React.FC = () => {
  const { groupStore } = useStore(),
        { setPagingParams, clearGroups, loadGroups, pagination, offset, setOffset,
          actualPage, setActualPage, actualScroll, setActualScroll, totalPages, setTotalPages } = groupStore;
  const numbers = Array.from(Array(pagination ? pagination!.totalPages : 0).keys()),
        targetRef = useRef<HTMLDivElement>(null),
        buttonRef = useRef<HTMLDivElement>(null),
        [pageShift, setPageShift] = useState(0);

  const scrollScrollBar = (newOffset: number, turn: number) => {
    const tempOffset = offset + newOffset * pageShift,
          tempActualScroll = actualScroll + turn * pageShift;

    if (tempActualScroll <= pagination!.totalPages && tempOffset >= 0) {
      setOffset(tempOffset);
      setActualScroll(tempActualScroll);
    } else if (tempActualScroll > pagination!.totalPages && actualScroll < pagination!.totalPages) {
      setOffset(offset + newOffset * (pagination!.totalPages - actualScroll));
      setActualScroll(pagination!.totalPages);
    } else if (actualScroll > pageShift) {
      setOffset(0);
      setActualScroll(pageShift);
    } else if (actualScroll === pageShift && offset === 0 && newOffset < 0) {
      setOffset(offset + -newOffset * (pagination!.totalPages - actualScroll));
      setActualScroll(pagination!.totalPages);
    }
  }
  
  const turnPage = (page: number) => {
    if (actualPage !== page) {
      setPagingParams(new PagingParams(page));
      clearGroups();
      loadGroups();
      setActualPage(page);
    }
  }
  
  useEffect(() => {
    const temp = (buttonRef.current?.clientWidth ?? 50);

    if (targetRef && targetRef.current) {
      if (actualScroll === 0) setActualScroll(Math.floor((targetRef.current!.clientWidth - temp) / temp));
      setPageShift(Math.floor((targetRef.current!.clientWidth - temp) / temp));
    }
  }, [targetRef, buttonRef, setActualScroll, setPageShift, actualScroll]);
  useEffect(() => {
    const temp = (buttonRef.current?.clientWidth ?? 50);

    if (pagination && pagination.totalPages) {
      if (totalPages !== pagination!.totalPages) {
        setOffset(0);
        setActualPage(1);
        if (targetRef && targetRef.current) {
          setActualScroll(Math.floor((targetRef.current!.clientWidth - temp) / temp));
          setPageShift(Math.floor((targetRef.current!.clientWidth - temp) / temp));
        }
        setTotalPages(pagination!.totalPages);
      }
    }
  }, [pagination, setOffset, targetRef, buttonRef, setActualScroll, setPageShift, setTotalPages, totalPages, setActualPage]);

  return (
    <div className="sidebar__paging">
      <div
        ref={buttonRef}
        className="btn__sidebar btn__sidebar_withimg btn__sidebar_withimg_left"
        onClick={() => scrollScrollBar(-(buttonRef.current?.clientWidth ?? 50), -1)}>
        <img src={left} alt="left"/>
      </div>
      <div 
        ref={targetRef}
        className="sidebar__pages"
        style={{transform: `translateX(-${offset}px)`}}>
        {numbers.map(i => {
          const classes = ['btn__sidebar'];

          if (i + 1 === actualPage) {
            classes.push('btn__sidebar_active');
          }
          return (
            <div
              key={i}
              className={classes.join(' ')}
              onClick={() => turnPage(i + 1)}>{i + 1}</div>
          );
        })}
        {(numbers.length === 0) && <div className="sidebar__error sidebar__error_top">Страниц нет : &#40;</div>}
      </div>
      <div
        className="btn__sidebar btn__sidebar_withimg btn__sidebar_withimg_right"
        onClick={() => scrollScrollBar(buttonRef.current?.clientWidth ?? 50, 1)}>
        <img src={right} alt="right"/>
      </div>
    </div>
  );
};

export default  observer(SchedulerPaging);