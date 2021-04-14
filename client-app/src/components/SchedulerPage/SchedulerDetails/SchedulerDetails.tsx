import { observer } from 'mobx-react-lite';
import React from 'react';
import { IDay, IGroup, ISubject } from '../../../app/api/models/Group';
import info from './svg/info.svg';

interface Props {
  group: IGroup | undefined;
}

const tableColumn = (day: string, hasDay: boolean, subject: ISubject) => {
  const rightBorderNone = day === 'Суббота' ? ' details__lastr' : '';
  let   showColumn = false;

  if (hasDay && day === 'Понедельник') showColumn = true;
  else if (hasDay && day === 'Вторник') showColumn = true;
  else if (hasDay && day === 'Среда') showColumn = true;
  else if (hasDay && day === 'Четверг') showColumn = true;
  else if (hasDay && day === 'Пятница') showColumn = true;
  else if (hasDay && day === 'Суббота') showColumn = true;
  
  if (showColumn) {
    return (
      <div className={`details__time${rightBorderNone}`}>
        <div>
          <span className='details__time_type'>{subject.type}</span>
          {subject.time}
          <span>{subject.building} здание</span>
          <span>{subject.cabinet} кабинет</span>
        </div>
      </div>
    );
  } else {
    return (<div className={`details__time${rightBorderNone}`}></div>);
  }
}

export const dayIndex = (day: string, days: IDay[]) => {
  let res = false;
  
  days.forEach(d => {
    if (day === d.name) res = true;
  });

  return (res);
}

const SchedulerDetails: React.FC<Props> = ({group}) => {
  return (
    <div className="details__wrapper">
      {group !== undefined ?
      <div className="details__scheduler">
        <div className="details__day details__lastt">Предмет</div>
        <div className="details__day details__lastt">Понедельник</div>
        <div className="details__day details__lastt">Вторник</div>
        <div className="details__day details__lastt">Среда</div>
        <div className="details__day details__lastt">Четверг</div>
        <div className="details__day details__lastt">Пятница</div>
        <div className="details__day details__lastr details__lastt">Суббота</div>
        {group.subjects.map((subject) => (
            <React.Fragment key={subject.id}>
              <div className="details__subject">{subject.discipline}</div>
              {tableColumn('Понедельник', dayIndex('Понедельник', subject.days), subject)}
              {tableColumn('Вторник', dayIndex('Вторник', subject.days), subject)}
              {tableColumn('Среда', dayIndex('Среда', subject.days), subject)}
              {tableColumn('Четверг', dayIndex('Четверг', subject.days), subject)}
              {tableColumn('Пятница', dayIndex('Пятница', subject.days), subject)}
              {tableColumn('Суббота', dayIndex('Суббота', subject.days), subject)}
            </React.Fragment>
        ))}
      </div> :
      <div className="details__info">
        <img
          className="details__img"
          src={info}
          alt="info" />
        <div className="details__help">
          <li className="details__item">В данном окне высвечивается вся необходимая информация о расписании группы</li>
          <li className="details__item">Для просмотра данной информации выберете нужную группу и нажмите на нее</li>
          <li className="details__item">После нажатия, вам будет предоставлена вся необходимая информация</li>
          <li className="details__item">Удачи : &#41;</li>
        </div>
      </div>
      }
    </div>
  );
};

export default  observer(SchedulerDetails);