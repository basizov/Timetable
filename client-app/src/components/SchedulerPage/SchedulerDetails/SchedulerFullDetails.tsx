import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../app/stores/store';
import SchedulerChoose from './SchedulerChoose';
import SchedulerDetails from './SchedulerDetails';

const SchedulerFullDetails: React.FC = () => {
  const { groupStore } = useStore();

  return (
    <div className="details-full">
      <div className="details-fullbig">
        <SchedulerDetails group={groupStore.selectedGroup} />
      </div>
      <div className="details-fullsmall">
        <SchedulerChoose />
      </div>
    </div>
  );
};

export default  observer(SchedulerFullDetails);