import { observer } from 'mobx-react-lite';
import React from 'react';
import search from '../../assets/search.svg';

interface IProps {
  label: string;
  setLabel: (label: string) => void;
  clearGroups: () => void;
  setLoading: (value: boolean) => void; 
}

const GroupsUppanel: React.FC<IProps> = ({label, setLabel, clearGroups, setLoading}) => {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLabel(event.target.value);
  }

  return (
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
  );
};

export default  observer(GroupsUppanel);