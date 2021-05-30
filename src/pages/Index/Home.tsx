import React from "react" 
import { Link } from "react-router-dom"

interface infoDatas {
    nickname: string
    email: string
    passwd: string
    isRemember: boolean
}

const Home: React.FC<infoDatas> = () => {

    return (
        <>
        <div>首页</div>
        <Link to="/login">登录</Link>
        <Link to="/immviewer">登录1</Link>
        <Link to="/immerdux">登录2</Link>
        <Link to="/detail">登录3</Link>
        </>
    )
}


export default React.memo(Home)