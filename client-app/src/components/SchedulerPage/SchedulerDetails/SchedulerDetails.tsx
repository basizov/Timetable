import { observer } from 'mobx-react-lite';
import React from 'react';
import { IGroup } from '../../../app/api/models/Group';
import info from './svg/info.svg';

interface Props {
  group: IGroup | undefined;
}

const SchedulerDetails: React.FC<Props> = ({group}) => {
  return (
    <div className="details__wrapper">
      {group !== undefined ?
      <div className="details__scheduler">
        <div className="details__day">Предмет</div>
        <div className="details__day">Понедельник</div>
        <div className="details__day">Вторник</div>
        <div className="details__day">Среда</div>
        <div className="details__day">Четверг</div>
        <div className="details__day">Пятница</div>
        <div className="details__day details__lastr">Суббота</div>
        {group.days.map((day, i) => (
          <>
            <div className="details__subject">ТРПО</div>
            <div className="details__time">
              <div>
                <span className='details__time_type'>Лаб. работа</span>
                9:40-11:10
                <span>7 здание</span>
                <span>215 кабинет</span>
              </div>
            </div>
            <div className="details__time"></div>
            <div className="details__time">
              <div>
                <span className='details__time_type'>Лекция</span>
                3:30-15:00
                <span>7 здание</span>
                <span>215 кабинет</span>
              </div>
            </div>
            <div className="details__time"></div>
            <div className="details__time"></div>
            <div className="details__time details__lastr">
              <div>
                <span className='details__time_type'>Практика</span>
                8:00-9:30
                <span>7 здание</span>
                <span>215 кабинет</span>
              </div>
            </div>
          </>
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