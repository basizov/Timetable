import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../app/stores/store';
import search from './svg/search.svg';

const SchedulerSearch: React.FC = () => {
  const { groupStore } = useStore();
        
  return (
    <div className="sidebar__search">
      <input
        type="text"
        onChange={(e) => groupStore.setFilter(e.target.value)}
        onFocus={(e) => e.target.select()}
        value={groupStore.filter}
        placeholder='Введите нужную группу:'
        className="sidebar__input" />
      <div
        onClick={() => groupStore.setPredicate('label', groupStore.filter)}
        className="btn__sidebar btn__sidebar_withimg btn__sidebar_withimg_smright">
        <img src={search} alt="search"/>
      </div>
    </div>
  );
};

export default  observer(SchedulerSearch);