import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { store } from '../../app/stores/store';
import Select from '../../features/Select/Select';

const Timetable: React.FC = () => {
  const { groupsStore: { selectedGroup } } = store;
  const [label, setLabel] = useState<React.ReactChild | React.ReactNode | string>('Вся неделя');

  return (
    <div className="timetable">
      <Select
        label={label}
        setLabel={setLabel}
        className='timetable__select'
        count={7}
        labels={['Вся неделя', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']} />

        <div className="timetable__wrapper">
          <div className="timetable__item timetable__item-title">Предмет</div>
          <div className="timetable__item timetable__item-title">Время</div>
          <div className="timetable__item timetable__item-title">Неделя</div>
          <div className="timetable__item timetable__item-title">Тип</div>
          <div className="timetable__item timetable__item-title">Кабинет</div>
          <div className="timetable__item timetable__item-title">Здание</div>
          <div className="timetable__item timetable__item-title">Преподаватель</div>
          {selectedGroup && selectedGroup.timetable.map(t => {
            if (t.day !== label && label !== 'Вся неделя') return <></>
            return (
              <React.Fragment key={t.id}>
                <div className="timetable__item">{t.subject}</div>
                <div className="timetable__item">{t.subjectNumber}</div>
                <div className="timetable__item">{t.week}</div>
                <div className="timetable__item">{t.subjectType}</div>
                <div className="timetable__item">{label}</div>
                <div className="timetable__item">{label}</div>
                <div className="timetable__item">{t.teacher}</div>
              </React.Fragment>);
          })}
        </div>
    </div>
  );
};

export default  observer(Timetable);