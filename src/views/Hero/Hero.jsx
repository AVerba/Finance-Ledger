import styles from './Hero.module.scss';
import icon from 'images/icons.svg';
import { Container } from '../../components/Container';
import { SubTitle } from '../../components/UI/SubTitle';
import { CommonButton } from '../../components/UI/Button';

export const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <Container className={styles.hero__container}>
        <h1 className={styles.hero__mainTitle}>The Sky Is The Limit</h1>
        <SubTitle className={styles.hero__subTitle}>
          We provide world class financial assistance
        </SubTitle>
        <CommonButton className={styles.hero__btn}>
          <svg className={styles.hero__icon} width={9} height={15}>
            <use href={`${icon}#arrow-right`}></use>
          </svg>
          Read More
        </CommonButton>
      </Container>
    </section>
  );
};
