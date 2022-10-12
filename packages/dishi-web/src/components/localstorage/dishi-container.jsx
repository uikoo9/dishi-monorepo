// react
import React, { useState, useEffect } from 'react';

// ui
import { Donate } from 'qiao-ui';
import { DishiInput } from './dishi-input.jsx';
import { DishiList } from './dishi-list.jsx';

// dishi
import { getTodos, getDones } from './todo.js';

/**
 * dishi container
 */
export const DishiContainer = () => {
    console.log('components/localstorage/dishi-container: render');

    // state
    const [todos, setTodos] = useState([]);
    const [dones, setDones] = useState([]);

    // effect
    useEffect(() => {
        console.log('components/localstorage/dishi-container: useEffect');

        setTodos(getTodos());
        setDones(getDones());
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <div className="dishi-container">
                <DishiInput
                    setTodos={setTodos}
                />
                <DishiList
                    todos={todos}
                    setTodos={setTodos}
                    dones={dones}
                    setDones={setDones}
                />
            </div>
            <Donate
                type={'donate'}
                tip={'觉得不错，请作者喝杯茶~'}
            />
        </>
    );
};