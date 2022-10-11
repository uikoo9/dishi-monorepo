// react
import React, { useState, useEffect } from 'react';

// ui
import { DishiInput } from './dishi-input.jsx'

// dishi
import { delTodo, getTodos } from '../todo.js';

/**
 * dishi list pc
 */
export const DishiListPC = () => {
    console.log('components/dishi/dishi-list-pc: render');

    // state
    const [todos, setTodos] = useState([]);

    // effect
    useEffect(() => {
        console.log('components/dishi/dishi-list-pc: useEffect');

        setTodos(getTodos());
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="dishi-container">
            <DishiInput 
                setTodos = { setTodos }
            />
            <div className="dishi-list">
                {
                    todos && todos.map((item) => {
                        return <div
                            className="dishi-item"
                            key={item.key}
                            onClick={() => {
                                delTodo(item.key);

                                setTodos(getTodos());
                            }}
                        >
                            {item.value}
                        </div>;
                    })
                }
            </div>
        </div>
    );
};