import React from 'react';
import SchedulerDetails from './SchedulerDetails';
import SchedulerList from './SchedulerList';
import SchedulerPaging from './SchedulerPaging';
import SchedulerSearch from './SchedulerSearch';

const SchedulerDashboard: React.FC = () => {
  return (
    <section className="scheduler">
      <div className="scheduler__sidebar">
        <SchedulerPaging />
        <SchedulerSearch />
        <SchedulerList />
      </div>
      <SchedulerDetails />
    </section>
  );
};

export default  SchedulerDashboard;