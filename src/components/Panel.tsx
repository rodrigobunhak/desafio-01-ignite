import { ListChecks, Trash } from 'phosphor-react';
import { useEffect, useState } from 'react';

import { Task } from './Task';

import styles from './Panel.module.css';

type Task = {
    id: number;
    text: string;
    status: string;
}

type PanelProps = {
    tasks: Task[];
    deleteTask: (taskId: number) => void;
    changeStatusTask: (taskId: number) => void;
}

export function Panel({ tasks, deleteTask, changeStatusTask }: PanelProps) {
    const [taskQuantity, setTaskQuantity] = useState(0);
    const [taskDoneQuantity, setTaskDoneQuantity] = useState(0);

    useEffect(() => {
        setTaskQuantity(tasks.length);
        const quantityOfDoneTasks = tasks.filter((task) => task.status === 'done').length;
        setTaskDoneQuantity(quantityOfDoneTasks);
    }, [tasks])
    
    return (
        <div className={styles.panel}>
            <header>
                <div className={styles.created}>
                    Tarefas criadas
                    <span>{taskQuantity}</span>
                </div>
                <div className={styles.done}>
                    Concluídas
                    <span>{taskDoneQuantity} de {taskQuantity}</span>
                </div>
            </header>
            <div className={styles.content}>
                {tasks.length <= 0 &&
                    <>
                        <ListChecks size={56} className={styles.icon}/>
                        <strong>Você não tem tarefas cadastradas</strong>
                        Crie tarefas e organize seus itens a fazer
                    </>
                }
                
                {tasks.map((task) => {
                    return (
                        <Task key={task.id} task={task} deleteTask={deleteTask} changeStatusTask={changeStatusTask} />
                    )
                })}

            </div>
        </div>
    )
}