import { useSelector, useDispatch } from "react-redux"
import { RootState, AppDispatch } from "../../app/store"
import { decrement, increment, incrementByAmount } from "./counterSlice"

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch: AppDispatch = useDispatch<AppDispatch>()

    const incrementFn = () => {
        dispatch(increment())
    }

    const incrementByAmountFn = () => {
        dispatch(incrementByAmount(5))
    }


    return (
        <div>
            <span className="text-xl">{count}</span><br />
            <button className="btn btn-success text-white bg-slate-600 p-5 mx-3 " onClick={() => dispatch(decrement())}>Decrement -</button>
            <button onClick={incrementFn} className="btn btn-success text-white bg-slate-600 p-5 ">Increment +</button>
            <span></span><br />
            <button onClick={incrementByAmountFn} className="btn btn-success text-white bg-slate-600 p-5 mt-2">Increment by Amount</button>
        </div>

    )
}

export default Counter