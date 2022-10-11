// react
import React from 'react';

// dishi
import { delTodo, getTodos } from '../todo.js';

/**
 * dishi list
 */
export const DishiList = (props) => {
    console.log('components/dishi/dishi-list: render');

    return (
        <div className="dishi-list">
            {
                props.todos && props.todos.map((item) => {
                    return <div
                        className="dishi-item"
                        key={item.key}
                        onClick={() => {
                            delTodo(item.key);

                            props.setTodos(getTodos());
                        }}
                    >
                        {item.value}
                    </div>;
                })
            }
        </div>
    );
};