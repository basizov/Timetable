import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <section className="home">
      <Link to='/news' className='link'>Перейти к новастям</Link>
    </section>
  );
};

export default  Home;