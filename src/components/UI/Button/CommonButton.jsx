import styles from './CommonButton.module.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const CommonButton = ({ className, children, type }) => {
  const classList = cx(styles.commonBtn, className);
  return (
    <button type={type} className={classList}>
      {children}
    </button>
  );
};

CommonButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
};
