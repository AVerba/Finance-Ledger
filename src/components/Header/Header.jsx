import styles from './Header.module.scss';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation/Navigation';
import { useMediaQuery } from 'react-responsive';
import { isMobile, isTablet } from '../../utils/mediaQuery';
import { Container } from '../Container';

export const Header = () => {
  const Mobile = isMobile(useMediaQuery);
  const Tablet = isTablet(useMediaQuery);
  return (
    <Container>
      <header
        className={
          Mobile
            ? styles.headerMobile
            : Tablet
            ? styles.headerTablet
            : styles.headerDesktop
        }
      >
        <Logo />
        <Navigation />
      </header>
    </Container>
  );
};
