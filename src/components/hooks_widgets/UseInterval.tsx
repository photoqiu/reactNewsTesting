/*
 * @Description:
 * @Author: ext.qiubo
 * @Date: 2021-06-01 14:25:42
 * @LastEditors: ext.qiubo
 * @LastEditTime: 2021-06-01 17:04:33
 */
import { useEffect, useRef } from 'react';

export default function useInterval(callback: Function | any, delay: number = 0) {
    const savedCallback: any = useRef();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        let tid: any = null;
        const tick: Function = () => {
            savedCallback.current();
        };
        if (delay > 0) {
            tid = setInterval(tick, delay);
            return () => {
                clearInterval(tid);
                tid = null;
            };
        }
        return () => {};
    }, [delay]);
}
