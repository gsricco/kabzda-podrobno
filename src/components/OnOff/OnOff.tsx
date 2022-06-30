import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    status: boolean
    butStatus:()=>void
}

export const OnOff = (props: OnOffPropsType) => {
    return (
        <div className={s.container}>
            {props.status && (<div className={s.on}>ON</div>)}
            {props.status && (<div className={s.off}>OFF</div>)}
            {props.status && (<div  onClick={()=>props.butStatus()} className={s.circle}></div>)}
            {!props.status && (<div className={s.on1}>ON</div>)}
            {!props.status && (<div className={s.off1}>OFF</div>)}
            {!props.status && (<div onClick={()=>props.butStatus()} className={s.circle1}></div>)}
        </div>
    );
}


