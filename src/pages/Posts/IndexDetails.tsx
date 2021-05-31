/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-31 15:00:16
 * @LastEditors: zhj
 * @LastEditTime: 2021-05-31 15:17:36
 */
import React, { useState } from 'react';
import useThrottle from '@/components/hooks_widgets/UseThrottle';

const IndexDetails: React.FC = () => {
    const [a, setA] = useState<string>('');
    const [b, setB] = useState<string>('');
    useThrottle(
        () => {
            setB(a);
        },
        2000,
        [a],
    );

    const changeOnInputs = (e: React.FormEvent<HTMLInputElement>) => {
        setA(e.currentTarget.value);
    };
    return (
        <>
            <input type="text" className="inputs" onChange={changeOnInputs} />
            <div>realtime的变量：{a}</div>
            <div>delay的变量：{b}</div>
        </>
    );
};
export default React.memo(IndexDetails);
