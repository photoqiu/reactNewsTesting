/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-28 11:22:49
 * @LastEditors: zhj
 * @LastEditTime: 2021-05-28 13:44:31
 */
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { useImmer } from './components/hooks_widgets/UseImmer';

function App() {
    const [person, updatePerson] = useImmer({
        name: 'photoqiu',
        age: 33,
    });

    function updateName(name: string) {
        updatePerson((draft) => {
            draft.name = name;
        });
    }

    function becomeOlder() {
        updatePerson((draft) => {
            draft.age++;
        });
    }

    return (
        <div className="App">
            <h1>
                你好， {person.name} (年龄：{person.age})
            </h1>
            <input
                onChange={(e) => {
                    updateName(e.target.value);
                }}
                value={person.name}
            />
            <br />
            <button onClick={becomeOlder}>增加岁数</button>
        </div>
    );
}

// interface CounterProps {
//     initialCount?: number;
// }

// const Counter = memo(function Counter({ initialCount = 0 }: CounterProps) {
//     const [count, setCount] = React.useState(initialCount);

//     const add = () => {
//         setCount(count + 1);
//     };

//     return (
//         <div className="counter">
//             <input type="text" value={count} readOnly />
//             <button type="button" onClick={add}>
//                 +
//             </button>
//         </div>
//     );
// });

// function App() {
//     return (
//         <div className="app">
//             <h2 className="title">react typescript boilerplate</h2>
//             <Counter />
//         </div>
//     );
// }

export default hot(App);
