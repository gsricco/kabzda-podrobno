import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff1} from "./UncontroledOnOff1";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledOnOff1 stories',
    component: UncontrolledOnOff1,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    };

const callback = action('on or off clicked');

export const OnMode = ()=> <UncontrolledOnOff1 defualtOn={true} onChange={callback}  />
export const OffMode = ()=> <UncontrolledOnOff1 defualtOn={false} onChange={callback}  />

export const DefualtInput = ()=> <input defaultValue={'oh-ho-ho'} />


