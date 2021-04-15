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
        { groupsRegystry, loadingInitial, loadGroups, getGroups: groups, loadGroup, selectedGroup: group, loading } = groupStore;

  useEffect(() => {
    if (groupsRegystry.size <= 1) {
      loadGroups();
    }
  }, [groupsRegystry.size, loadGroups]);

  return (
    <section className="scheduler">
      {loadingInitial ?
      <Loading content='Загрузка списка групп...' /> :
      <>
        <div className="sidebar">
          <SchedulerPaging />
          <SchedulerSearch />
          <SchedulerList
            groups={groups}
            loadGroup={loadGroup}
            loading={loading} />
        </div>
        <div className="details">
          <SchedulerDetails group={group} />
        </div>
      </>}
    </section>
  );
};

export default  observer(SchedulerDashboard);