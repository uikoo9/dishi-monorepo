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
    console.log('components/localstorage/dishi-input: render');

    // state
    const [todo, setTodo] = useState('');

    // on change
    const onChange = (e) => {
        setTodo(e.target.value);
    };

    // on key press
    const onKeyPress = (e) => {
        // check
        if (e.nativeEvent.keyCode != 13) return;

        // clear
        setTodo('');

        // add 
        addTodo(Date.now(), todo);

        // reload
        props.setTodos(getTodos());
    };

    return (
        <div className="dishi-input">
            <Input
                type="text"
                placeholder={'todo...'}
                value={todo}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
        </div>
    );
};