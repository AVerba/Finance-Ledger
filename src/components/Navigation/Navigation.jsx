import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#home">
            Home
          </a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#about">
            About
          </a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#cases">
            Cases
          </a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#blog">
            Blog
          </a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
