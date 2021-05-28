/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-28 13:46:03
 * @LastEditors: zhj
 * @LastEditTime: 2021-05-28 13:49:13
 */
import React from 'react';
import { useImmer } from '../components/hooks_widgets/UseImmer';

interface personal {
    name: string;
    age: number;
}

function ImmerViewers() {
    const [person, updatePerson] = useImmer({
        name: 'photoqiu',
        age: 33,
    });

    function updateName(name: string) {
        updatePerson((draft: personal) => {
            draft.name = name;
        });
    }

    function becomeOlder() {
        updatePerson((draft: personal) => {
            draft.age++;
        });
    }

    return (
        <div className="personal">
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

export default React.memo(ImmerViewers);
