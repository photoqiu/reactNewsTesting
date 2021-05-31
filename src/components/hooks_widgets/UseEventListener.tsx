/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-31 09:30:55
 * @LastEditors: zhj
 * @LastEditTime: 2021-05-31 17:34:30
 */
import { useEffect, useRef } from 'react';
const useEventListener = (
    eventType: string = '',
    listener = (_e: any) => {},
    target: Element | any = null,
    options = null,
) => {
    const savedListener: any = useRef();
    useEffect(() => {
        savedListener.current = listener;
    }, [listener]);
    useEffect(() => {
        if (!target?.addEventListener) return;
        const eventListener = (event: any) => savedListener.current(event);
        target.addEventListener(eventType, eventListener, options);
        return () => {
            target.removeEventListener(eventType, eventListener, options);
        };
    }, [eventType, target, options]);
};

export default useEventListener;
