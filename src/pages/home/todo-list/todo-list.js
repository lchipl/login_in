import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos,handleImportant,handleDone, onDeleteElem }) => {

  const elements = todos.map((item,index) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps } onDeleteElem={() =>onDeleteElem(id)}
         handleImportant={()=>handleImportant(id)}
         handleDone={()=>handleDone(id)}
         />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
