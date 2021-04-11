import React, { useState } from 'react';
import down from './svg/down.svg';

const SchedulerChoose: React.FC = () => {
  const [toggle, setToggle] = useState(false),
        days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        [select, setSelect] = useState(days[0]);
        
  const changeDay = (index: number) => {
    setSelect(days[index]);
    setToggle(false);
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
          select === day || <div
          className="details__select"
          onClick={() => changeDay(i)}>
          {day}</div>
        ))}
      </>}
      <div className="details__scheduler-day">
        <div className="details__subject-day">ТРПО</div>
        <div className="details__time-day">
          <div>
            <span className='details__time_type'>Лаб. работа</span>
            9:40-11:10
            <span>7 здание</span>
            <span>215 кабинет</span>
          </div>
        </div>
        <div className="details__subject-day">Информационные технологии</div>
        <div className="details__time-day">
          <div>
            <span className='details__time_type'>Лаб. работа</span>
            9:40-11:10
            <span>7 здание</span>
            <span>215 кабинет</span>
          </div>
        </div>
        <div className="details__subject-day  details__lastb">ТРПО</div>
        <div className="details__time-day  details__lastb">
          <div>
            <span className='details__time_type'>Лаб. работа</span>
            9:40-11:10
            <span>7 здание</span>
            <span>215 кабинет</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  SchedulerChoose;