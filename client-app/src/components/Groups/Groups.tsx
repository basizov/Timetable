import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useStore } from '../../app/stores/store';
import Pages from '../../features/Pages/Pages';
import GroupsUppanel from './GroupsUppanel';
import GroupsList from './GroupsList';

const Groups: React.FC = () => {
  const { groupsStore: { loadGroups, clearGroups, getGroups, groupRegystry, loading, setLoading, setSelectedGroup } } = useStore();
	const [label, setLabel] = useState("");

  useEffect(() => {
    if (groupRegystry.size === 0) loadGroups(label);
  }, [groupRegystry.size, loadGroups, label]);

  return (
    <Pages>
      <section className="groups">
        <GroupsUppanel label={label} setLabel={setLabel} clearGroups={clearGroups} setLoading={setLoading} />
        <GroupsList loading={loading} groups={getGroups} setSelectedGroup={setSelectedGroup} />
      </section>
    </Pages>
  );
};

export default  observer(Groups);