import s from "./Clock.module.css";
import {ClockViewPropsType} from "./Clock";

export const getTwoDigitalString = (numTime: number) => numTime < 10 ? '0' + numTime : numTime


export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <div className={s.digitalClock}>
            <span>{getTwoDigitalString(date.getHours())}</span>
            :
            <span>{getTwoDigitalString(date.getMinutes())}</span>
            :
            <span>{getTwoDigitalString(date.getSeconds())}</span>
        </div>
    </>
}