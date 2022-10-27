import { PlusCircle } from 'phosphor-react';

import styles from './InsertInput.module.css';

export function InsertInput() {
    return (
        <div className={styles.inputBox}>
            <input type="text" placeholder="Adicione uma nova tarefa"/>

            <button>
                Criar
                <PlusCircle size={20}/>
            </button>
        </div>
    )
}