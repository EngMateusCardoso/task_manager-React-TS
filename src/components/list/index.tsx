import React from "react";
import style from "./list.module.css";
import Item from "./item";
import { Itasks } from "../types/Itasks";

interface Props {
    tasks: Itasks[],
    selectTask: (selectedTask: Itasks) => void
}

export default function List({tasks, selectTask} : Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <Item
                        selectTask={selectTask}
                        key={task.id}
                        {...task}
                    />
                ))}
            </ul>
        </aside>
    )
}
