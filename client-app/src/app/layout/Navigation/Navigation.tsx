import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './svg/timetableLogo.svg';
import down from './svg/down.svg';
import userIcon from './svg/defaultUser.svg';

interface Hamburger {
  btnActiveClass: string;
  sidebarActiveClass: string;
  isActive: boolean;
}

const Navgation: React.FC = () => {
  const initialState = {
    btnActiveClass: "",
    sidebarActiveClass: "",
    isActive: false
  };
  const [active, setActive] = useState<Hamburger>(initialState);

  return (
    <nav className="navigation">
      <div className="container">
        <div
          className={"navigation__more " + active.btnActiveClass}
          onClick={() => {
            if (!active.isActive) {
              setActive({
                btnActiveClass: "navigation__more_active",
                sidebarActiveClass: "navigation__links_active",
                isActive: true
              });
            } else {
              setActive(initialState);
            }
          }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navigation__wrapper">
          <div className={"navigation__links " + active.sidebarActiveClass}>
            <Link to='/' className="navigation__link">
              <div className="navigation__logo">
                <img src={logo} alt="navigationIcon"/>
              </div>
              <div className="navigation__text">Главная</div>
            </Link>
            <Link to='/scheduler' className="navigation__link">
              <div className="navigation__text">Рассписание групп</div>
            </Link>
            <div className="navigation__link">
              <div className="navigation__text">Ошибки</div>
            </div>
          </div>
          <div className="navigation__user">
            <img
              src={userIcon}
              alt="profile"
              className="navigation__usericon" />
            <img
              src={down}
              alt="down"
              className="navigation__down" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default  Navgation;