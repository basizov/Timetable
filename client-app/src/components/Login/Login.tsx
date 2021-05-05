import React from 'react';
import Slider from '../../features/Slider/Slider';
import vk from '../../assets/socials/vk.svg';
import insta from '../../assets/socials/instagram.svg';
import { Link } from 'react-router-dom';
import Modal from '../../features/Modal/Modal';

const Login: React.FC = () => {
  return (
    <Modal>
      <section className="login">
        <h2 className="login__title">Авторизация</h2>
        <ul className="login__socials">
          <li className="login__social">
            <a href="#"><img src={vk} alt="vk"/></a>
          </li>
          <li className="login__social">
            <a href="#"><img src={insta} alt="insta"/></a>
          </li>
        </ul>
        <div className="login__content">
          <form className="form">
            <input
              type="text"
              placeholder="Введите ваш логин"
              onFocus={(e) => e.target.select()}
              className="input login__input"></input>
            <input
              type="password"
              placeholder="Введите ваш пароль"
              onFocus={(e) => e.target.select()}
              className="input login__input"></input>
              <div className="login__btns">
                <button className="btn btn--success login__btn">Войти</button>
                <button className="btn btn--error login__btn">Стереть</button>
              </div>
            <Link to="/forgot" className="link login__link">Забыли пароль?</Link>
          </form>
          <div className="login__slider">
            <Slider elemets={
              [
                <img src="/assets/buildings/first.jpg" alt="fstBuilding" />,
                <img src="/assets/buildings/second.jpg" alt="secBuilding" />,
                <img src="/assets/buildings/third.jpg" alt="thiBuilding" />,
                <img src="/assets/buildings/fourth.jpg" alt="fourBuilding" />,
                <img src="/assets/buildings/fiveth.jpg" alt="fiveBuilding" />,
                <img src="/assets/buildings/sixth.jpg" alt="sixBuilding" />,
                <img src="/assets/buildings/seventh.jpg" alt="sevBuilding" />,
                <img src="/assets/buildings/eightth.jpg" alt="eightBuilding" />
              ]
            } />
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default  Login;