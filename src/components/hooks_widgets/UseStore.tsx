/*
 * @Description:
 * @Author: ext.qiubo
 * @Date: 2021-06-01 14:22:50
 * @LastEditors: ext.qiubo
 * @LastEditTime: 2021-06-01 14:24:50
 */
import { useReducer } from 'react';
import _cloneDeep from 'lodash/cloneDeep';
import _set from 'lodash/set';
import _get from 'lodash/get';

export default function useStore(initState = {}) {
    const [state, setState] = useReducer((o: any, n: any) => ({ ...o, ...n }), {
        ...initState,
    });
    const set = (prefix: any, data: any) => {
        let _data = _cloneDeep(state);
        if (typeof prefix === 'string') {
            _set(_data, prefix, data);
        }
        if (typeof prefix === 'object') {
            for (let key in prefix) {
                _set(_data, key, prefix[key]);
            }
        }
        setState(_data);
        return _data;
    };
    const get = (prefix: any) => _get(state, prefix);
    return { state, set, get };
}
