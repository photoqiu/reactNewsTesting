/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-31 09:30:56
 * @LastEditors: zhj
 * @LastEditTime: 2021-05-31 17:38:13
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
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 md:p-12 bg-blurred">
            <div
                className="relative bg-white rounded-md shadow-card max-h-full max-w-screen-sm w-full animate-zoom-in px-6 py-20"
                ref={dialogRef}
            >
                <p className="text-center font-semibold text-4xl">
                    What's up{' '}
                    <span className="text-white bg-red-500 py-1 px-3 rounded-md mr-1">YouTube</span>
                    ?
                </p>
            </div>
        </div>
    );
};

export default React.memo(Logout);
