import React, { useState } from "react";
import Button from "../Button";
import style from "./form.module.css";
import { Itasks } from "../types/Itasks";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<Itasks[]>>
}

export default function Form({setTasks}: Props){

    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00:00");

    function sendForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTasks(oldTasks =>
                [
                    ...oldTasks, 
                    {
                        task,
                        time,
                        isSelected: false,
                        isCompleted: false,
                        id: uuidv4()
                    }
                ]
            );
            setTask("");
            setTime("00:00:00");
    };

    return (
        <form className={style.novaTarefa} onSubmit={sendForm} >
            <div className={style.inputContainer}>
                <label htmlFor="task">Add a new task</label>
                <input 
                    type="text"
                    name="task"
                    id="task"
                    placeholder="Enter a task"
                    value={task}
                    onChange={event => setTask(event.target.value)}
                    required
                />
            </div>

            <div className={style.inputContainer} >
                <label htmlFor="time">Time</label>
                <input 
                    type="time"
                    name="time"
                    id="time"
                    step={1}
                    min="00:00:00"
                    max="08:00:00"
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    required
                />
            </div>
            <Button type="submit">Add task</Button>
        </form>
    )
}
