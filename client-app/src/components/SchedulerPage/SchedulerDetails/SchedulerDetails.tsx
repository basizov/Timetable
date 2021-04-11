import React from 'react';
import info from './svg/info.svg';

const SchedulerDetails: React.FC = () => {
  return (
    <div className="details">
      {true ?
      <div className="details__scheduler">
        <div className="details__day">Предмет</div>
        <div className="details__day">Понедельник</div>
        <div className="details__day">Вторник</div>
        <div className="details__day">Среда</div>
        <div className="details__day">Четверг</div>
        <div className="details__day">Пятница</div>
        <div className="details__day details__lastr">Суббота</div>
        <div className="details__subject">ТРПО</div>
        <div className="details__time">
          <div>
            <span>Лаб. работа</span>
            9:40-11:10
          </div>
        </div>
        <div className="details__time"></div>
        <div className="details__time">
          <div>
            <span>Лекция</span>
            3:30-15:00
          </div>
        </div>
        <div className="details__time"></div>
        <div className="details__time"></div>
        <div className="details__time details__lastr">
          <div>
            <span>Практика</span>
            8:00-9:30
          </div>
        </div>
        <div className="details__subject">БЖД</div>
        <div className="details__time">
          <div>
            <span>Практика</span>
            8:00-9:30
          </div>
        </div>
        <div className="details__time"></div>
        <div className="details__time"></div>
        <div className="details__time">
          <div>
            <span>Практика</span>
            8:00-9:30
          </div>
        </div>
        <div className="details__time"></div>
        <div className="details__time details__lastr"></div>
        <div className="details__subject">Системное программирование</div>
        <div className="details__time"></div>
        <div className="details__time"></div>
        <div className="details__time">
          <div>
            <span>Лаб. работа</span>
            8:00-9:30
          </div>
        </div>
        <div className="details__time"></div>
        <div className="details__time"></div>
        <div className="details__time details__lastr"></div>
        <div className="details__subject details__lastb">Информационные технологии</div>
        <div className="details__time details__lastb"></div>
        <div className="details__time details__lastb">
          <div>
            <span>Лаб. работа</span>
            15:00-18:10
          </div>
        </div>
        <div className="details__time details__lastb"></div>
        <div className="details__time details__lastb"></div>
        <div className="details__time details__lastb"></div>
        <div className="details__time details__lastr details__lastb"></div>
      </div> :
      <div className="details__info">
        <img
          className="details__img"
          src={info}
          alt="info" />
        <div className="details__wrapper">
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

export default  SchedulerDetails;