import { observer } from 'mobx-react-lite';
import React from 'react';
import { IPost } from '../../app/api/models/post';
import Post from '../../features/Post/Post';
import archive from '../../assets/post/archive.svg';
import code from '../../assets/post/code.svg';
import download from '../../assets/post/download.svg';
import excel from '../../assets/post/excel.svg';
import file from '../../assets/post/file.svg';
import pdf from '../../assets/post/pdf.svg';
import powerpoint from '../../assets/post/powerpoint.svg';
import video from '../../assets/post/video.svg';
import word from '../../assets/post/word.svg';
import comments from '../../assets/post/comments.svg';
import settings from '../../assets/post/settings.svg';
import { store } from '../../app/stores/store';

interface IProps {
  posts: IPost[];
}

const NewsPosts: React.FC<IProps> = ({posts}) => {
  const convertTypeToIcon = (name: string) => {
    const split = name.split('.');
    const type = split[split.length - 1];

    if (type === 'docx') return (word);
    else if (type === 'pdf') return (pdf);
    else if (type === 'xls') return (excel);
    else if (type === 'cs') return (code);
    else if (type === 'pptx') return (powerpoint);
    else if (type === 'rar' || type === 'zip') return (archive);
    else if (type === 'mp3') return (video);
    else return (file);
  }

  return (
    <div className="news__posts">
      {posts && posts.map((post) => (
        <Post key={post.id}>
          <div className="post__menu">
            <img src={comments} alt="comments" className="post__comments" />
            {store.userStore.user && store.userStore.user.isAdmin &&
            <img src={settings} alt="settings" className="post__settings" />}
          </div>
          <h2 className="post__title">{post.title}</h2>
          {post.description && <div className="post__description">
            <span>{post.description}</span>
          </div>}
          {post.photos && post.photos.length > 0 && <div className="post__images">
            <h2 className="post__subtitle">Изображения</h2>
            {post.photos.map((photo, i) => {
              let additionalClassname = '';

              if (post.photos?.length === 1) additionalClassname = 'post__image--full';
              else if (post.photos && post.photos.length % 2 === 1 && i === 2) additionalClassname = 'post__image--vertical';
              return (<div key={photo.id} className={`post__image ${additionalClassname}`}>
                  <img
                    src={photo.url}
                    alt={`${photo.url}`} />
                </div>)
            })}
          </div>}
          {post.files && post.files.length > 0 && <div className="post__files">
            <h2 className="post__subtitle">Файлы</h2>
            {post.files.map((file) => (
              <div
                key={file.id}
                className="post__file"
                onClick={() => store.fileStore.downloadFile(file)}>
                <img src={convertTypeToIcon(file.name)} alt="icon" className="post__file-icon" />
                <div className="post__file-name">{file.name}</div>
                <img src={download} alt="download" className="post__file-download" />
              </div>
            ))}
          </div>}
        </Post>
      ))}
    </div>
  );
};

export default  observer(NewsPosts);