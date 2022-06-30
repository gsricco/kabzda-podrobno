import React, {useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import UncontrolledAccordion from "../components/UncontrolledAccordion/UncontrolledAccordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'input',
    // component: input,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// const callback = action('accordion mode change event fired');


export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue);
    }
    return (
        <><input onChange={onChange}/> - {value}</>
    )
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }


    return (
        <><input ref={inputRef}/>
            <button onClick={save}>save</button>
            - actual value: {value}</>
    )
}


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value);
    }

    return (
        <><input value={parentValue} onChange={onChange}/>
            - actual value: {parentValue}</>
    )
}


export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked);
    }

    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string|undefined>(undefined);

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value);
    }

    return (
        <select value={parentValue}>
            <option>none</option>
            <option value="1">Minsk</option>
            <option value="2">Bobruysk</option>
            <option value="3">Gomel</option>
        </select>
    )
}


export const ControlledInputWithFixedValue = () => <input value={'controlled input'}/>;

