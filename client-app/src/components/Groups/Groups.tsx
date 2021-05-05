import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../../features/List/Item';
import List from '../../features/List/List';
import Modal from '../../features/Modal/Modal';

const Groups: React.FC = () => {
  return (
    <Modal>
      <section className="groups">
        <input
          type="text"
          className="input groups__search"
          onFocus={(e) => e.target.select()}
          placeholder='Расписание какой группы найти?' />
        <List className="groups__list">
          <Item className="groups__item"><Link to='/groups/4331'>4331</Link></Item>
          <Item className="groups__item"><Link to='/groups/4332'>4332</Link></Item>
          <Item className="groups__item"><Link to='/groups/4333'>4333</Link></Item>
          <Item className="groups__item"><Link to='/groups/4334'>4334</Link></Item>
          <Item className="groups__item"><Link to='/groups/4335'>4335</Link></Item>
          <Item className="groups__item"><Link to='/groups/4336'>4336</Link></Item>
          <Item className="groups__item"><Link to='/groups/4337'>4337</Link></Item>
          <Item className="groups__item"><Link to='/groups/4338'>4338</Link></Item>
          <Item className="groups__item"><Link to='/groups/4339'>4339</Link></Item>
          <Item className="groups__item"><Link to='/groups/4340'>4340</Link></Item>
          <Item className="groups__item"><Link to='/groups/4341'>4341</Link></Item>
          <Item className="groups__item"><Link to='/groups/4342'>4342</Link></Item>
          <Item className="groups__item"><Link to='/groups/4343'>4343</Link></Item>
          <Item className="groups__item"><Link to='/groups/4344'>4344</Link></Item>
        </List>
      </section>
    </Modal>
  );
};

export default  Groups;