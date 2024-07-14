import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
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
          </Link>
          <Link className={styles.Link_header_photo} to='/like'>
            <img src='/like.png' alt='like' className={styles.photo_header} />
          </Link>
          <Link className={styles.Link_header_photo} to='/save_find'>
            <img src='/save_find.png' alt='save_find' className={styles.photo_header} />
          </Link>
          <Link className={styles.Link_header_photo} to='/notification'>
            <img src='/notification.png' alt='notification' className={styles.photo_header} />
          </Link>
        </div>
      </div>
    </>
  );
}
