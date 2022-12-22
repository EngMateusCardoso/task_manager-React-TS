import React from "react";
import style from "./watch.module.css";

interface Props {
    time: number | undefined
}

export default function Watch({time = 0}: Props) {
    const mim = Math.floor(time / 60);
    const seg = time % 60;
    const [mimLeft, mimRight] = String(mim).padStart(2, "0").split("");
    const [segLeft, segRight] = String(seg).padStart(2, "0").split("");

    return(
        <>
            <span className={style.relogioNumero}>{mimLeft}</span>
            <span className={style.relogioNumero}>{mimRight}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segLeft}</span>
            <span className={style.relogioNumero}>{segRight}</span>
        </>
    )
}
