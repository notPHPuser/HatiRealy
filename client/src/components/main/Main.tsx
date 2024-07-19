import React from 'react';
import styles from './main.module.css';
import { Send } from 'lucide-react';

export default function Main() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.all_info_for_main}>
          <button className={styles.button_country}>
            <Send size={20} color='white' />
            <span className={styles.country}>Москва</span>
          </button>
          <div className={styles.choice_for_main}>
            <h1 className={styles.main_h1}>Если недвижимость, то Хаты</h1>
          </div>
        </div>
      </div>
    </>
  );
}
