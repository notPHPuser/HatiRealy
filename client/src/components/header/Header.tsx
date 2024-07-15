import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { Header as HeaderInterface } from '../../interface/headerInterface'; //
import RegOrProfile from './RegOrProfile';

export default function Header() {
  const header: HeaderInterface = {
    messages: 'Сообщения',
    likes: 'Лайки',
    saves: 'Сохранения',
    notifications: 'Уведомления',
  };

  return (
    <>
      <div className={styles.header}>
        <Link className={styles.link_to_main} to='/'>
          <img src='/roofForHeader.png' className={styles.roof} alt='logo' />
          <h1>Хаты</h1>
        </Link>
        <div className={styles.for_photo}>
          <Link className={styles.Link_header_photo} to='/chat'>
            <img src='/chat.png' alt='chat' className={styles.photo_header} />
            <div className={`${styles.text_for_link} ${styles.hidden}`}>
              <p className={styles.text_for_text}> {header.messages}</p>{' '}
            </div>
          </Link>

          <Link className={styles.Link_header_photo} to='/like'>
            <img src='/like.png' alt='like' className={styles.photo_header} />
            <div className={`${styles.text_for_link} ${styles.hidden}`}>
              <p className={styles.text_for_text}>{header.likes}</p>{' '}
            </div>
          </Link>

          <Link className={styles.Link_header_photo} to='/save_find'>
            <img src='/save_find.png' alt='save_find' className={styles.photo_header} />
            <div className={`${styles.text_for_link} ${styles.hidden}`}>
              <p className={styles.text_for_text}>{header.saves}</p>
            </div>
          </Link>

          <Link className={styles.Link_header_photo} to='/notification'>
            <img src='/notification.png' alt='notification' className={styles.photo_header} />
            <div className={`${styles.text_for_link} ${styles.hidden}`}>
              <p className={styles.text_for_text}>{header.notifications}</p>
            </div>
          </Link>
        </div>
        <RegOrProfile />
      </div>
    </>
  );
}
