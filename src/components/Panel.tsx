import { ListChecks } from 'phosphor-react';

import styles from './Panel.module.css';

export function Panel() {
    return (
        <div className={styles.panel}>
            <header>
                <div className={styles.created}>
                    Tarefas criadas
                    <span>0</span>
                </div>
                <div className={styles.done}>
                    Concluídas
                    <span>0 de 0</span>
                </div>
            </header>
            <div className={styles.content}>
                {/* <Task /> */}
                <ListChecks size={56} className={styles.icon}/>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </div>
        </div>
    )
}