import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="home__header">
        <h1 className="home__title">Расписание занятий</h1>
        <h2 className="home__subtitle">Для студентов КАИ</h2>
        <Link to='/news' className='link home__link'>Перейти на сайт</Link>
      </div>
    </section>
  );
};

export default  Home;