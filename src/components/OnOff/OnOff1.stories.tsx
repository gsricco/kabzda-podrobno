import React, {useState} from 'react';
import {OnOff1} from "./OnOff1";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'OnOff1 stories',
    component: OnOff1,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    };

const callback = action('on or off clicked');

export const OnMode = ()=> <OnOff1 on={true} onChange={callback}  />
export const OffMode = ()=> <OnOff1 on={false} onChange={callback}  />

export const ModeChanging = ()=> {
    const [value,setValue] = useState<boolean>(true);
    return <OnOff1 on={value} onChange={setValue}/>
}

