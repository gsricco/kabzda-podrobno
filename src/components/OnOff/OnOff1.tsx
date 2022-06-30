import React, {useState} from 'react';
import s from './OnOff1.module.css'

type PropsType = {
    on: boolean
    onChange:(on: boolean)=>void
}

export const OnOff1 = (props: PropsType) => {
    const onStyle = {
        width:'30px',
        height:'20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft:'5px',
        padding:'2px',
        background: props.on ? 'green':'white'
    };
    const offStyle = {
        width:'30px',
        height:'20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft:'5px',
        padding:'2px',
        background:props.on ? 'white':'red'
    };
    const indicatorStyle = {
        width:'10px',
        height:'10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft:'5px',
        padding:'2px',
        background:props.on ? 'green':'red'
    };



    return (
        <div>
            <div style={onStyle} onClick={()=> {props.onChange(true)}}>On</div>
            <div style={offStyle} onClick={()=> {props.onChange(false)}}>Off</div>
            <div  style={indicatorStyle} onClick={()=> {props.onChange(!props.on)}}></div>
        </div>
    );
}


