// react
import React from 'react';

// dishi
import { delTodo, getTodos, getDones } from './todo.js';

/**
 * dishi list
 */
export const DishiList = (props) => {
  console.log('components/localstorage/dishi-list: render');

  return (
    <div className="dishi-list">
      {props.todos &&
        props.todos.map((item) => {
          return (
            <div
              className="dishi-item todo"
              key={item.key}
              onClick={() => {
                delTodo(item.key);

                props.setTodos(getTodos());
                props.setDones(getDones());
              }}
            >
              {item.value}
            </div>
          );
        })}
      {props.dones &&
        props.dones.map((item) => {
          return (
            <div className="dishi-item done" key={item.key}>
              {item.value}
            </div>
          );
        })}
    </div>
  );
};
