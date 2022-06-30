import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {UncontrolledRating} from "./UncontrolledRating";
import {Rating} from "../Rating/Rating";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    };
const callback = action('rating changed inside component');

export const EmptyRating = ()=> <UncontrolledRating defualtValue={0} onChange={callback} />


export const Rating1 = ()=> <UncontrolledRating defualtValue={1} onChange={callback}/>
export const Rating2 = ()=> <UncontrolledRating defualtValue={2} onChange={callback}/>
export const Rating3 = ()=> <UncontrolledRating defualtValue={3} onChange={callback}/>
export const Rating4 = ()=> <UncontrolledRating defualtValue={4} onChange={callback}/>
export const Rating5 = ()=> <UncontrolledRating defualtValue={5} onChange={callback}/>


