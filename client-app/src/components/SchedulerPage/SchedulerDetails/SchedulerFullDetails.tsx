import React from 'react';
import SchedulerChoose from './SchedulerChoose';
import SchedulerDetails from './SchedulerDetails';

const SchedulerFullDetails: React.FC = () => {
  return (
    <div className="details-full">
      <div className="details-fullbig">
        <SchedulerDetails />
      </div>
      <div className="details-fullsmall">
        <SchedulerChoose />
      </div>
    </div>
  );
};

export default  SchedulerFullDetails;