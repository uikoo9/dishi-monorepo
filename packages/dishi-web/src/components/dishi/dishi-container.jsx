// react
import React, { useState, useEffect } from 'react';

// ui
import { Donate } from 'qiao-ui';
import { DishiInput } from './dishi-input.jsx';
import { DishiList } from './dishi-list.jsx';

// dishi
import { initDatabase, getTodos, getDones } from './todo.js';

/**
 * dishi container
 */
export const DishiContainer = () => {
    console.log('components/dishi/dishi-container: render');

    // state
    const [todos, setTodos] = useState([]);
    const [dones, setDones] = useState([]);

    // effect
    useEffect(() => {
        console.log('components/dishi/dishi-container: useEffect');

        setData();
    }, []);// eslint-disable-line react-hooks/exhaustive-deps
    
    // set data
    const setData = async () => {
        const res = await initDatabase();
        console.log('init database:', res);

        const todos = await getTodos();
        setTodos(todos);

        const dones = await getDones();
        setDones(dones);
    };

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