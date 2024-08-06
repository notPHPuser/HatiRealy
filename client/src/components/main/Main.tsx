import React, { useEffect, useRef, useState } from 'react';
import styles from './main.module.css';
import { Send } from 'lucide-react';
import Towns from './Towns';

export default function Main() {
  const [isOpened, setIsOpened] = useState(false);
  const prevIsOpened = useRef(isOpened);
  const openClick = () => {
    setIsOpened(true);
  };
  useEffect(() => {
    if (isOpened !== prevIsOpened.current) {
      if (isOpened) {
        document.body.style.overflow = 'hidden'; // Disable scrolling
      } else {
        document.body.style.overflow = 'auto'; // Enable scrolling
      }
    }
    prevIsOpened.current = isOpened;
  }, [isOpened]);

  return (
    <>
      <div className={styles.main}>
        <div onClick={openClick} className={styles.all_info_for_main}>
          <button className={styles.button_country}>
            <Send size={20} color='white' />
            <span className={styles.country}>Москва</span>
          </button>
          {isOpened && <Towns setIsOpened={setIsOpened} />}
          <div className={styles.choice_for_main}>
            <h1 className={styles.main_h1}>Если недвижимость, то Хаты</h1>
          </div>
        </div>
      </div>
    </>
  );
}
