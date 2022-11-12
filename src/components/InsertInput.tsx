import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './InsertInput.module.css';

type InsertInputProps = {
    createTask: (text: string) => void;
}

export function InsertInput({ createTask }: InsertInputProps) {
    const [newTaskText, setNewTaskText] = useState('');

    function handleCreateTask() {
        createTask(newTaskText);
        setNewTaskText('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value);
    }

    return (
        <div className={styles.inputBox}>
            <input type="text" placeholder="Adicione uma nova tarefa" onChange={handleNewTaskChange} value={newTaskText}/>

            <button onClick={handleCreateTask}>
                Criar
                <PlusCircle size={20}/>
            </button>
        </div>
    )
}