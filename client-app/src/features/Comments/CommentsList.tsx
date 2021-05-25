import { formatDistanceToNow } from 'date-fns';
import ru from 'date-fns/esm/locale/ru/index.js';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import { IMessage } from '../../app/api/models/message';
import { store } from '../../app/stores/store';
import Item from '../List/Item';

interface IProps {
  comments: IMessage[];
  loading: boolean;
}

const CommentsList: React.FC<IProps> = ({comments, loading}) => {
	const list = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (list && list.current) {
      list.current.scrollTop = list.current.scrollHeight;
    }
  }, [comments, loading]);

  return (
    <div className="list comments__list" ref={list}>
      {comments.map((comment) => {
        if (comment.username === store.userStore.user?.username) return (
          <Item key={comment.id} className="comments__item-self">{comment.body}</Item>
        );
        return (
          <Item key={comment.id} className="comments__item">
            <span className="comments__item-sender">{comment.displayname}</span>
            <span className="comments__item-time">{formatDistanceToNow(comment.createdTime, { locale: ru })} назад</span>
            <span className="comments__item-text">{comment.body}</span>
          </Item>
        );
      })}
    </div>
  );
};

export default  observer(CommentsList);