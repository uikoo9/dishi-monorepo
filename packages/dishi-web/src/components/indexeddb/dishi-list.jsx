// react
import React from 'react';

// dishi
import { delTodo, getTodos, getDones } from './todo.js';

/**
 * dishi list
 */
export const DishiList = (props) => {
  console.log('components/indexeddb/dishi-list: render');

  return (
    <div className="dishi-list">
      {props.todos &&
        props.todos.map((item) => {
          return (
            <div
              className="dishi-item todo"
              key={item.create_time}
              onClick={async () => {
                await delTodo(item.create_time);

                const todos = await getTodos();
                props.setTodos(todos);

                const dones = await getDones();
                props.setDones(dones);
              }}
            >
              <div className="content">{item.todo_content}</div>
              <div className="time">{item.todo_time}</div>
            </div>
          );
        })}
      {props.dones &&
        props.dones.map((item) => {
          return (
            <div className="dishi-item done" key={item.done_time}>
              <div className="content">{item.todo_content}</div>
              <div className="time">{item.todo_time}</div>
            </div>
          );
        })}
    </div>
  );
};
