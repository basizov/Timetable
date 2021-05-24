import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../assets/notfound.svg';
import Modal from '../../features/Modal/Modal';

const NotFound: React.FC = () => {
  return (
    <Modal>
      <section className="notfound">
        <div className="notfound__wrapper">
          <div className="notfound__header">
            <h2 className="notfound__error">4</h2>
            <img className="notfound__icon" src={notfound} alt="notfound" />
            <h2 className="notfound__error">4</h2>
          </div>
          <div className="notfound__message">Извините, данной страницы не существует : &#40;</div>
          <Link to="/" className="link notfound__link">Перейти на главную страницу</Link>
        </div>
      </section>
    </Modal>
  );
};

export default  NotFound;