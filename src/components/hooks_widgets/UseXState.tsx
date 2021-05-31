/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-31 09:30:55
 * @LastEditors: zhj
 * @LastEditTime: 2021-05-31 13:35:55
 */
import { useEffect, useRef, useState } from 'react';

interface update {
    current: Function;
}

type UpdateFunc = Partial<update>;
/**
 *
 * @param initState
 * @returns {[*, setXState]}
 ****/
const useXState = (initState: any) => {
    const [state, setState] = useState(initState);
    let isUpdate: UpdateFunc = useRef();
    const setXState = (states: Function | any, cb: Function) => {
        setState((prev: any) => {
            isUpdate.current = cb;
            return typeof state === 'function' ? states(prev) : states;
        });
    };
    useEffect(() => {
        if (!!isUpdate.current) {
            isUpdate.current();
        }
    });
    return [state, setXState];
};

export default useXState;
