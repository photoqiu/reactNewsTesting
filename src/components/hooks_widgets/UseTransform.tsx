/*
 * @Description:
 * @Author: ext.qiubo
 * @Date: 2021-06-01 14:05:46
 * @LastEditors: ext.qiubo
 * @LastEditTime: 2021-06-01 14:11:55
 */
import { useEffect } from 'react';

const useTransform = (target: any, deps = []) => {
    useEffect(() => {
        target.current.style.setProperty('--scale', `${deps[0]}`);
        target.current.style.setProperty('--transformX', `${deps[1]}px`);
        target.current.style.setProperty('--transformY', `${deps[2]}px`);
    }, [...deps]);
};

export default useTransform;
