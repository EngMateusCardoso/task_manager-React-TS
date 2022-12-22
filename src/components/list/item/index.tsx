import React from "react";
import style from "../list.module.css";
import { Itasks } from "../../types/Itasks";

interface Props extends Itasks {
    selectTask: (selectedTask: Itasks) => void
}

export default function Item(
    {
        task, 
        time, 
        isSelected, 
        isCompleted, 
        id, 
        selectTask
    } : Props) {
    return (
        <li 
            className={`${style.item} ${isSelected ? style.itemSelecionado : ''} ${isCompleted ? style.itemCompletado : ''}`}
            onClick={() => !isCompleted && selectTask({
                task,
                time,
                isSelected,
                isCompleted,
                id
            })}
        >
            <p>{task}</p>
            <span>{time}</span>
            {isCompleted && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </li>
    )
}
