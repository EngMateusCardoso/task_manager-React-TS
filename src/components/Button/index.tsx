import React from "react";
import style from "./Button.module.css";

interface Props {
    children: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

export default function Button({children, type, onClick}: Props) {
    //(2)
    // const style = {
    //     backgroundColor: 'green',
    //     color: 'blue',
    // }
    return (
        // CSS inline (1)

        // <button style={{
        //     backgroundColor: 'blue',
        //     color: 'white',
        // }}>
        //     Click me!
        // </button>

        // CSS in line in a variable (2)
        // <button style={style}>
        //     Click me!
        // </button>
        <button onClick={onClick} type={type} className={style.botao} >
            {children}
        </button>
    )
}