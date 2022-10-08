import {DEC, INC, RESET, useCount1Reducer} from "./reducers";


const Count1 = () => {

    const [state,dispatch]=useCount1Reducer()

    return(<div>
        <h1>Count1:{state.count1}</h1>
        <button onClick={()=>{dispatch({type:INC})}}>+</button>
        <button onClick={()=>{dispatch({type:DEC})}}>-</button>
        <button onClick={()=>{dispatch({type:RESET})}}>RESET</button>
    </div>)
}
export {
    Count1
}