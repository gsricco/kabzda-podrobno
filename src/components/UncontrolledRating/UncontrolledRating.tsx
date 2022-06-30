import React, {MouseEventHandler, useState} from "react";
import {RatingValueType} from "../Rating/Rating";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
    defualtValue?: RatingValueType
    onChange:(value:RatingValueType)=>void
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log("Rating rendering")

    let [value, setValue]=useState<number>(props.defualtValue?props.defualtValue:0);

    return (
        <div>
            <Star selected={value > 0} setValue={()=>{setValue(1);props.onChange(1)}}/>
            <Star selected={value > 1} setValue={()=>{setValue(2);props.onChange(2)}}/>
            <Star selected={value > 2} setValue={()=>{setValue(3);props.onChange(3)}}/>
            <Star selected={value > 3} setValue={()=>{setValue(4);props.onChange(4)}}/>
            <Star selected={value > 4} setValue={()=>{setValue(5);props.onChange(5)}}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    // value: 0 | 1 | 2 | 3 | 4 | 5
    setValue:()=>void
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    const changeRating = () => {
        props.setValue()
    }


    return <span onClick={changeRating}>
        {props.selected ? <b>star </b>: 'star '}
    </span>

    // return props.selected ? <span><b>star </b></span>:<span>star </span>
    /*if (props.selected) {
        return <span><b>star </b></span>
    } else return <span>star </span>*/
}