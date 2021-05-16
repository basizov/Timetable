import React, { useEffect, useRef, useState } from 'react';
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
import Navigation from '../../features/Paging/Paging';
import { useStore } from '../../app/stores/store';
import Loading from '../../features/Loading/Loading';
import Modal from '../../features/Modal/Modal';
import { observer } from 'mobx-react-lite';
import { v4 as uuid } from 'uuid';

const News: React.FC = () => {
  const { postStore: { postRegystry, loadPosts, loading, getPosts: posts, createPost } } = useStore();
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const [text, setText] = useState("");
	const [textAreaHeight, setTextAreaHeight] = useState("auto");
	const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

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

  useEffect(() => {
    if (postRegystry.size <= 1) loadPosts();
  }, [postRegystry.size, loadPosts]);
	useEffect(() => {
    if (textAreaRef && textAreaRef.current) {
      setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
    }
	}, [text]);

	const onTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextAreaHeight("auto");
		setText(event.target.value);
	};

	const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    
		setText("");
		setTextAreaHeight("auto");
    createPost({
      id: uuid(),
      title: "Test",
      description: "Test",
      photos: null,
      files: selectedFiles
    });
	};

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(event.target.files);
  }

  if (loading) return <Modal className='modal--block'><Loading backgroundColor="#fff" /></Modal>
  return (
    <section className="news news--light">
      {false && <Navigation />}
      {true && <form className="news__form">
        <textarea
          ref={textAreaRef}
          rows={2}
          style={{ height: textAreaHeight }}
          onChange={onTextareaChange}
          onFocus={(e) => e.target.select()}
          placeholder="Текст новой новости..."
          value={text}
          name="newPost"
          className="textarea news__textarea"></textarea>
        <div className="news__actions">
          <label htmlFor="uploadFile" className="btn news__label">
            <input
              className="input__file" 
              id="uploadFile" 
              onChange={(e) => onFileChange(e)}
              type="file"
              multiple={true} />
              Выбрать файлы
          </label>
          <button
          onClick={(e) => onButtonClick(e)}
            className="btn btn--success form__btn">
            Выложить</button>
        </div>
      </form>}
      <div className="news__posts">
        {posts && posts.map((post) => (
          <Post key={post.id} fstUser={false}>
            <h2 className="post__title">{post.title}</h2>
            {post.description && <div className="post__description">
              <span>{post.description}</span>
            </div>}
            {post.photos && post.photos.length > 0 && <div className="post__images">
              <h2 className="post__subtitle">Изображения</h2>
              {post.photos.map((photo) => (
                <img key={photo.id} src={photo.url} alt="" className="post__image"/>
              ))}
              {/* <img src="/assets/clock.jpg" alt="" className="post__image post__image--vertical"/> */}
              {/* <img src="/assets/clock.jpg" alt="" className="post__image post__image--horizontal"/> */}
            </div>}
            {post.files && post.files.length > 0 && <div className="post__files">
              <h2 className="post__subtitle">Файлы</h2>
              {post.files.map((file) => (
                <div key={file.id} className="post__file">
                  <img src={convertTypeToIcon(file.name)} alt="icon" className="post__file-icon" />
                  <div className="post__file-name">{file.name}</div>
                  <img src={download} alt="download" className="post__file-download" />
                </div>
              ))}
            </div>}
          </Post>
        ))}
{/*         
        <Post fstUser={false}>
          <h2 className="post__title">Новый пост</h2>
          <div className="post__description">
            <span>New post</span>
            <span>New post</span>
            <span>New post</span>
            <span>New post</span>
          </div>
          <div className="post__videos">
            <h2 className="post__subtitle">Видео</h2>
          </div>
        </Post>
        <Post>
          <h2 className="post__title">Новый пост</h2>
          <div className="post__description">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit sequi ab laudantium ipsum architecto rem quos veniam fuga, asperiores explicabo quod? Placeat impedit dignissimos maiores, unde similique aliquam assumenda.</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit sequi ab laudantium ipsum architecto rem quos veniam fuga, asperiores explicabo quod? Placeat impedit dignissimos maiores, unde similique aliquam assumenda.</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit sequi ab laudantium ipsum architecto rem quos veniam fuga, asperiores explicabo quod? Placeat impedit dignissimos maiores, unde similique aliquam assumenda.</span>
          </div>
          <div className="post__images">
            <h2 className="post__subtitle">Изображения</h2>
            <img src="/assets/clock.jpg" alt="" className="post__image post__image--full"/>
          </div>
        </Post>
        <Post>
          <h2 className="post__title">Новый пост</h2>
          <div className="post__description">
            <span>New post</span>
          </div>
          <div className="post__files">
            <h2 className="post__subtitle">Файлы</h2>
            <div className="post__file">
              <img src={video} alt="icon" className="post__file-icon" />
              <div className="post__file-name">Тестовый файл для скачиванияТестовый файл для скачиванияТестовый файл для скачивания</div>
              <img src={download} alt="download" className="post__file-download" />
            </div>
            <div className="post__file">
              <img src={word} alt="icon" className="post__file-icon" />
              <div className="post__file-name">Тестовый файл для скачиванияТестовый файл для скачиванияТестовый файл для скачивания</div>
              <img src={download} alt="download" className="post__file-download" />
            </div>
            <div className="post__file">
              <img src={file} alt="icon" className="post__file-icon" />
              <div className="post__file-name">Тестовый файл для скачиванияТестовый файл для скачиванияТестовый файл для скачивания</div>
              <img src={download} alt="download" className="post__file-download" />
            </div>
          </div>
        </Post>
        <Post>
          <h2 className="post__title">Новый пост</h2>
          <div className="post__description">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit sequi ab laudantium ipsum architecto rem quos veniam fuga, asperiores explicabo quod? Placeat impedit dignissimos maiores, unde similique aliquam assumenda.</span>
          </div>
          <div className="post__videos">
            <h2 className="post__subtitle">Видео</h2>
          </div>
          <div className="post__images">
            <h2 className="post__subtitle">Изображения</h2>
            <img src="/assets/clock.jpg" alt="" className="post__image post__image--vertical"/>
            <img src="/assets/clock.jpg" alt="" className="post__image"/>
            <img src="/assets/clock.jpg" alt="" className="post__image"/>
            <img src="/assets/clock.jpg" alt="" className="post__image post__image--horizontal"/>
          </div>
          <div className="post__files">
            <h2 className="post__subtitle">Файлы</h2>
            <div className="post__file">
              <img src={archive} alt="icon" className="post__file-icon" />
              <div className="post__file-name">Тестовый файл для скачиванияТестовый файл для скачиванияТестовый файл для скачивания</div>
              <img src={download} alt="download" className="post__file-download" />
            </div>
            <div className="post__file">
              <img src={code} alt="icon" className="post__file-icon" />
              <div className="post__file-name">Тестовый файл для скачиванияТестовый файл для скачиванияТестовый файл для скачивания</div>
              <img src={download} alt="download" className="post__file-download" />
            </div>
            <div className="post__file">
              <img src={excel} alt="icon" className="post__file-icon" />
              <div className="post__file-name">Тестовый файл для скачиванияТестовый файл для скачиванияТестовый файл для скачивания</div>
              <img src={download} alt="download" className="post__file-download" />
            </div>
            <div className="post__file">
              <img src={pdf} alt="icon" className="post__file-icon" />
              <div className="post__file-name">Тестовый файл для скачиванияТестовый файл для скачиванияТестовый файл для скачивания</div>
              <img src={download} alt="download" className="post__file-download" />
            </div>
            <div className="post__file">
              <img src={powerpoint} alt="icon" className="post__file-icon" />
              <div className="post__file-name">Тестовый файл для скачиванияТестовый файл для скачиванияТестовый файл для скачивания</div>
              <img src={download} alt="download" className="post__file-download" />
            </div>
            <div className="post__file">
              <img src={video} alt="icon" className="post__file-icon" />
              <div className="post__file-name">Тестовый файл для скачиванияТестовый файл для скачиванияТестовый файл для скачивания</div>
              <img src={download} alt="download" className="post__file-download" />
            </div>
            <div className="post__file">
              <img src={word} alt="icon" className="post__file-icon" />
              <div className="post__file-name">Тестовый файл для скачиванияТестовый файл для скачиванияТестовый файл для скачивания</div>
              <img src={download} alt="download" className="post__file-download" />
            </div>
            <div className="post__file">
              <img src={file} alt="icon" className="post__file-icon" />
              <div className="post__file-name">Тестовый файл для скачиванияТестовый файл для скачиванияТестовый файл для скачивания</div>
              <img src={download} alt="download" className="post__file-download" />
            </div>
          </div>
        </Post>
       */}
      </div>
      {true && <Navigation className="news__nav-bot" />}
    </section>
  );
};

export default  observer(News);