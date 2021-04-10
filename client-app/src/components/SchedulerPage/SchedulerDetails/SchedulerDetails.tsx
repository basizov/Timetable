import React from 'react';
import info from './svg/info.svg';

const SchedulerDetails: React.FC = () => {
  return (
    <div className="details">
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
    </div>
  );
};

export default  SchedulerDetails;