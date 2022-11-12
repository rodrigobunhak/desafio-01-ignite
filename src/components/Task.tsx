import { Trash, CheckCircle, Circle } from "phosphor-react";

import styles from './Task.module.css';

type Task = {
  id: number;
  text: string;
  status: string;
}

type TaskProps = {
  task: Task;
  deleteTask: (taskId: number) => void;
  changeStatusTask: (taskId: number) => void;
}

export function Task({ task, deleteTask, changeStatusTask }: TaskProps) {
  function handleDeleteTask() {
    deleteTask(task.id);
  }

  function handleStatusTask() {
    changeStatusTask(task.id);
  }

  return (
    <>
      {task.status === 'doing' &&
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={handleStatusTask}>
                <Circle size={20} />
            </button>

            <p className={styles.textDoing}>{task.text}</p>

            <button className={styles.deleteButton} onClick={handleDeleteTask}>
                <Trash size={20} />
            </button>
        </div>
      }

      {task.status === 'done' &&
        <div className={styles.task}>
          <button className={styles.checkContainer} onClick={handleStatusTask}>
              <CheckCircle size={20} weight="fill" />
          </button>

          <p className={styles.textDone}>{task.text}</p>

          <button className={styles.deleteButton} onClick={handleDeleteTask}>
              <Trash size={20} />
          </button>
        </div>
      }
    </>
  )
}