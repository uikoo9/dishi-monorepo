// react
import React, { useState, useEffect } from 'react';

// ui
import { Input } from 'qiao-ui';

// dishi
import { addTodo, delTodo, getTodos } from '../todo.js';

/**
 * dishi list pc
 */
export const DishiListPC = (props) => {
    console.log('components/dishi/dishi-list-pc: render');

    // state
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    // effect
    useEffect(() => {
        console.log('components/dishi/dishi-list-pc: useEffect');

        setTodos(getTodos());
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="dishi-container">
            <div className="dishi-input">
                <Input
                    type="text"
                    placeholder={'todo...'}
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.nativeEvent.keyCode === 13){
                            setTodo('');

                            addTodo(`${Date.now()}-${todo}`, todo);

                            setTodos(getTodos());
                        }
                    }}
                />
            </div>
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