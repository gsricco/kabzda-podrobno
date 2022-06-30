import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";

import UncontrolledAccordion from "./UncontrolledAccordion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontroledAccordion stories',
    component: UncontrolledAccordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    };

const callback = action('accordion mode change event fired');


export const CollapsedChanging = ()=> {
     return <UncontrolledAccordion titleValue={'Users'} />
}

