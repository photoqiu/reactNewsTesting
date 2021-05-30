import React from "react" 

interface infoDatas {
    nickname: string
    email: string
    passwd: string
    isRemember: boolean
}

const Register: React.FC<infoDatas> = () => {

    return (
        <div>用户注册</div>
    )
}


export default React.memo(Register)