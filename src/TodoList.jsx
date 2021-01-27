import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({ todos, onClick }) {
  const isEmpty = (arr) => arr.length === 0;
  if (isEmpty(todos)) {
    return (
      <p>할 일이 없어요!</p>
    );
  }

  return (
    <ol>
      {todos
        .filter((todo) => !todo.done)
        .map((todo) => {
          const { id, text } = todo;
          return (
            <TodoItem
              key={id}
              id={id}
              text={text}
              onClick={onClick}
            />
          );
        })}
    </ol>
  );
}
