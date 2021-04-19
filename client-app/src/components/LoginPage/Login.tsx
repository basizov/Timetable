import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IUserForm } from '../../app/api/models/user';
import Loading from '../../app/layout/Loading/Loading';
import { useStore } from '../../app/stores/store';
import KAILogo from '../HomePage/svg/logotip-KAI.svg';

const Login: React.FC = () => {
  const initialState: IUserForm = {
    email: "",
    password: ""
  };
  const { userStore } = useStore(),
        [creds, setCreds] = useState<IUserForm>(initialState);
  const { email, password } = creds;
  
  const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreds({...creds, [e.target.name]: e.target.value});
  }
  
  return (
    <section className="login">
      <div className="login__wrapper">
        <Link to='/' className="login__logo">
          <img src={KAILogo} alt="KAILogo"/>
        </Link>
        <form className="login__form">
          <input
            id="log-email"
            name="email"
            onChange={changeValueHandler}
            value={email}
            placeholder="Введите вашу электронную почту:"
            className="input" />
          <input
            id="log-password"
            type="password"
            name="password"
            onChange={changeValueHandler}
            value={password}
            placeholder="Введите ваш пароль:"
            className="input" />
            <div className="login__btns">
              <button
                className="login__enter btn__form btn__enter"
                onClick={(e) => {
                  e.preventDefault();
                  userStore.login(creds);
                }}>
                {userStore.loading ? <Loading content={null} classes='loading__btn-loaded' /> : "Войти"}</button>
              <button
                className="login__clear btn__form btn__clear"
                onClick={(e) => {
                  e.preventDefault();
                  setCreds(initialState);
                }}>
                Стереть</button>
            </div>
        </form>
      </div>
    </section>
  );
};

export default  observer(Login);