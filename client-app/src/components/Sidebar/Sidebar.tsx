import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <img src="/assets/clock.jpg" alt="clock" className="sidebar__img"/>
      <div className="profile">
        <div className="profile__icon">
          <img src="https://via.placeholder.com/100" alt="user-icon" />
        </div>
        <div className="profile__info">
          <div className="profile__name">Сизов Борис</div>
          <div className="profile__group">Группа 4343</div>
        </div>
      </div>
      <div className="sidebar__help">
        <div className="sidebar__scheduler-title">Рассписание на завтра:</div>
        <ul className="sidebar__scheduler">
          <li
            data-title='08:00 - 09:30'
            className="sidebar__scheduler-item">Технология разработки программного обеспечения</li>
          <li
            data-title='09:40 - 11:10'
            className="sidebar__scheduler-item">Безопасность жизнедеятельности</li>
          <li
            data-title='11:20 - 12:50'
            className="sidebar__scheduler-item">Информационные технологии</li>
          <li
            data-title='13:30 - 15:00'
            className="sidebar__scheduler-item">Физическая культура</li>
          <li
            data-title='15:10 - 16:40'
            className="sidebar__scheduler-item">Системное программирование</li>
        </ul>
      </div>
    </aside>
  );
};

export default  Sidebar;