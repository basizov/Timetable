import React from 'react';
import SchedulerDetails from './SchedulerDetails/SchedulerDetails';
import SchedulerList from './SchedulerList';
import SchedulerPaging from './SchedulerSidebar/SchedulerPaging';
import SchedulerSearch from './SchedulerSidebar/SchedulerSearch';

const SchedulerDashboard: React.FC = () => {
  return (
    <section className="scheduler">
      <div className="sidebar">
        <SchedulerPaging />
        <SchedulerSearch />
        <SchedulerList />
      </div>
      <SchedulerDetails />
    </section>
  );
};

export default  SchedulerDashboard;