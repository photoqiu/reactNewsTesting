import {useState, useEffect, useRef} from 'react'

const usePrevious = (initState) => {
    const [state, _setState] = useState(initState)
    const previousState = useRef(initState)
    const setState = (state) => {
      _setState(prev => {
        previousState.current = prev
        return typeof state === 'function' ? state(prev) : state
      })
    }
    useEffect(() => {
      console.log('previous: ', previousState.current)
    }, [state])

    return [previousState.current, state, setState]
}


// const App = () => {
//     const [prevState, state, setCount] = usePrevious(0)

//     return (
//       <div>
//         current: {state}<br/>
//         previous: {prevState}<br/>
//         <button onClick={() => setCount(prev => prev + 1)}>add</button>
//       </div>
//     )
//   }
