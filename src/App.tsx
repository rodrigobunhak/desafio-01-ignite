import { useState } from 'react';
import { Header } from './components/Header';
import { InsertInput } from './components/InsertInput';
import { Panel } from './components/Panel';
import './global.css';

type Task = {
  id: number;
  text: string;
  status: string;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function createTask(text: string) {
    setTasks([...tasks, {
      id: tasks.length + 1,
      text,
      status: 'doing',
    }])
  }

  function deleteTask(taskId: number) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskId
    })

    setTasks(tasksWithoutDeletedOne);
  }

  function changeStatusTask(taskId: number) {
    const tasksWithUpdatedOne = tasks.map(task => {
      if (task.id === taskId) {
        if (task.status === 'done') {
          return {
            id: task.id,
            text: task.text,
            status: 'doing'
          }
        } else {
          return {
            id: task.id,
            text: task.text,
            status: 'done'
          }
        }
      }
      return task;
    })

    setTasks(tasksWithUpdatedOne);
  }
  
  return (
    <>
      <Header />

      <InsertInput createTask={createTask} />

      <Panel tasks={tasks} deleteTask={deleteTask} changeStatusTask={changeStatusTask} />
    </>
  )
}
