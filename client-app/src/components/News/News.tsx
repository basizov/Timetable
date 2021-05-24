import React, { useEffect } from 'react';
import Navigation from '../../features/Paging/Paging';
import { store, useStore } from '../../app/stores/store';
import Loading from '../../features/Loading/Loading';
import Modal from '../../features/Pages/Pages';
import { observer } from 'mobx-react-lite';
import NewsForm from './NewsForm';
import NewsPosts from './NewsPosts';

const News: React.FC = () => {
  const { postStore:
    {
      postRegystry,
      loadPosts,
      loading,
      loadingInitial,
      getPosts: posts, 
      createPost,
      pagination,
      setPagingParams,
      clearPosts
    }
  } = useStore();

  useEffect(() => {
    if (postRegystry.size <= 1) loadPosts();
  }, [postRegystry.size, loadPosts]);

  if (loadingInitial) return <Modal className='modal--block'><Loading backgroundColor="#fff" /></Modal>
  return (
    <section className="news news--light">
      {posts && posts.length > 0 && <Navigation
        clear={clearPosts}
        load={loadPosts}
        setPagingParams={setPagingParams}
        pagination={pagination}
        className={'paging--mb'} />}

      {store.userStore.user && store.userStore.user.isAdmin &&
      <NewsForm loading={loading} createPost={createPost} />}

      <NewsPosts posts={posts} />
      
      {posts && posts.length > 0 && <Navigation
        clear={clearPosts}
        load={loadPosts}
        setPagingParams={setPagingParams}
        className="news__nav-bot"
        pagination={pagination} />}
    </section>
  );
};

export default  observer(News);