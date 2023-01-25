import styles from './CallBack.module.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import icon from '../../../images/icons.svg';

export const CallBack = ({ className }) => {
  const classList = cx(styles.callBack, className);
  const initState = {
    email: '',
    name: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Дане поле є обов'язковим")
      .email(
        'Невірно введена електронна адреса. Перевірте коректність написання електронної адреси'
      )
      .matches(
        /^(([0-9A-Za-z]{1}[-0-9A-z\]{1,}[a-z_-]+\d*|\d*[a-z_-] [0-9A-Za-z]{1} )@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
        'Електронна адреса не повинна містити спеціальні символи'
      ),

    name: Yup.string()
      .required("Дане поле є обов'язковим")
      .min(3, "Ім'я має бути не менше 3 символів")
      .max(20, "Ім'я не повинно перевищувати 20 символів"),
  });

  const onSend = (data, e) => {
    e.preventDefault();

    const { email, name } = data;
    console.log(`EMAIL::${email} and NAME:: ${name}.`);

    resetAllFields();
  };

  const onError = error => {
    error.email && Notify.failure(`${errors.email.message}`);
    error.password && Notify.failure(`${errors.name.message}`);
  };
  const resetAllFields = () => {
    resetField('email');
    resetField('name');
  };
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: initState,
    resolver: yupResolver(validationSchema),
  });

  return (
    <Form className={classList} onSubmit={handleSubmit(onSend, onError)}>
      <Form.Group className={styles.inputGroup} controlId="formBasicName">
        <Form.Control
          className={styles.formInput}
          autoComplete="off"
          type="text"
          placeholder={'Enter name'}
          {...register('name')}
        />
        {errors.name && errors.name.type === 'required' && (
          <Form.Text className={styles.tooltip}>
            <span className={styles.dotTooltip}>
              <svg className={styles.warning__icon} width={16} height={15}>
                <use href={`${icon}#warning`}></use>
              </svg>
            </span>
            {errors.name.message}
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className={styles.inputGroup} controlId="formBasicEmail">
        <Form.Control
          className={styles.formInput}
          type="email"
          placeholder={'Enter your email*'}
          {...register('email')}
        />
        {errors.email && errors.email.type === 'required' && (
          <Form.Text className={styles.tooltip}>
            <span className={styles.dotTooltip}>
              <svg className={styles.warning__icon} width={16} height={15}>
                <use href={`${icon}#warning`}></use>
              </svg>
            </span>
            {errors.email.message}
          </Form.Text>
        )}
      </Form.Group>
      <Button className={styles.sendBtn} variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
};

CallBack.propTypes = {
  className: PropTypes.string,
};
