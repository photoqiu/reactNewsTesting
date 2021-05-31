/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-31 09:30:55
 * @LastEditors: zhj
 * @LastEditTime: 2021-05-31 10:14:40
 */
import { useState, useEffect } from 'react';
const useScroll = (scrollRef: any) => {
    const [pos, setPos] = useState([0, 0]);

    useEffect(() => {
        function handleScroll() {
            setPos([scrollRef.current.scrollLeft, scrollRef.current.scrollTop]);
        }
        scrollRef.current.addEventListener('scroll', handleScroll, false);
        return () => {
            scrollRef.current.removeEventListener('scroll', handleScroll, false);
        };
    }, []);

    return pos;
};
export default useScroll;
