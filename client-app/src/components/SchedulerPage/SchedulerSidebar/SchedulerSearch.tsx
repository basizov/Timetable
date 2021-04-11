import React from 'react';
import search from './svg/search.svg';

const SchedulerSearch: React.FC = () => {
  return (
    <div className="sidebar__search">
      <input
        type="text"
        onFocus={(e) => e.target.select()}
        placeholder='Введите нужную группу:'
        className="sidebar__input" />
      <div
        className="btn__sidebar btn__sidebar_withimg btn__sidebar_withimg_smright">
        <img src={search} alt="search"/>
      </div>
    </div>
  );
};

export default  SchedulerSearch;