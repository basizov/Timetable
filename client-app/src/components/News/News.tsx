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
import { store, useStore } from '../../app/stores/store';
import Loading from '../../features/Loading/Loading';
import Modal from '../../features/Modal/Modal';
import { observer } from 'mobx-react-lite';
import { v4 as uuid } from 'uuid';
import { File, IFile } from '../../app/api/models/file';

const News: React.FC = () => {
  const { postStore: { postRegystry, loadPosts, loading, getPosts: posts, createPost } } = useStore();
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const [description, setDescription] = useState("");
	const [title, setTitle] = useState("");
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
	}, [description]);

	const onTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextAreaHeight("auto");
		setDescription(event.target.value);
	};

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
  }

	const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let photos: FileList | null = null;
    let files: FileList | null = null;

    if (selectedFiles && selectedFiles.length > 0) {
      console.log('Here');
      let   selectedfilesArray = Array.from(selectedFiles);

      const photosArray  = selectedfilesArray.filter(p => {
        p.name.toLowerCase();
        console.log(p.name, p.name.endsWith('.jpg'));
        return (p.name.endsWith('.jpeg') || p.name.endsWith('.jpg') ||
                p.name.endsWith('.png') || p.name.endsWith('.bmp') || 
                p.name.endsWith('.svg'));
      });

      const filesArray = selectedfilesArray.filter(p => {
        p.name.toLowerCase();
        return (!(p.name.endsWith('.jpeg') || p.name.endsWith('.jpg') ||
                p.name.endsWith('.png') || p.name.endsWith('.bmp') || 
                p.name.endsWith('.svg')));
      });
      let   dt = new DataTransfer();

      photosArray.forEach(photo => dt.items.add(photo));
      photos = dt.files;

      dt.items.clear();
      filesArray.forEach(file => dt.items.add(file));
      files = dt.files;
    }
    
		setTitle("");
		setDescription("");
    setSelectedFiles(null);
		setTextAreaHeight("auto");
    createPost({
      id: uuid(),
      title: title,
      createdTime: null,
      description: description,
      photos: photos,
      files: files
    });
	};

  const ifileValues = () => {
    const files: IFile[] = [];

    if (selectedFiles && selectedFiles.length > 0) {
      let fileArray = Array.from(selectedFiles);

      fileArray.forEach((file) => files.push(new File(file)));
    }
    return (files);
  }

  const deleteItem = (name: string) => {
    if (selectedFiles && selectedFiles.length > 0) {
      let   fileArray = Array.from(selectedFiles);
      const index = fileArray.findIndex(file => file.name === name);
      let   dt = new DataTransfer();
      
      fileArray.splice(index, 1);
      fileArray.forEach(file => dt.items.add(file));
      setSelectedFiles(dt.files);
    }
  }

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
          value={description}
          name="newPost"
          className="textarea news__textarea"></textarea>
        {selectedFiles && selectedFiles.length > 0 && <div className="news__files">
          {ifileValues().map((file) => (
            <div className="news__file" key={file.id}>
              <div className="news__file-name">{file.name}</div>
              <div
                onClick={() => deleteItem(file.name)}
                className="news__file-delete"></div>
            </div>
          ))}
        </div>}
        <div className="news__right">
          <div className="news__set-title">
            <input
              type="text"
              placeholder="Введите название поста"
              name="postTitle"
              value={title}
              onChange={onInputChange}
              onFocus={(e) => e.target.select()}
              className="input"></input>
          </div>
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
              {post.photos.map((photo, i) => {
                let additionalClassname = '';

                if (post.photos?.length === 1) additionalClassname = 'post__image--full';
                else if (post.photos && post.photos.length % 2 === 1 && i === 2) additionalClassname = 'post__image--vertical';
                return (<img
                  key={photo.id}
                  src={photo.url}
                  alt=""
                  className={`post__image ${additionalClassname}`}/>)
              })}
              {/* <img src="/assets/clock.jpg" alt="" className="post__image post__image--vertical"/> */}
              {/* <img src="/assets/clock.jpg" alt="" className="post__image post__image--horizontal"/> */}
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
      {true && <Navigation className="news__nav-bot" />}
    </section>
  );
};

export default  observer(News);