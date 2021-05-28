/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-28 12:42:53
 * @LastEditors: zhj
 * @LastEditTime: 2021-05-28 13:34:52
 */
import { useState, useReducer, useCallback, useMemo, Dispatch } from 'react';
import produce, { Draft, nothing } from 'immer';

export type Reducer<S = any, A = any> = (
    draftState: Draft<S>,
    action: A,
) => void | S | (S extends undefined ? typeof nothing : never);
export type DraftFunction<S> = (draft: Draft<S>) => void;
export type Updater<S> = (arg: S | DraftFunction<S>) => void;
export type ImmerHook<S> = [S, Updater<S>];
export function useImmer<S = any>(initialValue: S | (() => S)): ImmerHook<S>;
export function useImmer(initialValue: any) {
    const [val, updateValue] = useState(initialValue);
    return [
        val,
        useCallback((updater) => {
            if (typeof updater === 'function') updateValue(produce(updater));
            else updateValue(updater);
        }, []),
    ];
}

export function useImmerReducer<S = any, A = any>(
    reducer: Reducer<S, A>,
    initialState: S,
    initialAction?: (initial: any) => S,
): [S, Dispatch<A>];

export function useImmerReducer(reducer: any, initialState: any, initialAction: any) {
    const cachedReducer = useMemo(() => produce(reducer), [reducer]);
    return useReducer(cachedReducer, initialState as any, initialAction);
}
