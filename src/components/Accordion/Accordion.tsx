import React from "react";

type ItemType = {
    title:string
    value:any
}

export type AccordionPropsType = {
    titleValue: string,
    collapsed:boolean
    /**
     * discriber onChange
     */
    onChange:()=>void
    /**
     * Optional color of header text
     */
    color?:string
    // items:Array<string>
    items:ItemType[]
    onClick:(value:any)=>void
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} color={props.color}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onChange:()=>void
    color?:string

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")

    return <h3 style={{color:props.color?props.color:'black'}} onClick={props.onChange} >--{props.title}--</h3>
}


export type AccordionBodyPropsType = {
    items:ItemType[]
    onClick:(value:any)=>void
}

function AccordionBody(props:AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            {props.items.map((el, index)=><li key={index} onClick={()=> {
                props.onClick(el.value)
            }}>{el.title}</li>)}
        </ul>
    );
}

export default Accordion;