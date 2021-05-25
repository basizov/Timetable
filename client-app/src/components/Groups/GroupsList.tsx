import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { IGroup } from '../../app/api/models/group';
import Item from '../../features/List/Item';
import List from '../../features/List/List';
import Loading from '../../features/Loading/Loading';

interface IProps {
  loading: boolean;
  groups: IGroup[];
  loadGroup: (id: string) => void;
}

const GroupsList: React.FC<IProps> = ({loading, groups, loadGroup}) => {
  return (
    <List className="groups__list">
      {loading && <Loading backgroundColor='#fff' />}
      {groups && groups.length > 0 && !loading && groups.map(group => (
        <Link
          key={group.id}
          onClick={() => loadGroup(group.id)}
          className="groups__link"
          to={`/groups/${group.id}`}>
          <Item className="groups__item">
              {group.number}
          </Item>
        </Link>
      ))}
      {(!groups || (groups && groups.length === 0)) && !loading &&
      <h2 className="groups__error">Группы не найдены...</h2>}
    </List>
  );
};

export default  observer(GroupsList);