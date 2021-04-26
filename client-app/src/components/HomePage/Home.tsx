import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';

const Home: React.FC = () => {
  return (
    <section className="home">
      <header className="home__header">
        <a href="https://kai.ru/"><img src={logo} alt="logo" className="home__icon"/></a>
        <h1 className="home__title">Расписание занятий</h1>
        <h2 className="home__subtitle">Для студентов КАИ</h2>
        <Link to='/scheduler' className='link home__link'>Просмотр расписания</Link>
      </header>
    </section>
  );
};

export default  Home;