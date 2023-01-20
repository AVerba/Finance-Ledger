import styles from './Logo.module.scss';
import icon from 'images/icons.svg';

export const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      <svg className={styles.logo__icon} width={39} height={35}>
        <use href={`${icon}#logo`}></use>
      </svg>
      Finance <span>Ledger</span>
    </a>
  );
};
