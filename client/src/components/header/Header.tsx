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
            <MessageSquareText color='black' className={styles.photo_header} />
            {/* <img src='/chat.png' alt='chat' className={styles.photo_header} /> */}
            {/* надо разбираться так как пропадает иконка*/}
            <div className={`${styles.text_for_link} ${styles.hidden}`}>
              <p className={styles.text_for_text}> {header.messages}</p>{' '}
            </div>
          </Link>

          <Link className={styles.Link_header_photo} to='/like'>
            {/* <img src='/like.png' alt='like' className={styles.photo_header} /> */}
            <Heart />
            <div className={`${styles.text_for_link} ${styles.hidden}`}>
              <p className={styles.text_for_text}>{header.likes}</p>{' '}
            </div>
          </Link>

          <Link className={styles.Link_header_photo} to='/save_find'>
            {/* <img src='/save_find.png' alt='save_find' className={styles.photo_header} /> */}
            <Search />
            <div className={`${styles.text_for_link} ${styles.hidden}`}>
              <p className={styles.text_for_text}>{header.saves}</p>
            </div>
          </Link>

          <Link className={styles.Link_header_photo} to='/notification'>
            {/* <img src='/notification.png' alt='notification' className={styles.photo_header} /> */}
            <Bell />
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
