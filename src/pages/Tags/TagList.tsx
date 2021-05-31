/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-31 09:30:56
 * @LastEditors: zhj
 * @LastEditTime: 2021-05-31 15:37:37
 */
import React, { useRef } from 'react';
import useScroll from '@/components/hooks_widgets/UseScroll';

const TagList: React.FC = () => {
    const scrollRef = useRef(null);
    const [x, y] = useScroll(scrollRef);
    return (
        <div>
            <div ref={scrollRef}>
                <div className="innerBox">ddddddddddddddddddddd</div>
            </div>
            <div>
                x:{x}, y:{y}
            </div>
        </div>
    );
};

export default React.memo(TagList);
