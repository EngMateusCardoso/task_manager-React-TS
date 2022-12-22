import React, { useEffect, useState } from "react";
import Button from "../Button";
import Watch from "./watch";
import style from "./cron.module.css";
import { Itasks } from "../types/Itasks";
import { timeForSeconds } from "../../common/utils/time";

interface Props {
    selected: Itasks | undefined,
    finalizeTask: () => void
}

export default function Cron({selected, finalizeTask}: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected && selected.time) {
            setTime(timeForSeconds(selected.time));
        }
    }, [selected])
    
    function regress(count: number = 0) {
        setTimeout(() => {
            setTime(count);
            if (count > 0) {
                regress(count - 1);
            } else {
                finalizeTask();
            }
        }, 1000
        )
    }

    return (
        <div className={style.cronometro}>
            <p className={style.title}>Chose a card and start the timer </p>
            <div className={style.relogioWrapper}>
                <Watch time={time}/>
            </div>
            <Button onClick={() => regress(time)}>
                Start
            </Button>
        </div>
    )
}