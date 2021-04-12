import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { IGroup } from '../../../app/api/models/Group';
import resize from './svg/resize.svg';

interface Props {
  groups: IGroup[];
  loadGroup: (id: string) => void;
}

const SchedulerList: React.FC<Props> = ({groups, loadGroup}) => {
  return (
    <div className="sidebar__list">
      {groups && groups.map(group =>(
        <div
          key={group.id}
          className="sidebar__group">
          <div
            className="sidebar__group_name"
            onClick={() => loadGroup(group.id)}>
            <Link
              to={`/scheduler/${group.number}`}
              className="sidebar__link">
              {group.number}
            </Link>
            <div className="sidebar__group_text">{group.number}</div>
          </div>
          <Link
            onClick={() => loadGroup(group.id)}
            to={`/scheduler/${group.number}`}
            className="sidebar__fullscrin">
            <img src={resize} alt="resize"/>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default  observer(SchedulerList);