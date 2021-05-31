/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-31 09:30:56
 * @LastEditors: zhj
 * @LastEditTime: 2021-05-31 14:59:08
 */
import React, { useState } from 'react';
import useDebounce from '@/components/hooks_widgets/UseDebounce';

const Details: React.FC = () => {
    const [a, setA] = useState<string>('');
    const [b, setB] = useState<string>('');
    useDebounce(
        () => {
            setB(a);
        },
        2000,
        [a],
    );

    const changeInputs = (e: React.FormEvent<HTMLInputElement>) => {
        setA(e.currentTarget.value);
    };
    return (
        <div>
            <input type="text" onChange={changeInputs} />
            <div>delay的变量：{b}</div>
            <div>realtime的变量：{a}</div>
        </div>
    );
};
export default React.memo(Details);
