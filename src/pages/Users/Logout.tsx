/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-31 09:30:56
 * @LastEditors: ext.qiubo
 * @LastEditTime: 2021-06-02 11:49:52
 */
import React, { useRef } from 'react';
import useEventListener from '@/components/hooks_widgets/UseEventListener';

const Logout: React.FC = () => {
    const dialogRef: React.MutableRefObject<undefined> | any = useRef();

    useEventListener(
        'mousedown',
        (event: any) => {
            if (event.defaultPrevented) {
                return; // Do nothing if the event was already processed
            }
            if (dialogRef.current && !dialogRef.current.contains(event.target)) {
                console.log('Click outside detected -> closing dialog...');
            }
        },
        window,
    );

    return (
        <div className="boxes">
            <div
                className="relative bg-white rounded-md shadow-card max-h-full max-w-screen-sm w-full animate-zoom-in px-6 py-20"
                ref={dialogRef}
            >
                <p className="text-center font-semibold text-4xl">
                    What's up{' '}
                    <span className="text-white bg-red-500 py-1 px-3 rounded-md mr-1">JD.com</span>?
                </p>
            </div>
        </div>
    );
};

export default React.memo(Logout);
