import {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";


type PropsType ={
    mode?: 'digital'| 'analog'
}


// let setForm = true;

export const Clock:React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('tick-tack')
            setDate(new Date())
        }, 1000);
        return () => {
            clearInterval(intervalID)
        }
    }, [])



    // const secondsString = getTwoDigitalString(date.getSeconds());
    // const minutesString = getTwoDigitalString(date.getMinutes());
    // const hoursString = getTwoDigitalString(date.getHours());
   /* function initLocalClocks() {
        // Узнать местное время с помощью JS
        const date = new Date;
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hours = date.getHours();

        // Создать объект, хранящий все стрелки и их углы в градусах
        var hands = [
            {
                hand: 'hours',
                angle: (hours * 30) + (minutes / 2)
            },
            {
                hand: 'minutes',
                angle: (minutes * 6)
            },
            {
                hand: 'seconds',
                angle: (seconds * 6)
            }
        ];
        // С помощью цикла установить угол для каждой из стрелок
        for (let j = 0; j < hands.length; j++) {
            let elements = document.querySelectorAll('.' + hands[j].hand);
            for (let k = 0; k < elements.length; k++) {
                elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
                elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
                // Если это минутная стрелка, сохранить положение секундной стрелки (для дальнейшего расчета положения минутной стрелки)
                if (hands[j].hand === 'minutes') {
                    elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
                }
            }
        }
    }*/
    /*const setFormChanged = () => {
        setForm = !setForm
    }
    console.log(Number(getTwoDigitalString(date.getSeconds()))*6)*/


    let view;
    switch (props.mode){
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return <div>{view}</div>
    // (
    //     <div>
    //         {/*<button onClick={setFormChanged}>digital/analog</button>*/}
    //         {setForm
    //             ? <div className={s.digitalClock}>
    //                 <span>{getTwoDigitalString(date.getHours())}</span>
    //                 :
    //                 <span>{getTwoDigitalString(date.getMinutes())}</span>
    //                 :
    //                 <span>{getTwoDigitalString(date.getSeconds())}</span>
    //             </div>
    //             : <article className={s.clock}>
    //                 <div className={s.hoursContainer} style={{transform: `rotateZ(${Number(getTwoDigitalString(date.getHours()))*30 +Number(getTwoDigitalString(date.getMinutes()))/2}deg)`}}>
    //                     <div className={s.hours}></div>
    //                 </div>
    //                 <div className={s.minutesContainer} style={{transform: `rotateZ(${Number(getTwoDigitalString(date.getMinutes()))*6}deg)`}}>
    //                     <div className={s.minutes}></div>
    //                 </div>
    //                 <div className={s.secondsContainer} style={{transform: `rotateZ(${Number(getTwoDigitalString(date.getSeconds()))*6}deg)`}}>
    //                     <div className={s.seconds}></div>
    //                 </div>
    //             </article>
    //
    //         }
    //     </div>
    // )
}



export type ClockViewPropsType = {
    date:Date
}



