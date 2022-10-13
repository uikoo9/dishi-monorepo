// react
import React from 'react';

// dishi
import { getTodos } from './todo.js';

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
                        className="dishi-item todo"
                        key={item.create_time}
                        onClick={() => {
                            delTodo(item.create_time);

                            props.setTodos(getTodos());
                            // props.setDones(getDones());
                        }}
                    >
                        {item.todo_content}
                    </div>;
                })
            }
            {
                props.dones && props.dones.map((item) => {
                    return <div
                        className="dishi-item done"
                        key={item.key}
                    >
                        {item.value}
                    </div>;
                })
            }
        </div>
    );
};