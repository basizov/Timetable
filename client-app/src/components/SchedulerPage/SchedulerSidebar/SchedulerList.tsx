import React from 'react';
import { Link } from 'react-router-dom';
import resize from './svg/resize.svg';

const SchedulerList: React.FC = () => {
  return (
    <div className="sidebar__list">
      <div className="sidebar__group">
          <div className="sidebar__group_name">
            <Link to={`/scheduler/4331`} className="sidebar__link">
              4331
            </Link>
            <div className="sidebar__group_text">4331</div>
          </div>
          <Link to={`/scheduler/4331`} className="sidebar__fullscrin">
            <img src={resize} alt="resize"/>
          </Link>
        
      </div>
      <div className="sidebar__group">
        <div className="sidebar__group_name">4332</div>
        <div className="sidebar__fullscrin">
          <img src={resize} alt="resize"/>
        </div>
      </div>
      <div className="sidebar__group">
        <div className="sidebar__group_name">4333</div>
        <div className="sidebar__fullscrin">
          <img src={resize} alt="resize"/>
        </div>
      </div>
      <div className="sidebar__group">
        <div className="sidebar__group_name">4334</div>
        <div className="sidebar__fullscrin">
          <img src={resize} alt="resize"/>
        </div>
      </div>
      <div className="sidebar__group">
        <div className="sidebar__group_name">4335</div>
        <div className="sidebar__fullscrin">
          <img src={resize} alt="resize"/>
        </div>
      </div>
      <div className="sidebar__group">
        <div className="sidebar__group_name">4336</div>
        <div className="sidebar__fullscrin">
          <img src={resize} alt="resize"/>
        </div>
      </div>
      <div className="sidebar__group">
        <div className="sidebar__group_name">4337</div>
        <div className="sidebar__fullscrin">
          <img src={resize} alt="resize"/>
        </div>
      </div>
      <div className="sidebar__group">
        <div className="sidebar__group_name">4348</div>
        <div className="sidebar__fullscrin">
          <img src={resize} alt="resize"/>
        </div>
      </div>
      <div className="sidebar__group">
        <div className="sidebar__group_name">4339</div>
        <div className="sidebar__fullscrin">
          <img src={resize} alt="resize"/>
        </div>
      </div>
      <div className="sidebar__group">
        <div className="sidebar__group_name">4340</div>
        <div className="sidebar__fullscrin">
          <img src={resize} alt="resize"/>
        </div>
      </div>
      <div className="sidebar__group">
        <div className="sidebar__group_name">4341</div>
        <div className="sidebar__fullscrin">
          <img src={resize} alt="resize"/>
        </div>
      </div>
      <div className="sidebar__group">
        <div className="sidebar__group_name">4342</div>
        <div className="sidebar__fullscrin">
          <img src={resize} alt="resize"/>
        </div>
      </div>
      <div className="sidebar__group">
        <div className="sidebar__group_name">4343</div>
        <div className="sidebar__fullscrin">
          <img src={resize} alt="resize"/>
        </div>
      </div>
      <div className="sidebar__group">
        <div className="sidebar__group_name">4344</div>
        <div className="sidebar__fullscrin">
          <img src={resize} alt="resize"/>
        </div>
      </div>
    </div>
  );
};

export default  SchedulerList;