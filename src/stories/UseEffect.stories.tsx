import React, {useEffect, useState} from "react";

export default {
    title: 'UseEffect demo',
}


export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);
    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString();
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        //document.title = 'User '
    })

    useEffect(() => {
        console.log('useEffect only first render(componentDidMount)');
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change');
        document.title = counter.toString();
    }, [counter])


    return <>
        Hello,{counter} {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);
    console.log('SetTimeoutExample')

    // useEffect(() => {
    //     setTimeout(()=>{
    //         console.log('setTimeout')
    //         document.title = counter.toString();
    //     },1000)
    // },[counter])

    useEffect(() => {
        setInterval(() => {
            console.log('setInterval'+counter);
            // setCounter(counter + 1);
            setCounter(state=>state + 1);
        }, 1000)
    }, [counter])

    // setTimeout(()=>{
    //     console.log('setTimeout')
    //     document.title = counter.toString();
    // },1000)

    return <>
        Hello, counter: {counter} - fake:{fake}
        {/*<button onClick={() => setFake(fake + 1)}>+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
    </>
}

