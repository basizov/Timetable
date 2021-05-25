import React, { useEffect, useRef } from 'react';
import { IPost } from '../../app/api/models/post';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import CommentsForm from './CommentsForm';
import CommentsList from './CommentsList';

interface IProps {
  post: IPost;
  setPost: (value: IPost | null) => void;
}

const Comments: React.FC<IProps> = ({post, setPost}) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const handler = (e: Event) => {
    if (targetRef.current && e.target instanceof Node && !targetRef.current.contains(e.target)) {
      setPost(null);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handler);
    return(() => document.removeEventListener('mousedown', handler))
  });
  
  return (
    <div className="comments" ref={targetRef}>
      <div className="comments__close" onClick={() => setPost(null)}>
        <span></span>
        <span></span>
      </div>
      <div className="comments__title">{post.title}</div>
      <div className="comments__time">
        {`${format(post.createdTime!, 'dd MMMM yyyy', { locale: ru })} ${new Date(post.createdTime!.getTime() - post.createdTime!.getTimezoneOffset() * 60000).toLocaleTimeString()}`}
      </div>
      <CommentsList />
      <CommentsForm />
    </div>
  );
};

export default  Comments;