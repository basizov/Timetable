import React from 'react';
import Pages from '../../features/Pages/Pages';
import info from '../../assets/info.svg';

const Information: React.FC = () => {
  return (
    <Pages>
      <section className="information">
        <form className="information__slider">
          <input
            type="radio"
            name="information__slider"
            className="information__slide"
            id="fst-slide"
            defaultChecked />
          <input
            type="radio"
            name="information__slider"
            className="information__slide"
            id="sec-slide" />
          <input
            type="radio"
            name="information__slider"
            className="information__slide"
            id="thd-slide" />
          <input
            type="radio"
            name="information__slider"
            className="information__slide"
            id="fou-slide" />
          <input
            type="radio"
            name="information__slider"
            className="information__slide"
            id="fiv-slide" />

          <label
            htmlFor="fst-slide"
            className="information__label"
            id="slide-fst">
            <img src={info} alt="info" className="information__icon" />
            <h2 className="information__title">Правило №1</h2>
            <img src={info} alt="info" className="information__icon" />
          </label>
          <label
            htmlFor="sec-slide"
            className="information__label"
            id="slide-sec">
            <img src={info} alt="info" className="information__icon" />
            <h2 className="information__title">Правило №2</h2>
            <img src={info} alt="info" className="information__icon" />
          </label>
          <label
            htmlFor="thd-slide"
            className="information__label"
            id="slide-thd">
            <img src={info} alt="info" className="information__icon" />
            <h2 className="information__title">Правило №3</h2>
            <img src={info} alt="info" className="information__icon" />
          </label>
          <label
            htmlFor="fou-slide"
            className="information__label"
            id="slide-fou">
            <img src={info} alt="info" className="information__icon" />
            <h2 className="information__title">Правило №4</h2>
            <img src={info} alt="info" className="information__icon" />
          </label>
          <label
            htmlFor="fiv-slide"
            className="information__label"
            id="slide-fiv">
            <img src={info} alt="info" className="information__icon" />
            <h2 className="information__title">Правило №5</h2>
            <img src={info} alt="info" className="information__icon" />
          </label>
        </form>
      </section>
    </Pages>
  );
};

export default  Information;