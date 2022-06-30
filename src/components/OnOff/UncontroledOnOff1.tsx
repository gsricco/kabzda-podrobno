import React, {useState} from 'react';
import s from './OnOff1.module.css'

type PropsType = {
    onChange:(on:boolean)=>void
    defualtOn?:boolean
}

export const UncontrolledOnOff1 = (props: PropsType) => {

    let [on,setOn] = useState(props.defualtOn? props.defualtOn: false);

    const onStyle = {
        width:'30px',
        height:'20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft:'5px',
        padding:'2px',
        background: on ? 'green':'white'
    };
    const offStyle = {
        width:'30px',
        height:'20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft:'5px',
        padding:'2px',
        background:on ? 'white':'red'
    };
    const indicatorStyle = {
        width:'10px',
        height:'10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft:'5px',
        padding:'2px',
        background:on ? 'green':'red'
    };

    const onClicked = ()=> {
        setOn(true)
        props.onChange(true)
    }
    const ofClicked = ()=> {
        setOn(false)
        props.onChange(false)
    }
    const circleCliked = ()=> {
        setOn(!on)
        props.onChange(!on)
    }


    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={ofClicked}>Off</div>
            <div  style={indicatorStyle} onClick={circleCliked}></div>
        </div>
    );
}


