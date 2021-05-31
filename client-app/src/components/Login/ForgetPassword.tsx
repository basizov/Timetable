import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../features/Loading/Loading';
import Pages from '../../features/Pages/Pages';
import Slider from '../../features/Slider/Slider';
import vk from '../../assets/socials/vk.svg';
import insta from '../../assets/socials/instagram.svg';
import { IUserForm } from '../../app/api/models/user';
import { useStore } from '../../app/stores/store';

const ForgetPassword: React.FC = () => {
  const initialState: IUserForm = {
    login: "",
    password: "",
    replayPassword: ""
  };
  const [creds, setCreds] = useState<IUserForm>(initialState);
  const { userStore: { loading } } = useStore();
  
  const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreds({...creds, [e.target.name]: e.target.value});
  }
  
  return (
    <Pages>
      <section className="login">
        <h2 className="login__title">Востановить пароль</h2>
        <ul className="login__socials">
          <li className="login__social">
            <a href="https://vk.com/kaiknitu"><img src={vk} alt="vk"/></a>
          </li>
          <li className="login__social">
            <a href="https://vk.com/kaiknitu"><img src={insta} alt="insta"/></a>
          </li>
        </ul>
        <div className="login__content">
          <form className="form">
            <input
              type="text"
              placeholder="Введите ваш логин"
              name="login"
              value={creds.login}
              onChange={changeValueHandler}
              onFocus={(e) => e.target.select()}
              className="input login__input"></input>
            <input
              type="password"
              placeholder="Введите новый пароль"
              name="password"
              value={creds.password}
              onChange={changeValueHandler}
              onFocus={(e) => e.target.select()}
              className="input login__input"></input>
            <input
              type="password"
              placeholder="Повторите новый пароль"
              name="replayPassword"
              value={creds.replayPassword}
              onChange={changeValueHandler}
              onFocus={(e) => e.target.select()}
              className="input login__input"></input>
              <div className="login__btns">
                <button className="btn btn--success login__btn">
                  {loading ? <Loading
                    width={15}
                    height={15}
                    spanWidth={3}
                    spanHeight={3}
                    backgroundColor="#fff" /> : 'Восстановить'}
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();

                    setCreds(initialState);
                  }}
                  className="btn btn--error login__btn">Стереть</button>
              </div>
            <Link to="/login" className="link login__link">Вернуться к авторизации</Link>
          </form>
          <Slider className="login__slider" elemets={
            [
              <img src="/assets/hostels/first.jpg" alt="fstHostel" />,
              <img src="/assets/hostels/second.jpg" alt="secHostel" />,
              <img src="/assets/hostels/third.jpg" alt="thiHostel" />,
              <img src="/assets/hostels/fourth.jpg" alt="fourHostel" />,
              <img src="/assets/hostels/fiveth.jpg" alt="fiveHostel" />,
              <img src="/assets/hostels/sixth.jpg" alt="sixHostel" />,
              <img src="/assets/hostels/seventh.jpg" alt="sevHostel" />,
            ]
          } />
        </div>
      </section>
    </Pages>
  );
};

export default  ForgetPassword;