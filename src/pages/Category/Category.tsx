import React from "react" 

interface infoDatas {
    nickname: string
    email: string
    passwd: string
    isRemember: boolean
}

const Category: React.FC<infoDatas> = () => {

    return (
        <div>分类</div>
    )
}


export default React.memo(Category)