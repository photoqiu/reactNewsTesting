/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-31 09:30:55
 * @LastEditors: zhj
 * @LastEditTime: 2021-05-31 10:15:30
 */
import { useEffect, useRef } from 'react';

const useDebounce = (fn: Function, ms: number = 30, deps: any = []) => {
    let timeout: any = useRef();
    useEffect(() => {
        if (timeout.current) clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            fn();
        }, ms);
    }, deps);

    const cancel = () => {
        clearTimeout(timeout.current);
        timeout = null;
    };
    return [cancel];
};

export default useDebounce;
