import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../features/Loading/Loading';
import Pages from '../../features/Pages/Pages';
import Textarea from '../../features/Textarea/Textarea';

const Apply: React.FC = () => {
  const [description, setDescription] = useState("");
	const [reset, setReset] = useState(false);

  return (
    <Pages>
      <section className="apply">
        <form className="form apply__form">
          <div className="apply__data">
            <input
              type="text"
              placeholder="Введите ваше имя"
              name="name"
              onFocus={(e) => e.target.select()}
              className="input"></input>
            <input
              type="text"
              placeholder="Введите вашу фамилию"
              name="surname"
              onFocus={(e) => e.target.select()}
              className="input"></input>
            <input
              type="text"
              placeholder="Введите ваше отчество"
              name="patronic"
              onFocus={(e) => e.target.select()}
              className="input"></input>
            <Textarea
              text={description}
              setText={setDescription}
              reset={reset}
              placeholder="Почему вы хотите начать пользоваться нашим сервисом?"
              setReset={setReset}
              rows={1}
              className='apply__textarea' />
            <div className="apply__btns">
              <button
                className="btn btn--success apply__btn">
                {false ? <Loading
                  width={15}
                  height={15}
                  spanWidth={3}
                  spanHeight={3}
                  backgroundColor="#fff" /> : 'Подать заявку'}
              </button>
                <button
                  className="btn btn--error apply__btn">Стереть</button>
            </div>
            <Link to="/login" className="link apply__link">Авторизироваться на сайте</Link>
          </div>
          <div className="apply__types">
            <textarea className="apply__type" readOnly={true} />
            <textarea className="apply__type" readOnly={true} />
          </div>
        </form>
      </section>
    </Pages>
  );
};

export default  Apply;