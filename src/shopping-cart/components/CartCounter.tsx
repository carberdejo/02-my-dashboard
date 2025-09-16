'use client';
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlices";
import { useEffect } from "react";

interface Props {
    value?: number;
}

export interface CounterResponse{
  method:string;
  count: number;
}

const getApiCounter = async():Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then(res => res.json());
  return data;
}

export const CartCounter = ( {value = 0}:Props ) => {

    // const [cont, setcont] = useState(value);
    const cont = useAppSelector( state => state.counter.count);
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //   dispatch(initCounterState(value));
    
    // }, [dispatch, value])

    useEffect(() => {
      getApiCounter()
        .then( ({count}) => dispatch(initCounterState(count)) )
      
    }, [dispatch])
    

    return (
    <>
        <span className="text-9xl">{cont}</span>

        <div className="flex space-x-4 ">
          <button className="flex items-center justify-center p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl m-2"
          onClick={() => dispatch(addOne())}>
            +1
          </button>
          <button className="flex items-center justify-center p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl m-2"
          onClick={() => dispatch(substractOne())}>
            -1
          </button>
        </div>
    </>
    )
}   

