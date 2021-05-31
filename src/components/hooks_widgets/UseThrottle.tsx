/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-31 09:30:55
 * @LastEditors: zhj
 * @LastEditTime: 2021-05-31 10:16:08
 */
import { useEffect, useRef, useState } from 'react';

const useThrottle = (fn: Function, ms: number = 30, deps: any = []) => {
    let previous = useRef(0);
    let [time, setTime] = useState(ms);
    useEffect(() => {
        let now: number = Date.now();
        if (now - previous.current > time) {
            fn();
            previous.current = now;
        }
    }, deps);
    const cancel = () => {
        setTime(0);
    };
    return [cancel];
};
export default useThrottle;
