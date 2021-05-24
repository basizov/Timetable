import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef, useState } from 'react';

interface IProps {
  className?: string;
  text: string;
  placeholder: string;
  rows?: number;
  setText: (v: string) => void;
  reset: boolean;
  setReset: (value: boolean) => void;
}

const Textarea: React.FC<IProps> = ({className='', text, placeholder, rows = 2, setText, reset, setReset}) => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const [textAreaHeight, setTextAreaHeight] = useState("auto");
  
	const onTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextAreaHeight("auto");
		setText(event.target.value);
	};
  
	useEffect(() => {
    if (textAreaRef && textAreaRef.current) {
      setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
    }
	}, [text]);
  useEffect(() => {
    if (reset) {
      setTextAreaHeight("auto");
      setReset(false);
    }
  }, [reset, setReset]);
  
  return (
    <textarea
      ref={textAreaRef}
      rows={rows}
      style={{ height: textAreaHeight }}
      onChange={onTextareaChange}
      onFocus={(e) => e.target.select()}
      placeholder={placeholder}
      value={text}
      name="newPost"
      className={`textarea ${className}`}></textarea>
  );
};

export default  observer(Textarea);