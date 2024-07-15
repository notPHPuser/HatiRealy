import React from 'react';
import styles from './header.module.css';

export default function RegOrProfile() {
  return (
    <>
      <div className={styles.reg_or_profile}>
        <button className={`${styles.button_for_reg} ${styles.first}`}>
          <p className={styles.p_for_reg}> + Подать за 0 руб</p>{' '}
        </button>
        <button className={`${styles.button_for_reg} ${styles.second}`}>
          <p className={styles.p_for_reg}> Войти</p>
        </button>
      </div>
    </>
  );
}
