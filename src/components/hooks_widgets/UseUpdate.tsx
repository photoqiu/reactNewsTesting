/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-31 09:30:55
 * @LastEditors: zhj
 * @LastEditTime: 2021-05-31 10:25:10
 */
import { useState } from 'react';
const useUpdate = () => {
    const [, setFlag] = useState<number>();
    const update = () => {
        setFlag(Date.now());
    };
    return update;
};
export default useUpdate;
