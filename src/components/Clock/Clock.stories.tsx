import React from "react";
import {Clock} from "./Clock";


export default {
    title: 'Clock demo',
    component:Clock,
}


export const BaseAnalogClockExample = () => {
    return <>
        <Clock mode={'analog'}/>
    </>
};

export const BaseDigitalClockExample = () => {
    return <>
        <Clock mode={'digital'}/>
    </>
}
