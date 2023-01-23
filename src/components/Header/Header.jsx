import styles from './Header.module.scss';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation/Navigation';

import { Container } from '../Container';

export const Header = () => {
  return (
    <Container className={styles.containerHeader}>
      <header className={styles.header}>
        <Logo />
        <Navigation />
      </header>
    </Container>
  );
};
