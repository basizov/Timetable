import React from 'react';
import search from './svg/search.svg';

const SchedulerSearch: React.FC = () => {
  return (
    <div className="scheduler__search">
      <input
        type="text"
        placeholder='Введите нужную группу:'
        className="scheduler__input" />
      <div
        className="btn__sidebar btn__sidebar_withimg btn__sidebar_withimg_smright">
        <img src={search} alt="search"/>
      </div>
    </div>
  );
};

export default  SchedulerSearch;