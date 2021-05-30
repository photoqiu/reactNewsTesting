import React from "react" 

interface infoDatas {
    nickname: string
    email: string
    passwd: string
    isRemember: boolean
}

const TagList: React.FC<infoDatas> = () => {

    return (
        <div>Tag 列表</div>
    )
}


export default React.memo(TagList)