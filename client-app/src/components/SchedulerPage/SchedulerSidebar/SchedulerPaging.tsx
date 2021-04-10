import React from 'react';
import left from './svg/left.svg';
import right from './svg/right.svg';

const SchedulerPaging: React.FC = () => {
  return (
    <div className="sidebar__paging">
      <div
        className="btn__sidebar btn__sidebar_withimg btn__sidebar_withimg_left"
        onClick={() => console.log('left')}>
        <img src={left} alt="left"/>
      </div>
      <div className="sidebar__pages">
        <div className="btn__sidebar">1</div>
        <div className="btn__sidebar">2</div>
        <div className="btn__sidebar">3</div>
        <div className="btn__sidebar">4</div>
        <div className="btn__sidebar">5</div>
        <div className="btn__sidebar">6</div>
        <div className="btn__sidebar">7</div>
        <div className="btn__sidebar">8</div>
        <div className="btn__sidebar">9</div>
        <div className="btn__sidebar">10</div>
      </div>
      <div
        className="btn__sidebar btn__sidebar_withimg btn__sidebar_withimg_right"
        onClick={() => console.log('right')}>
        <img src={right} alt="right"/>
      </div>
    </div>
  );
};

export default  SchedulerPaging;