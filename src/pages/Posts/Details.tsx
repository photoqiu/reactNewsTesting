import React from "react" 

interface infoDatas {
    nickname: string
    email: string
    passwd: string
    isRemember: boolean
}

const Details: React.FC<infoDatas> = () => {

    return (
        <div>详情</div>
    )
}


export default React.memo(Details)