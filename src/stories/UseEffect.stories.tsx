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

export const SetIntervalExample = () => {
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
        const intervalId = setInterval(() => {
            // console.log('setInterval'+counter);
            // setCounter(counter + 1);
            setCounter(state=>state + 1);
        }, 1000)
        return ()=>{
            clearInterval(intervalId)
        }

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

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1);
    console.log('ResetEffectExample'+ counter)

    useEffect(() => {
        console.log('effect occurred'+ counter)
        return ()=>{
            console.log('RESET EFFECT'+ counter)
        }
    }, [counter])

    const increase = ()=>setCounter(counter+1)

    return <>
        Hello, counter: {counter}<button onClick={increase}>+1</button>
    </>
}

export const KeyTrackerExample = () => {

    const [text, setText] = useState('');
    console.log('KeyTrackerExample'+ text)

    useEffect(() => {

        const handler =(e:KeyboardEvent)=>{
            console.log(e.key);
            setText(text+e.key)
            // setText((state)=>state+e.key)
        }

       window.addEventListener('keypress',handler)
            return ()=>{
                window.removeEventListener('keypress',handler)
            }
    }, [text]);



    return <>
        Typed text: {text}
    </>
}
export const SetTimeoutExample = () => {

    const [text, setText] = useState('');
    console.log('SetTimeoutExample')

    useEffect(() => {
        let i=1
        const timeoutId=setTimeout(()=>{

            console.log(`timeout expired ${i++}`)
            setText(`3 seconds tyty ${i++}`)
        },3000)
            return ()=>{
                clearTimeout(timeoutId)
            }
    }, [text]);



    return <>
        text: {text}
    </>
}
