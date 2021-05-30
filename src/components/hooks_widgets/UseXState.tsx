import { useEffect, useRef, useState } from 'react'

interface update {
    current:Function
}

type UpdateFunc = Partial<update>;
 /**
   *
   * @param initState
   * @returns {[*, setXState]}
****/
const useXState = (initState:any) => {
    const [state, setState] = useState(initState)
    let isUpdate:UpdateFunc = useRef()
    const setXState = (state:Function | any, cb:Function) => {
        setState((prev: any) => {
            isUpdate.current = cb
            return typeof state === 'function' ? state(prev) : state
        })
    }
    useEffect(() => {
        console.log("isUpdate: ", isUpdate, isUpdate.current)
        if(!!isUpdate.current) {
            isUpdate.current()
        }
    }, [!!isUpdate.current])
    return [state, setXState]
}

export default useXState