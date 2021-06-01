/*
 * @Description:
 * @Author: ext.qiubo
 * @Date: 2021-06-01 14:12:46
 * @LastEditors: ext.qiubo
 * @LastEditTime: 2021-06-01 16:33:01
 */
import { useEffect, useRef } from 'react';
import useThrottle from './UseThrottle';

const useZoom = (
    target: any,
    startEvent = (_e: any, _obj: any) => {},
    moveEvent = (_e: any, _obj: any) => {},
    endEvent = (_e: any, _obj: any) => {},
    deps = [1], // zoom  moveLimit
    op = {},
) => {
    let options = { zoom: true, ...op };
    let [start, move, end] = [useRef(), useRef(), useRef()];
    let pageX: number = 0,
        pageY: number = 0;

    let re_pageX: number = 0,
        re_pageY: number = 0,
        re_size: number = 1,
        distance: number = 0;

    let touchStartHandler = function (e: any) {
        if (options.zoom && e.touches[1]) {
            e.preventDefault();
            pageX = Math.floor(e.touches[0].pageX); // 手指1
            pageY = Math.floor(e.touches[0].pageY);
            re_pageX = Math.floor(e.touches[1].pageX); // 手指2
            re_pageY = Math.floor(e.touches[1].pageY);
            // re_pageX = 100
            // re_pageY = 100
            distance = Math.floor(
                Math.sqrt(Math.pow(re_pageX - pageX, 2) + Math.pow(re_pageY - pageY, 2)),
            );
            re_size = target.current.style.getPropertyValue('--scale') || 1;
        }
        startEvent(e, { size: re_size });
    };
    let touchMoveHandler = function (e: any) {
        // debugger
        if (options.zoom && e.touches[1]) {
            e.preventDefault();
            pageX = Math.floor(e.touches[0].pageX); // 手指1
            pageY = Math.floor(e.touches[0].pageY);
            re_pageX = Math.floor(e.touches[1].pageX); // 手指2
            re_pageY = Math.floor(e.touches[1].pageY);

            // re_pageX = 100
            // re_pageY = 100

            let m_distance = Math.sqrt(
                Math.pow(re_pageX - pageX, 2) + Math.pow(re_pageY - pageY, 2),
            );
            let result = (m_distance / distance) * re_size;
            re_size = Math.floor(result * 1000) / 1000;
            re_size = re_size >= 1.6 ? 1.6 : re_size <= 0.8 ? 0.8 : re_size;
            target.current.style.setProperty('--scale', `${re_size}`);
        }
        moveEvent(e, { size: re_size });
    };
    let touchEndHandler = function (e: any) {
        // e.preventDefault()
        re_size = re_size >= 1.6 ? 1.6 : re_size <= 0.8 ? 0.8 : re_size;
        target.current.style.setProperty('--scale', `${re_size}`);
        endEvent(e, { size: re_size });
    };

    useEffect(() => {
        start.current = target.current.addEventListener(
            'touchstart',
            useThrottle(touchStartHandler, 30),
            {
                passive: false,
            },
        );
        move.current = target.current.addEventListener(
            'touchmove',
            useThrottle(touchMoveHandler, 30),
            {
                passive: false,
            },
        );
        end.current = target.current.addEventListener(
            'touchend',
            useThrottle(touchEndHandler, 30),
            {
                passive: false,
            },
        );
    }, []);

    useEffect(() => {
        re_size = deps[0];
    }, [...deps]);

    let stop = () => {
        target.current.removeEventListener(start.current);
        target.current.removeEventListener(move.current);
        target.current.removeEventListener(end.current);
    };
    return [stop];
};
export default useZoom;
