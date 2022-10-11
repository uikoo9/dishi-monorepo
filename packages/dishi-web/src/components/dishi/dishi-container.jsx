// react
import React, { useState, useEffect } from 'react';

// ui
import { DishiInput } from './dishi-input.jsx';
import { DishiList } from './dishi-list.jsx';

// dishi
import { getTodos } from '../todo.js';

/**
 * dishi container
 */
export const DishiContainer = () => {
    console.log('components/dishi/dishi-container: render');

    // state
    const [todos, setTodos] = useState([]);

    // effect
    useEffect(() => {
        console.log('components/dishi/dishi-container: useEffect');

        setTodos(getTodos());
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="dishi-container">
            <DishiInput
                setTodos={setTodos}
            />
            <DishiList
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    );
};