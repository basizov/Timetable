import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ITimetable } from '../../app/api/models/timetable';
import { store } from '../../app/stores/store';
import Loading from '../../features/Loading/Loading';
import Modal from '../../features/Modal/Modal';
import Select from '../../features/Select/Select';

const Timetable: React.FC = () => {
  const { groupsStore: { selectedGroup, loadGroup, loading } } = store;
  const { id } = useParams<{id: string}>();
  const [label, setLabel] = useState<React.ReactChild | React.ReactNode | string>('Вся неделя');

  useEffect(() => {
    if (id) loadGroup(id);
  }, [id, loadGroup]);
  
  const dayIdentify = (day: string, timetable: ITimetable[]) => (
    <>
      <h2 className="timetable__day">{day}</h2>
      <div className="timetable__wrapper">
        <div className="timetable__item timetable__item-title">Предмет</div>
        <div className="timetable__item timetable__item-title">Время</div>
        <div className="timetable__item timetable__item-title">Неделя</div>
        <div className="timetable__item timetable__item-title">Тип</div>
        <div className="timetable__item timetable__item-title">Кабинет</div>
        <div className="timetable__item timetable__item-title">Здание</div>
        <div className="timetable__item timetable__item-title">Преподаватель</div>
        {timetable.map(t => {
          if (t.day !== day) return <React.Fragment key={t.id}></React.Fragment>
          return (
            <React.Fragment key={t.id}>
              <div className="timetable__item">{t.subject}</div>
              <div className="timetable__item">{t.subjectNumber}</div>
              <div className="timetable__item">{t.week}</div>
              <div className="timetable__item">{t.subjectType}</div>
              <div className="timetable__item">{t.cabinet}</div>
              <div className="timetable__item">{t.building}</div>
              <div className="timetable__item">{t.teacher}</div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  )

  
  if (loading) return <Modal><Loading backgroundColor='#fff' className='timetable__loading' /></Modal>
  return (
    <div className="timetable">
      <Select
        label={label}
        setLabel={setLabel}
        className='timetable__select'
        count={7}
        labels={['Вся неделя', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']} />

        {label === 'Вся неделя' ?
        <>
          {selectedGroup && dayIdentify('Понедельник', selectedGroup.timetable)}
          {selectedGroup && dayIdentify('Вторник', selectedGroup.timetable)}
          {selectedGroup && dayIdentify('Среда', selectedGroup.timetable)}
          {selectedGroup && dayIdentify('Четверг', selectedGroup.timetable)}
          {selectedGroup && dayIdentify('Пятница', selectedGroup.timetable)}
          {selectedGroup && dayIdentify('Суббота', selectedGroup.timetable)}
        </>
        :
        <div className="timetable__wrapper">
          <div className="timetable__item timetable__item-title">Предмет</div>
          <div className="timetable__item timetable__item-title">Время</div>
          <div className="timetable__item timetable__item-title">Неделя</div>
          <div className="timetable__item timetable__item-title">Тип</div>
          <div className="timetable__item timetable__item-title">Кабинет</div>
          <div className="timetable__item timetable__item-title">Здание</div>
          <div className="timetable__item timetable__item-title">Преподаватель</div>
          {selectedGroup && selectedGroup.timetable.map(t => {
            if (t.day !== label) return <></>
            return (
              <React.Fragment key={t.id}>
                <div className="timetable__item">{t.subject}</div>
                <div className="timetable__item">{t.subjectNumber}</div>
                <div className="timetable__item">{t.week}</div>
                <div className="timetable__item">{t.subjectType}</div>
                <div className="timetable__item">{t.cabinet}</div>
                <div className="timetable__item">{t.building}</div>
                <div className="timetable__item">{t.teacher}</div>
              </React.Fragment>
            );
          })}
        </div>}
    </div>
  );
};

export default  observer(Timetable);