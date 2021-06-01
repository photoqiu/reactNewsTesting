/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-31 09:30:56
 * @LastEditors: ext.qiubo
 * @LastEditTime: 2021-06-01 17:08:32
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import useXState from '@/components/hooks_widgets/UseXState';
import HomeStyles from './HomeStyles.less';

console.log('Home Style:', JSON.stringify(HomeStyles));

interface infoDatas {
    nickname: string;
    email: string;
    passwd: string;
    isRemember: boolean;
}

const Home: React.FC = () => {
    const [netDatas, setNetDatas] = useXState([
        {
            nickname: 'photoqiu',
            email: 'photoqiu@163.com',
            passwd: '90',
            isRemember: true,
        },
    ]);
    const [counter, setCounter] = useXState(0);

    const objectRef = React.useRef(null);
    objectRef.current = netDatas;

    const cb = () => {
        setTimeout(() => {
            console.log(`after add count: ${JSON.stringify(objectRef.current)}`);
        }, 300);
    };

    const addUsers = () => {
        let number: number = counter + 1;
        setCounter(number, cb);
        setNetDatas([
            {
                nickname: 'photoqiu',
                email: 'photoqiu@163.com',
                passwd: '90',
                isRemember: true,
            },
            {
                nickname: 'qiubowinter',
                email: 'qiubowinter@163.com',
                passwd: '10',
                isRemember: false,
            },
        ]);
    };
    return (
        <div className="container">
            <div className="title">首页</div>
            <NavLink className="nav" to="/login">
                登录
            </NavLink>
            <NavLink className="nav" to="/immviewer">
                登录1
            </NavLink>
            <NavLink className="nav" to="/immerdux">
                登录2
            </NavLink>
            <NavLink className="nav" to="/detail">
                登录3
            </NavLink>
            <NavLink className="nav" to="/indexdetails">
                登录4
            </NavLink>
            <NavLink className="nav" to="/categroy">
                登录5
            </NavLink>
            <NavLink className="nav" to="/tag">
                登录6
            </NavLink>
            <NavLink className="nav" to="/login">
                登录7
            </NavLink>
            <NavLink className="nav" to="/logout">
                登录8
            </NavLink>
            <div className="appdatas">
                <h3>点击次数：{counter}</h3>
                {netDatas &&
                    netDatas.map((value: infoDatas | any, index: number) => {
                        return (
                            <div className="users" key={index}>
                                <h3>nickname: {value.nickname}</h3>
                                <h3>email: {value.email}</h3>
                                <h3>password: {value.passwd}</h3>
                                <h3>isRemember: {value.isRemember ? '1' : '0'}</h3>
                            </div>
                        );
                    })}
                <button onClick={addUsers}>add Users</button>
            </div>
        </div>
    );
};

export default React.memo(Home);
