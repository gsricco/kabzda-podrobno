import React, {useState} from "react";

export default {
    title: 'UseState demo',
}

function generateData(){
    console.log('generate');
    return 1;
}

export const Example1 = () => {

    console.log('example1');

    // const initValue = useMemo(generateData,[]) - оптимизация с помощью useMemo

    const [counter, setCounter] = useState<number>(generateData);

    // const changer = (state:number)=>{
    //     return state+1
    // }

    return <>
        <button onClick={() => setCounter((state)=>state+1)}>+</button>
        {/*<button onClick={() => setCounter(changer)}>+</button>*/}
        {counter}
    </>
}

