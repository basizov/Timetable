import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { File, IFile } from '../../app/api/models/file';
import { v4 as uuid } from 'uuid';
import Loading from '../../features/Loading/Loading';
import { PostFormValues } from '../../app/api/models/post';
import Textarea from '../../features/Textarea/Textarea';

interface IProps {
  loading: boolean;
  createPost: (value: PostFormValues) => void;
}

const NewsForm: React.FC<IProps> = ({loading, createPost}) => {
	const [description, setDescription] = useState("");
	const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
	const [title, setTitle] = useState("");
	const [reset, setReset] = useState(false);
  
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
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
  }
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(event.target.files);
  }
	const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let photos: FileList | null = null;
    let files: FileList | null = null;

    if (selectedFiles && selectedFiles.length > 0) {
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
    
    createPost({
      id: uuid(),
      title: title,
      createdTime: null,
      description: description,
      photos: photos,
      files: files
    });
		setTitle("");
		setDescription("");
    setSelectedFiles(null);
    setReset(true);
	};
  
  return (
    <form className="news__form">
      <Textarea
        text={description}
        setText={setDescription}
        reset={reset}
        placeholder="Текст новой новости..."
        setReset={setReset}
        className='news__textarea' />
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
            {loading ? <Loading
              width={15}
              height={15}
              spanWidth={3}
              spanHeight={3}
              backgroundColor="#fff" /> : <>Выложить</>}</button>
          </div>
        </div>
      </form>
  );
};

export default  observer(NewsForm);