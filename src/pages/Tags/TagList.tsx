/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-31 09:30:56
 * @LastEditors: ext.qiubo
 * @LastEditTime: 2021-06-02 11:36:08
 */
import React, { useRef } from 'react';
import useScroll from '@/components/hooks_widgets/UseScroll';
import * as TagListStyle from './TagListStyle.less';
const TagList: React.FC = () => {
    const scrollRef = useRef(null);
    const [x, y] = useScroll(scrollRef);
    return (
        <>
            <div className={TagListStyle.boxes}>
                <div className={TagListStyle.outerBox} ref={scrollRef}>
                    <div className={TagListStyle.innerBox}>ddddddddddddddddddddd</div>
                    <div className={TagListStyle.innerBox}>ddddddddddddddddddddd</div>
                    <div className={TagListStyle.innerBox}>ddddddddddddddddddddd</div>
                    <div className={TagListStyle.innerBox}>ddddddddddddddddddddd</div>
                    <div className={TagListStyle.innerBox}>ddddddddddddddddddddd</div>
                    <div className={TagListStyle.innerBox}>ddddddddddddddddddddd</div>
                    <div className={TagListStyle.innerBox}>ddddddddddddddddddddd</div>
                    <div className={TagListStyle.innerBox}>ddddddddddddddddddddd</div>
                    <div className={TagListStyle.innerBox}>ddddddddddddddddddddd</div>
                    <div className={TagListStyle.innerBox}>ddddddddddddddddddddd</div>
                </div>
            </div>
            <div className={TagListStyle.boxesTips}>
                x:{x}, y:{y}
            </div>
        </>
    );
};

export default React.memo(TagList);
