import styles from './SubTitle.module.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const SubTitle = ({ className, children }) => {
  const classList = cx(styles.subTitle, className);
  return <h2 className={classList}>{children}</h2>;
};

SubTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
