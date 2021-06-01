/*
 * @Description:
 * @Author: ext.qiubo
 * @Date: 2021-06-01 15:44:09
 * @LastEditors: ext.qiubo
 * @LastEditTime: 2021-06-01 16:14:58
 */
// css模块声明
declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}

declare module '*.less' {
    const content: { [className: string]: string };
    export = content;
}

declare module '*.css' {
    const content: { [className: string]: string };
    export = content;
}

declare module '*.svg' {
    import React = require('react');
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}

declare const IS_PROD: boolean;
declare const IS_DEV: boolean;
declare const IS_DEV_SERVER: boolean;
