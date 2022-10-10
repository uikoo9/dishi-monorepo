// react
import React, { useState, useEffect } from 'react';

// ui
import { Input, InfoList } from 'qiao-ui';

// util
import { getServerData } from '@utils/data.js';

/**
 * dishi list pc
 */
export const DishiListPC = (props) => {
    console.log('components/dishi/dishi-list-pc: render');

    // state
    const [todo, setTodo] = useState([]);
    const [todoList, setTodoList] = useState([]);

    // effect
    useEffect(() => {
        console.log('components/dishi/dishi-list-pc: useEffect');

    });// eslint-disable-line react-hooks/exhaustive-deps

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
                            console.log(todoList);
                            todoList.push(todo);
                            console.log(todoList);
                            setTodoList(todoList);
                            console.log(todoList);
                        }
                    }}
                />
            </div>
            <div className="dishi-list">
                {
                    todoList && todoList.map((t, i) => {
                        return <div className="dishi-item" key={i}>{t}</div>;
                    })
                }
            </div>
        </div>
    );
};