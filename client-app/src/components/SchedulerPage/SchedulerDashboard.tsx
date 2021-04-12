import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import Loading from '../../app/layout/Loading/Loading';
import { useStore } from '../../app/stores/store';
import SchedulerDetails from './SchedulerDetails/SchedulerDetails';
import SchedulerList from './SchedulerSidebar/SchedulerList';
import SchedulerPaging from './SchedulerSidebar/SchedulerPaging';
import SchedulerSearch from './SchedulerSidebar/SchedulerSearch';

const SchedulerDashboard: React.FC = () => {
  const { groupStore } = useStore(),
        { groupsRegystry, loadingInitial, loadGroups } = groupStore;

  useEffect(() => {
    if (groupsRegystry.size <= 1) {
      loadGroups();
    }
  }, [groupsRegystry.size, loadGroups]);

  if (loadingInitial) {
    return <Loading content='Загрузка списка групп...' />
  }
  return (
    <section className="scheduler">
      <div className="sidebar">
        <SchedulerPaging />
        <SchedulerSearch />
        <SchedulerList />
      </div>
      <div className="details">
        <SchedulerDetails />
      </div>
    </section>
  );
};

export default  observer(SchedulerDashboard);