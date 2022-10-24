// react
import React, { useState, useEffect } from 'react';

// ui
import { Donate } from 'qiao-ui';
import { DishiInput } from '../indexeddb/dishi-input.jsx';
import { DishiList } from '../indexeddb/dishi-list.jsx';

// dishi
import { initDatabase, getTodos, getDones } from '../indexeddb/todo.js';

/**
 * dishi container
 */
export const DishiContainer = () => {
    console.log('components/electron/dishi-container: render');

    // state
    const [todos, setTodos] = useState([]);
    const [dones, setDones] = useState([]);
    const [version, setVersion] = useState('');

    // effect
    useEffect(() => {
        console.log('components/electron/dishi-container: useEffect');

        setData();
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    // set data
    const setData = async () => {
        const v = await window.electron.appGetVersionIPC();
        setVersion(v);

        const sql = 'CREATE TABLE if not exists t_project (project_name TEXT, project_appid TEXT, project_icon_url TEXT) ';
        const rs = await window.electron.createTableIPC(sql);
        console.log(rs);

        const res = await initDatabase();
        console.log('init database:', res);

        const todos = await getTodos();
        setTodos(todos);

        const dones = await getDones();
        setDones(dones);
    };

    return (
        <>
            <div className="dishi-title">滴石todo - {version}</div>

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