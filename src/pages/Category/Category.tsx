/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-31 09:30:55
 * @LastEditors: zhj
 * @LastEditTime: 2021-05-31 15:30:33
 */
import React from 'react';
import useUpdate from '@/components/hooks_widgets/UseUpdate';
const Category: React.FC = () => {
    const update = useUpdate();
    return (
        <div>
            {Date.now()}
            <div>
                <button onClick={update}>update</button>
            </div>
        </div>
    );
};

export default React.memo(Category);
