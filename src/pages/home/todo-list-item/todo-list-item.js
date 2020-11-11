import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ 
  label,
  done,
  important = false,
  handleImportant,
  handleDone,
  onDeleteElem
  }) => {

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal',
    textDecoration:done? "line-through" : null

  };

  return (
    <span className="todo-list-item">
      <span onClick={handleDone}
        className="todo-list-item-label"
        style={style}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={handleImportant}
              >
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDeleteElem}
              >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
