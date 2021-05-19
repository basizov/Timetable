import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../app/stores/store';
import Item from '../../features/List/Item';
import List from '../../features/List/List';
import Loading from '../../features/Loading/Loading';
import Modal from '../../features/Modal/Modal';
import search from '../../assets/search.svg';

const Groups: React.FC = () => {
  const { groupsStore: { loadGroups, clearGroups, getGroups, groupRegystry, loading, setLoading, setSelectedGroup } } = useStore();
	const [label, setLabel] = useState("");

  useEffect(() => {
    if (groupRegystry.size === 0) loadGroups(label);
  }, [groupRegystry.size, loadGroups, label]);
  
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLabel(event.target.value);
  }

  return (
    <Modal>
      <section className="groups">
        <div className="groups__uppanel">
          <input
            type="text"
            className="input groups__input"
            onFocus={(e) => e.target.select()}
            value={label}
            onChange={onInputChange}
            placeholder='Расписание какой группы найти?' />
          <img
            src={search}
            alt="search"
            onClick={() => {
              clearGroups();
              setLoading(true);
            }}
            className="groups__search" />
        </div>
        <List className="groups__list">
          {loading && <Loading backgroundColor='#fff' />}
          {getGroups && getGroups.length > 0 && !loading && getGroups.map(group => (
            <Link
              key={group.id}
              onClick={() => setSelectedGroup(group)}
              className="groups__link"
              to={`/groups/${group.id}`}>
              <Item className="groups__item">
                  {group.number}
              </Item>
            </Link>
          ))}
          {(!getGroups || (getGroups && getGroups.length === 0)) && !loading &&
          <h2 className="groups__error">Группы не найдены...</h2>}
        </List>
      </section>
    </Modal>
  );
};

export default  observer(Groups);