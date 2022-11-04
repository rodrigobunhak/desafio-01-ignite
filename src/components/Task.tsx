import { Trash, CheckCircle, Circle } from "phosphor-react";

import styles from './Task.module.css';

export function Task() {
  return (
    <>
      <div className={styles.task}>
          <button className={styles.checkContainer}>
              <Circle size={20} />
          </button>

          <p className={styles.textDoing}>Integer massa neque turpis turpis semper. Duis vel sed fames integer.Integer massa neque turpis turpis semper. Duis vel sed fames integer.</p>

          <button className={styles.deleteButton}>
              <Trash size={20} />
          </button>
      </div>

      <div className={styles.task}>
        <button className={styles.checkContainer}>
            <CheckCircle size={20} weight="fill" />
        </button>

        <p className={styles.textDone}>Integer massa neque turpis turpis semper. Duis vel sed fames integer.</p>

        <button className={styles.deleteButton}>
            <Trash size={20} />
        </button>
      </div>
    </>
  )
}