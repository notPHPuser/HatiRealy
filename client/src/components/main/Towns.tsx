import React from 'react';
import styles from './main.module.css';
import { X } from 'lucide-react';

export default function Towns({
  setIsOpened,
}: {
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className={styles.towns}>
        <div className={styles.top_div_towns}>
          <X className={styles.close} onClick={() => setIsOpened(false)} />
          <p className={styles.p_towns}>Выберете город</p>
          <input className={styles.choice_towns} type='text' />
        </div>
        <div className={styles.all_towns}></div>
      </div>
    </>
  );
}
