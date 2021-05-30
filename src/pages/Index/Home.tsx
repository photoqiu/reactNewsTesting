import React from "react" 
import { Link } from "react-router-dom"
import useXState from "@/components/hooks_widgets/UseXState"

interface infoDatas {
    nickname: string
    email: string
    passwd: string
    isRemember: boolean
}

const Home: React.FC = () => {
    const [netDatas, setXState] = useXState([
        {
            nickname: "photoqiu",
            email: 'photoqiu@163.com',
            passwd: '90',
            isRemember: true
        }
    ])
    
    const objectRef = React.useRef(null)
    objectRef.current = netDatas

    const cb = () => {
        setTimeout(() => {
            console.log(`after add count: ${objectRef.current}`)
        }, 300)
    }

    const addUsers = () =>  {
        setXState((pre:infoDatas[]) => {
            pre
            // pre = [{
            //     nickname: "qiubowinter",
            //     email: 'qiubowinter@163.com',
            //     passwd: '10',
            //     isRemember: false
            // }, {
            //     nickname: "photoqiu",
            //     email: 'photoqiu@163.com',
            //     passwd: '90',
            //     isRemember: true
            // }]
        }, cb)
    }
    return (
        <>
            <div>首页</div>
            <Link to="/login">登录</Link>
            <Link to="/immviewer">登录1</Link>
            <Link to="/immerdux">登录2</Link>
            <Link to="/detail">登录3</Link>
            <div className="app-datas">
                { console.log("values:", JSON.stringify(netDatas)) }
                {
                    netDatas && netDatas.map((value:infoDatas|any, index:number) => {
                        return (
                            <div className="users" key={index}>
                                <h3>nickname: {value.nickname}</h3>
                                <h3>email: {value.email}</h3>
                                <h3>password: {value.passwd}</h3>
                                <h3>isRemember: {value.isRemember}</h3>
                            </div>
                        )
                    })
                }
                
                <button onClick={addUsers}>add Users</button>
            </div>
        </>
    )
}


export default React.memo(Home)