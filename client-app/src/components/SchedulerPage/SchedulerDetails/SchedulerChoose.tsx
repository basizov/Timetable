import React, { useState } from 'react';
import { IGroup } from '../../../app/api/models/Group';
import { dayIndex } from './SchedulerDetails';
import down from './svg/down.svg';
import info from './svg/info.svg';

interface Props {
  group: IGroup | undefined;
}

const SchedulerChoose: React.FC<Props> = ({group}) => {
  const [toggle, setToggle] = useState(false),
        days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        [select, setSelect] = useState(days[0]);
        
  const changeDay = (index: number) => {
    setSelect(days[index]);
    setToggle(false);
  }

  if (!group) {
    return (
      <div className="details__info">
        <img
          className="details__img"
          src={info}
          alt="info" />
        <div className="details__help">
          <li className="details__item">В данном окне высвечивается вся необходимая информация о расписании группы</li>
          <li className="details__item">Для просмотра данной информации выберете нужную группу в меню (Расписание групп) и нажмите на нее</li>
          <li className="details__item">После нажатия, вам будет предоставлена вся необходимая информация</li>
          <li className="details__item">Удачи : &#41;</li>
        </div>
      </div>
    );
  }
  return (
    <div className="details__choose">
      <div
        className="details__need" 
        onClick={() => setToggle(!toggle)}>
        <span>{select}</span>
        <div className="details__need_more">
          <img src={down} alt="down"/>
        </div>
      </div>
      {toggle && <>
        {days.map((day, i) => (
          select === day ||
          <div
            key={i}
            className="details__select"
            onClick={() => changeDay(i)}>
            {day}</div>
        ))}
      </>}
      <div className="details__wrapper-day">
        {group.subjects.map((subject) => {
          return (
            <React.Fragment key={subject.id}>
              {dayIndex(select, subject.days) ?
              <div className="details__scheduler-day">
                <div className="details__subject-day details__lastt">{subject.discipline}</div>
                <div className="details__time-day details__lastt">
                  <div>
                    <span className='details__time_type'>{subject.type}</span>
                    {subject.time}
                    <span>{subject.building} здание</span>
                    <span>{subject.cabinet} кабинет</span>
                  </div>
                </div>
              </div> : <></>}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default  SchedulerChoose;