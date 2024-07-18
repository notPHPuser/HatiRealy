import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { SecondHeader as SecondHeaderInterface } from '../../interface/headerInterface';

export default function SecondHeader() {
  const secondHeader: SecondHeaderInterface = {
    Rent: 'Аренда',
    Sale: 'Продажа',
    NewBuildings: 'Новостройки',
    Construction: 'Строительство',
    Commercial: 'Коммерческая',
    Mortgage: 'Ипотека',
    MyHouse: 'Мой дом',
    Services: 'Сервисы',
    Pik: 'ПИК',
  };

  return (
    <>
      <div className={styles.second_header}>
        <div className={styles.second_header_div}>
          <Link className={styles.link_for_second_div} to=''>
            {secondHeader.Rent}
          </Link>
          <Link className={styles.link_for_second_div} to=''>
            {secondHeader.Sale}
          </Link>
          <Link className={styles.link_for_second_div} to=''>
            {secondHeader.NewBuildings}
          </Link>
          <Link className={styles.link_for_second_div} to=''>
            {secondHeader.Construction}
          </Link>
          <Link className={styles.link_for_second_div} to=''>
            {secondHeader.Commercial}
          </Link>
          <Link className={styles.link_for_second_div} to=''>
            {secondHeader.Mortgage}
          </Link>
          <Link className={styles.link_for_second_div} to=''>
            {secondHeader.MyHouse}
          </Link>
          <Link className={styles.link_for_second_div} to=''>
            {secondHeader.Services}
          </Link>
          <Link
            className={`${styles.link_for_second_div} ${styles.link_for_pik}`}
            to='https://www.pik.ru/'
            target='_blank'
          >
            {secondHeader.Pik}
          </Link>
        </div>
      </div>
    </>
  );
}
