import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {OnOff1} from "./components/OnOff/OnOff1";
import {UncontrolledOnOff1} from "./components/OnOff/UncontroledOnOff1";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";


function App() {
    // console.log("App rendering")
    let [status, setStatus] = useState(true);
    const OnOff1Memo = React.memo(OnOff1);
    const OnOffMemo = React.memo(OnOff);
    const UncontrolledAccordionMemo = React.memo(UncontrolledAccordion);
    const UncontrolledOnOff1Memo = React.memo(UncontrolledOnOff1);



    const butStatus = () => {
        setStatus(!status);
    }
    let [ratingValue, setRaitngValue] = useState<RatingValueType>(0)
    let [accordiondColapsed, setAccordiondColapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className={'App'}>
            <div><OnOffMemo status={status} butStatus={butStatus}/>
                <button onClick={butStatus}>ON/OFF</button>
            </div>

            <div>
                <UncontrolledAccordionMemo titleValue={"MenuAccordion"}/>
                <UncontrolledAccordionMemo titleValue={"BlogAccordion"}/>
            </div>
                {/*<Accordion titleValue={"Blog"}
                           collapsed={accordiondColapsed}
                           onChange={() => setAccordiondColapsed(!accordiondColapsed)}/>*/}
            <div>
            <OnOff1Memo on={switchOn} onChange={setSwitchOn}/>
            {/*<div>
                <UncontrolledRating/>
                <Rating value={ratingValue} onClick={setRaitngValue}/>
            </div>*/}

            <UncontrolledOnOff1Memo onChange={()=> console.log(false)}/>
            <UncontrolledOnOff1Memo onChange={setSwitchOn}/>{switchOn.toString()}
            </div>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
