/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-31 09:30:55
 * @LastEditors: zhj
 * @LastEditTime: 2021-05-31 10:10:13
 */
import { useState, useEffect, useRef } from 'react';

const usePrevious = (initState: any) => {
    const [state, _setState] = useState(initState);
    const previousState = useRef(initState);
    const setState = (state: any) => {
        _setState((prev: any) => {
            previousState.current = prev;
            return typeof state === 'function' ? state(prev) : state;
        });
    };
    useEffect(() => {
        console.log('previous: ', previousState.current);
    }, [state]);

    return [previousState.current, state, setState];
};
export default usePrevious;
// const App = () => {
//     const [prevState, state, setCount] = usePrevious(0)

//     return (
//       <div>
//         current: {state}<br/>
//         previous: {prevState}<br/>
//         <button onClick={() => setCount(prev => prev + 1)}>add</button>
//       </div>
//     )
//   }
