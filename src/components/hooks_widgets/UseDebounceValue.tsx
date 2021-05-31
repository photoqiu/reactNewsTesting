/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-31 14:21:07
 * @LastEditors: zhj
 * @LastEditTime: 2021-05-31 17:33:22
 */
import { useState, useEffect } from 'react';

export default function useDebounceValue(value: any, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        let handle: any = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handle);
            handle = null;
        };
    }, [value, delay]);

    return debouncedValue;
}
