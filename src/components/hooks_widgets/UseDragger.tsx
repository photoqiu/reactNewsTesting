/**
 * useDragger hooks
 */
import { useEffect, useRef } from 'react';
import useThrottle from './UseThrottle';

const useDragger = (
    target: {
        current: {
            style: {
                getPropertyValue: (arg0: string) => string | number | any;
                setProperty: (arg0: string, arg1: string) => void;
            };
            addEventListener: (arg0: string, arg1: any, arg2: { passive: boolean }) => any;
            removeEventListener: (arg0: any) => void;
        };
    },
    limit: () => any,
    deps = [1, 0, 0], // zoom  moveLimit
    op = {},
    startEvent = (_e: any = {}, _obj: any = {}) => {},
    moveEvent = (_e: any, _obj: any = {}) => {},
    endEvent = (_e: any, _obj: any = {}) => {},
) => {
    let options = { zoom: false, move: true, moveLimit: false, ...op };
    let [start, move, end] = [useRef(), useRef(), useRef()];
    let pageX: number = 0,
        pageY: number = 0,
        currX: number = 0,
        currY: number = 0,
        moveX: number = 0,
        moveY: number = 0;

    let re_size: number = 1;

    let touchStartHandler = function (e: any) {
        if (!e.touches[1]) {
            pageX = Math.floor(e.touches[0].pageX);
            pageY = Math.floor(e.touches[0].pageY);
            currX =
                Math.floor(parseFloat(target.current.style.getPropertyValue('--transformX'))) || 0;
            currY =
                Math.floor(parseFloat(target.current.style.getPropertyValue('--transformY'))) || 0;
            startEvent(e, { size: re_size, x: currX, y: currY });
        }
    };
    let touchMoveHandler = function (e: any) {
        if (!e.touches[1]) {
            currX =
                Math.floor(parseFloat(target.current.style.getPropertyValue('--transformX'))) || 0;
            currY =
                Math.floor(parseFloat(target.current.style.getPropertyValue('--transformY'))) || 0;
            moveX = Math.floor(e.touches[0].pageX - pageX);
            moveY = Math.floor(e.touches[0].pageY - pageY);
            pageX = Math.floor(e.touches[0].pageX);
            pageY = Math.floor(e.touches[0].pageY);
            currX += Math.floor(moveX);
            currY += Math.floor(moveY);

            if (limit && options.moveLimit) {
                let rage = limit();
                currX = currX >= rage.maxX ? rage.maxX : currX <= rage.minX ? rage.minX : currX;
                currY = currY >= rage.maxY ? rage.maxY : currY <= rage.minY ? rage.minY : currY;
            }

            target.current.style.setProperty('--transformX', `${currX}px`);
            target.current.style.setProperty('--transformY', `${currY}px`);
            moveEvent(e, { size: re_size, x: currX, y: currY, moveX: moveX, moveY: moveY });
        }
    };
    let touchEndHandler = function (e: any) {
        if (!e.touches[1]) {
            re_size = target.current.style.getPropertyValue('--scale');
            re_size = re_size >= 1.8 ? 1.8 : re_size <= 0.7 ? 0.7 : re_size;

            currX =
                Math.floor(parseFloat(target.current.style.getPropertyValue('--transformX'))) || 0;
            currY =
                Math.floor(parseFloat(target.current.style.getPropertyValue('--transformY'))) || 0;
            if (limit) {
                let rage = limit();
                currX = currX >= rage.maxX ? rage.maxX : currX <= rage.minX ? rage.minX : currX;
                currY = currY >= rage.maxY ? rage.maxY : currY <= rage.minY ? rage.minY : currY;
            }
            target.current.style.setProperty('--transformX', `${currX}px`);
            target.current.style.setProperty('--transformY', `${currY}px`);
            console.log(currX, currY);
            endEvent(e, { size: re_size, x: currX, y: currY });
        }
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
        // start.current = target.current.addEventListener('touchstart', touchStartHandler)
        // move.current = target.current.addEventListener('touchmove', touchMoveHandler)
        // end.current = target.current.addEventListener('touchend', touchEndHandler)
    }, []);

    useEffect(() => {
        currX = deps[1];
        currY = deps[2];
        re_size = deps[0];

        if (limit) {
            let rage = limit();
            currX = currX >= rage.maxX ? rage.maxX : currX <= rage.minX ? rage.minX : currX;
            currY = currY >= rage.maxY ? rage.maxY : currY <= rage.minY ? rage.minY : currY;
        }
        // re_size = re_size >= 1.8 ? 1.8 : re_size <= .7 ? .7 : re_size

        target.current.style.setProperty('--transformX', `${currX}px`);
        target.current.style.setProperty('--transformY', `${currY}px`);
        target.current.style.setProperty('--scale', `${re_size}`);
    }, [...deps]);

    let stop = () => {
        target.current.removeEventListener(start.current);
        target.current.removeEventListener(move.current);
        target.current.removeEventListener(end.current);
    };
    return [stop];
};
export default useDragger;
