import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../app/stores/store';
import server from '../../assets/server.svg';

const ServerError: React.FC = () => {
  return (
    <section className="server">
      <div className="server__wrapper">
        <div className="server__left">
          <div className="server__header">
            <h2 className="server__code">{store.commonStore.error?.statusCode ?? 500}</h2>
            <h3 className="server__message">Ошибка сервера</h3>
          </div>
          <Link to="/" className="link server__link">Перейти на главную страницу</Link>
          <div className="server__details">{store.commonStore.error?.message ?? 'Внутрення ошибка сервера'}</div>
        </div>
        <div className="server__right">
          <img src={server} alt="server" />
        </div>
      </div>
    </section>
  );
};

export default  ServerError;