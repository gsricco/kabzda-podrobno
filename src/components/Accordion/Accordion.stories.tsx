import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Accordion stories',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes:{
        color:{
            control:'color',
            table:{
                category:'Colors'
            }
        },
        onChange:{
            table:{
                category:'Events'
            }
        },

    }
    };

const callback = action('accordion mode change event fired');
const onClickCallback = action('some item was clicked');


const Template:Story<AccordionPropsType> = (args) => <Accordion {...args} />;
const callbacksProps ={
    onChange:callback,
}


export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Menu',
    collapsed:true,

};




export const CollapsedMode = ()=> <Accordion titleValue={'Users'} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/>
export const UncollapsedMode = ()=> <Accordion titleValue={'Users'} collapsed={false} onChange={callback} items={[{title: 'Victor', value:1}, {title: 'Yriy', value:2}, {title: 'Dimych', value:3}]} onClick={onClickCallback}/>

export const CollapsedChanging = ()=> {
    const [value,setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Users'} collapsed={value} onChange={()=>setValue(!value)} items={[{title: 'Victor', value:1}, {title: 'Yriy', value:2}, {title: 'Dimych', value:3}]} onClick={onClickCallback}/>
}

