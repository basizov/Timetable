import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../app/stores/store';
import KAILogo from './svg/logotip-KAI.svg';

const HomePage: React.FC = () => {
  return (
    <section className="home">
      <div className="home__header">
        <div className="home__logo">
          <img src={KAILogo} alt="KAILogo"/>
        </div>
        <h1 className="home__title">Расписание</h1>
        <h2 className="home__subtitle">Для студентов КАИ</h2>
        {store.userStore.isLoggedIn ?
        <Link to='/scheduler' className="link home__link">Просмотр расписания групп</Link> :
        <Link to='/login' className="link home__link">Войти</Link>}
      </div>
    </section>
  );
};

export default  HomePage;