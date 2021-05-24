import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import Loading from '../Loading/Loading';
import Textarea from '../Textarea/Textarea';

const CommentsForm: React.FC = () => {
	const [comment, setComment] = useState("");
	const [reset, setReset] = useState(false);
  
	const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    
    setReset(true);
	};
  
  return (
    <form className="comments__form">
      <Textarea
        text={comment}
        placeholder="Текст нового комментария..."
        rows={1}
        setText={setComment}
        reset={reset}
        setReset={setReset}
        className='comments__textarea' />
      <div>
        <button
          onClick={(e) => onButtonClick(e)}
          className="btn btn--success comments__btn">
          {false ? <Loading
            width={15}
            height={15}
            spanWidth={3}
            spanHeight={3}
            backgroundColor="#fff" /> : 'Отправить'}</button>
      </div>
    </form>
  );
};

export default observer(CommentsForm);