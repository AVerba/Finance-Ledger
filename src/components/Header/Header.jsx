import styles from './Header.module.scss';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation/Navigation';

import { Container } from '../Container';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
      setWidth(window.innerWidth);
    };
  }, []);

  const classList =
    (width < 768 && offset >= 120) || (width > 768 && offset >= 70)
      ? `${styles.fixedHeader}`
      : `${styles.header}`;

  return (
    <header className={classList}>
      <Container className={styles.header__container}>
        <Logo />
        <Navigation />
      </Container>
    </header>
  );
};
