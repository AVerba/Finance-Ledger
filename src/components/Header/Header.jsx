import styles from './Header.module.scss';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation/Navigation';

import { Container } from '../Container';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.header__container}>
        <Logo />
        <Navigation />
      </Container>
    </header>
  );
};
