import React, { useEffect, useRef, useState } from 'react';

const News: React.FC = () => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const [text, setText] = useState("");
	const [textAreaHeight, setTextAreaHeight] = useState("auto");

	useEffect(() => {
		setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
	}, [text]);

	const onTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextAreaHeight("auto");
		setText(event.target.value);
	};

	const onButtomClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    
		setText("");
		setTextAreaHeight("auto");
	};

  return (
    <section className="news news--light">
      <form className="news__form">
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
              type="file"/>
              Выбрать файл
          </label>
          <button
          onClick={(e) => onButtomClick(e)}
            className="btn btn--success form__btn">
            Выложить</button>
        </div>
      </form>
    </section>
  );
};

export default  News;