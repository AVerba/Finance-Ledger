import styles from './Container.module.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { isMobile, isTablet } from '../../utils/mediaQuery';
import { useMediaQuery } from 'react-responsive';

export const Container = ({ className, children }) => {
  const Mobile = isMobile(useMediaQuery);
  const Tablet = isTablet(useMediaQuery);
  const commonContainer = Mobile
    ? styles.containerMobile
    : Tablet
    ? styles.containerTablet
    : styles.containerDesktop;

  const classList = cx(commonContainer, className);

  return <div className={classList}>{children}</div>;
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
