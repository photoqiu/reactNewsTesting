import React from "react" 

interface infoDatas {
    nickname: string
    email: string
    passwd: string
    isRemember: boolean
}

const Login: React.FC<infoDatas> = () => {

    return (
        <div>用户登录</div>
    )
}


export default React.memo(Login)