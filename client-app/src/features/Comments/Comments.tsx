import React, { useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import CommentsForm from './CommentsForm';
import CommentsList from './CommentsList';
import { store } from '../../app/stores/store';
import { observer } from 'mobx-react-lite';

interface IProps {
  postId: string;
}

const Comments: React.FC<IProps> = ({postId}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const {
    postStore: { selectedPost: post, setSelectedPost },
    commentStore: { createHubConnection, clearComments, comments, loading, addComment }
  } = store;

  const handler = (e: Event) => {
    if (targetRef.current && e.target instanceof Node && !targetRef.current.contains(e.target)) {
      setSelectedPost(null);
    }
  }

  useEffect(() => {
    if (postId) createHubConnection(postId);
    return(() => clearComments())
  }, [createHubConnection, clearComments, postId]);
  useEffect(() => {
    document.addEventListener('mousedown', handler);
    return(() => document.removeEventListener('mousedown', handler))
  });
  
  return (
    <div className="comments" ref={targetRef}>
      <div className="comments__close" onClick={() => setSelectedPost(null)}>
        <span></span>
        <span></span>
      </div>
      <div className="comments__title">{post!.title}</div>
      <div className="comments__time">
        {`${format(post!.createdTime!, 'dd MMMM yyyy', { locale: ru })} ${new Date(post!.createdTime!.getTime() - post!.createdTime!.getTimezoneOffset() * 60000).toLocaleTimeString()}`}
      </div>
      <CommentsList comments={comments} loading={loading} />
      <CommentsForm loading={loading} addComment={addComment} />
    </div>
  );
};

export default  observer(Comments);