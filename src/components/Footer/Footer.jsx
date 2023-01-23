import styles from './Footer.module.scss';
import icon from 'images/icons.svg';
import { Container } from '../Container';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footer__container}>
        <ul className={styles.social}>
          <li className={styles.social__item}>
            <a
              className={styles.social__link}
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={styles.social__icon} width={35} height={35}>
                <use href={`${icon}#facebook`}></use>
              </svg>
            </a>
          </li>
          <li className={styles.social__item}>
            <a
              className={styles.social__link}
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={styles.social__icon} width={35} height={33}>
                <use href={`${icon}#twitter`}></use>
              </svg>
            </a>
          </li>
          <li className={styles.social__item}>
            <a
              className={styles.social__link}
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={styles.social__icon} width={35} height={31}>
                <use href={`${icon}#youtube`}></use>
              </svg>
            </a>
          </li>
          <li className={styles.social__item}>
            <a
              className={styles.social__link}
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={styles.social__icon} width={35} height={39}>
                <use href={`${icon}#linkedin`}></use>
              </svg>
            </a>
          </li>
        </ul>
        <p className={styles.copyright}>
          Copyright &copy; 2021 - FinanceLedger
        </p>
      </Container>
    </footer>
  );
};
