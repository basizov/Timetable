import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import Item from '../List/Item';

const CommentsList: React.FC = () => {
	const list = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (list && list.current) {
      list.current.scrollTop = list.current.scrollHeight;
    }
  }, []);

  return (
    <div className="list comments__list" ref={list}>
      <Item className="comments__item">
        <span className="comments__item-sender">Что с расписанием?</span>
        <span className="comments__item-text">Что с расписанием?</span>
      </Item>
      <Item className="comments__item">
        <span className="comments__item-sender">Что с расписанием?</span>
        <span className="comments__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio velit esse libero consectetur deserunt ipsum quas saepe dolor facilis consequatur asperiores aperiam nam quidem, tenetur ex eius nemo inventore repellat.</span>
      </Item>
      <Item className="comments__item">
        <span className="comments__item-sender">Автор</span>
        <span className="comments__item-text">Что с расписанием?</span>
      </Item>
      <Item className="comments__item-self">Что с расписанием?</Item>
      <Item className="comments__item-self">Что с расписанием?</Item>
      <Item className="comments__item-self">Что с расписанием?</Item>
      <Item className="comments__item">
        <span className="comments__item-sender">Автор</span>
        <span className="comments__item-text">Что с расписанием?</span>
      </Item>
      <Item className="comments__item">
        <span className="comments__item-sender">Автор</span>
        <span className="comments__item-text">Что с расписанием?</span>
      </Item>
      <Item className="comments__item">
        <span className="comments__item-sender">Автор</span>
        <span className="comments__item-text">Что с расписанием?</span>
      </Item>
      <Item className="comments__item">
        <span className="comments__item-sender">Автор</span>
        <span className="comments__item-text">Что с расписанием?</span>
      </Item>
      <Item className="comments__item">
        <span className="comments__item-sender">Автор</span>
        <span className="comments__item-text">Что с расписанием?</span>
      </Item>
      <Item className="comments__item-self">Что с расписанием?</Item>
      <Item className="comments__item">
        <span className="comments__item-sender">Автор</span>
        <span className="comments__item-text">Что с расписанием?</span>
      </Item>
      <Item className="comments__item">
        <span className="comments__item-sender">Автор</span>
        <span className="comments__item-text">Что с расписанием?</span>
      </Item>
      <Item className="comments__item">
        <span className="comments__item-sender">Автор</span>
        <span className="comments__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo repudiandae iste quod nulla! Debitis laboriosam atque placeat error ipsa necessitatibus quod iste? Id minima inventore laboriosam ipsa quia obcaecati!</span>
      </Item>
      <Item className="comments__item">
        <span className="comments__item-sender">Автор</span>
        <span className="comments__item-text">Что с расписанием?</span>
      </Item>
      <Item className="comments__item-self">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi molestias eaque labore mollitia vero quibusdam quod nemo tempora consequuntur, quam minus magnam aut culpa in. Accusantium voluptates tenetur recusandae et.
      Tempore blanditiis officia quia magnam non voluptatem odio eum unde error repudiandae fuga porro dolor voluptatibus asperiores aut natus, veritatis, quos neque! Vel aut commodi totam cum fugit beatae maiores?</Item>
      <Item className="comments__item">
        <span className="comments__item-sender">Автор</span>
        <span className="comments__item-text">Что с расписанием?</span>
      </Item>
      <Item className="comments__item">
        <span className="comments__item-sender">Автор</span>
        <span className="comments__item-text">Что с расписанием?</span>
      </Item>
      <Item className="comments__item">
        <span className="comments__item-sender">Автор</span>
        <span className="comments__item-text">Что с расписанием?</span>
      </Item>
    </div>
  );
};

export default  observer(CommentsList);