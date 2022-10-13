// react
import React, { useState } from 'react';

// ui
import { Input } from 'qiao-ui';

// dishi
import { addTodo, getTodos } from './todo.js';

/**
 * dishi input
 */
export const DishiInput = (props) => {
    console.log('components/dishi/dishi-input: render');

    // state
    const [todo, setTodo] = useState('');

    // on change
    const onChange = (e) => {
        setTodo(e.target.value);
    };

    // on key press
    const onKeyPress = async (e) => {
        // check
        if (e.nativeEvent.keyCode != 13) return;

        // clear
        setTodo('');

        // add 
        await addTodo(todo);

        // reload
        const todos = await getTodos();
        props.setTodos(todos);
    };

    return (
        <div className="dishi-input">
            <Input
                type="text"
                placeholder={'todo... @20221010'}
                value={todo}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
        </div>
    );
};