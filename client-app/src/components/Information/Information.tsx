import React from 'react';
import Modal from '../../features/Modal/Modal';
import info from '../../assets/info.svg';

const Information: React.FC = () => {
  return (
    <Modal>
      <section className="information">
        <img src={info} alt="icon" className='information__icon' />
        <h2 className="information__title">Информация</h2>
        <h3 className="information__subtitle">Как пользоваться сайтом?</h3>
        <ol className="information__instructions">
          <li className="information__instruction">1</li>
          <li className="information__instruction">2</li>
          <li className="information__instruction">3</li>
          <li className="information__instruction">4</li>
          <li className="information__instruction">5</li>
        </ol>
      </section>
    </Modal>
  );
};

export default  Information;