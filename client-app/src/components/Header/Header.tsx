import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../app/stores/store';
import kai from '../../assets/socials/kai.svg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div
        className={`header__more ${store.commonStore.showSidebar && 'active'}`}
        onClick={() => store.commonStore.setShowSidebar(!store.commonStore.showSidebar)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className="navigation">
        <Link to='/' className="navigation__item">Главная</Link>
        <Link to='/news' className="navigation__item">Новости</Link>
        <Link to='/info' className="navigation__item">Информация</Link>
        <Link to='/groups' className="navigation__item">Группы</Link>
      </nav>
      <div className="header__utils">
        {!store.userStore.isLoggedIn && <Link to='/login' className="btn btn--success header__login">Авторизоваться</Link>}
        <div className="header__logo">
          <a href="https://kai.ru/"><img src={kai} alt="logo" className="sidebar__logo"/></a>
        </div>
      </div>
    </header>
  );
};

export default  observer(Header);