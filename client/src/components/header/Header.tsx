import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { Header as HeaderInterface } from '../../interface/headerInterface'; //
import RegOrProfile from './RegOrProfile';
import { Bell, Heart, MessageSquareText, Search } from 'lucide-react';

export default function Header() {
  const header: HeaderInterface = {
    messages: 'Сообщения',
    likes: 'Избранное',
    saves: 'Сохраненное',
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
            <div className={styles.photo_header}>
              <MessageSquareText color='black' />
            </div>
            <div className={`${styles.text_for_link} ${styles.hidden}`}>
              <p className={styles.text_for_text}> {header.messages}</p>{' '}
            </div>
          </Link>

          <Link className={styles.Link_header_photo} to='/like'>
            <div className={styles.photo_header}>
              <Heart />
            </div>
            <div className={`${styles.text_for_link} ${styles.hidden}`}>
              <p className={styles.text_for_text}>{header.likes}</p>{' '}
            </div>
          </Link>

          <Link className={styles.Link_header_photo} to='/save_find'>
            <div className={styles.photo_header}>
              <Search />
            </div>
            <div className={`${styles.text_for_link} ${styles.hidden}`}>
              <p className={styles.text_for_text}>{header.saves}</p>
            </div>
          </Link>

          <Link className={styles.Link_header_photo} to='/notification'>
            <div className={styles.photo_header}>
              <Bell />
            </div>
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
