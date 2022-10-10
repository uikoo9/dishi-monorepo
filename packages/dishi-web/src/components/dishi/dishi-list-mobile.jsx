// react
import React, { useState, useEffect } from 'react';

// ui
import { Input } from 'qiao-ui';

// dishi
import { addTodo, delTodo, getTodos } from '../todo.js';

/**
 * dishi list mobile
 */
export const DishiListMobile = () => {
    console.log('components/dishi/dishi-list-mobile: render');

    // state
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    // effect
    useEffect(() => {
        console.log('components/dishi/dishi-list-mobile: useEffect');

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
                        if (e.nativeEvent.keyCode === 13) {
                            setTodo('');

                            addTodo(Date.now(), todo);

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