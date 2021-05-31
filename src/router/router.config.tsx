/*
 * @Description:
 * @Author: zhj
 * @Date: 2021-05-31 09:30:56
 * @LastEditors: zhj
 * @LastEditTime: 2021-05-31 15:03:19
 */
import { lazy } from 'react';

const Login = lazy(() => import('@/pages/Users/Login'));
const Register = lazy(() => import('@/pages/Users/Register'));
const Logout = lazy(() => import('@/pages/Users/Logout'));
const Category = lazy(() => import('@/pages/Category/Category'));
const TagList = lazy(() => import('@/pages/Tags/TagList'));
const Home = lazy(() => import('@/pages/Index/Home'));
const Details = lazy(() => import('@/pages/Posts/Details'));
const IndexDetails = lazy(() => import('@/pages/Posts/IndexDetails'));
const Counter = lazy(() => import('@/pages/Immers/ImmerReducerViewers'));
const ImmerViewers = lazy(() => import('@/pages/Immers/ImmerViewers'));

const datas = [
    {
        path: '/immerdux',
        title: '测试ImmerRedux',
        exacts: false,
        component: Counter,
    },
    {
        path: '/indexdetails',
        title: '测试useThrottle',
        exacts: false,
        component: IndexDetails,
    },
    {
        path: '/immviewer',
        title: '测试Immer',
        exacts: false,
        component: ImmerViewers,
    },
    {
        path: '/login',
        title: '用户登录',
        exacts: false,
        component: Login,
    },
    {
        path: '/register',
        title: '注册',
        exacts: false,
        component: Register,
    },
    {
        path: '/logout',
        title: '登出',
        exacts: false,
        component: Logout,
    },
    {
        path: '/categroy',
        title: '分类',
        exacts: false,
        component: Category,
    },
    {
        path: '/tag',
        title: '标签',
        exacts: false,
        component: TagList,
    },
    {
        path: '/index',
        title: '首页',
        exacts: true,
        component: Home,
    },
    {
        path: '/',
        component: Home,
        title: '首页',
        exacts: true,
    },
    {
        path: '/detail',
        title: '详情',
        exacts: false,
        component: Details,
    },
];

export default datas;
