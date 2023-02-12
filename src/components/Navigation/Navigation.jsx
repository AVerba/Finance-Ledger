import styles from './Navigation.module.scss';

export const Navigation = () => {
  const moveToAnchor = e => {
    e.preventDefault();
    const fixedHeaderHeight = 77;
    const sectionID = e.currentTarget.getAttribute('href');
    const top =
      document.querySelector('' + sectionID).offsetTop - fixedHeaderHeight;
    window.scrollTo({
      top,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#home" onClick={moveToAnchor}>
            Home
          </a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#about" onClick={moveToAnchor}>
            About
          </a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#cases" onClick={moveToAnchor}>
            Cases
          </a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#blog" onClick={moveToAnchor}>
            Blog
          </a>
        </li>
        <li className={styles.nav__item}>
          <a
            className={styles.nav__link}
            href="#contact"
            onClick={moveToAnchor}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
