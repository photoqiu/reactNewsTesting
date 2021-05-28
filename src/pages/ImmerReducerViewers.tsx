/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-28 13:52:25
 * @LastEditors: zhj
 * @LastEditTime: 2021-05-28 15:48:27
 */
import React from 'react';
import { useImmerReducer } from '../components/hooks_widgets/UseImmer';

interface CounterProps {
    count: number;
}
type Action = {
    type: string;
    payload?: CounterProps;
};

const initialState: CounterProps = { count: 0 };

function reducer(draft: CounterProps, action: Action) {
    switch (action.type) {
        case 'reset':
            return initialState;
        case 'increment':
            return void draft.count++;
        case 'decrement':
            return void draft.count--;
    }
}

const Counter: React.FC<CounterProps> = () => {
    const [counter, dispatch] = useImmerReducer(reducer, initialState);
    return (
        <>
            Count: {counter.count}
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </>
    );
};

export default Counter;
