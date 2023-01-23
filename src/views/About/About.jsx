import styles from './About.module.scss';
import { Container } from '../../components/Container';
import { CommonButton } from '../../components/UI/Button';
import { SubTitle } from '../../components/UI/SubTitle';

export const About = () => {
  return (
    <section className={styles.about}>
      <Container className={styles.about__container}>
        <div className={styles.about__img}></div>

        <div className={styles.about__content}>
          <p>What you are looking for </p>
          <SubTitle className={styles.about__subTitle}>
            We provide bespoke solutions
          </SubTitle>
          <p className={styles.about__text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?{' '}
          </p>
          <CommonButton className={styles.about__btn}>Read More</CommonButton>
        </div>
      </Container>
    </section>
  );
};
