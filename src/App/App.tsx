import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import style from './App.module.css';
import Cron from '../components/cron';
import { Itasks } from '../components/types/Itasks';

function App() {
  const [tasks, setTasks] = useState<Itasks[] | []>([]);
  const [selected, setSelected] = useState<Itasks>();

  function selectTask(SelectedTask: Itasks) {
    setSelected(SelectedTask);
    setTasks(oldTasks => oldTasks.map(task => {
      if (task.id === SelectedTask.id) {
        return {...task, isSelected: true}
      } else {
        return {...task, isSelected: false}
      }
    }));
  }

  function finalizeTask() {
    if (selected) {
      setSelected(undefined);
      setTasks(oldTasks => oldTasks.map(task => {
        if (task.id === selected.id) {
          return {...task, isSelected: false, isCompleted: true}
        } else {
          return task;
        }
      }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
        tasks={tasks} 
        selectTask={selectTask}
      />
      <Cron
        selected={selected}
        finalizeTask={finalizeTask}
      />
    </div>
  );
}

export default App;
