import styles from './About.module.scss';
import { Container } from '../../components/Container';
import { CommonButton } from '../../components/UI/Button';
import { SubTitle } from '../../components/UI/SubTitle';

export const About = () => {
  return (
    <section className={styles.about}>
      <Container className={styles.about__container}>
        <div className={styles.about__img}>
          {/*<picture>*/}
          {/*  <source srcSet='../../images/about/desktop/people.webp 1x,*/}
          {/*                  ../../images/about/desktop/people@2x.webp 2x'*/}
          {/*          type='image/webp'*/}
          {/*          media='(min-width: 1360px)'/>*/}
          {/*  <source srcSet='../../images/about/tablet/people.webp 1x,*/}
          {/*                 ../../images/about/tablet/people@2x.webp 2x'*/}
          {/*          type='image/webp'*/}
          {/*          media='(min-width: 768px)'/>*/}
          {/*  <source srcSet='../../images/about/mobile/people.webp 1x,*/}
          {/*                  ../../images/about/mobile/people@2x.webp 2x'*/}
          {/*          type='image/webp'*/}
          {/*          media='(max-width: 767px)'/>*/}
          {/*  <source srcSet='../../images/about/desktop/people.jpg 1x,*/}
          {/*                  ../../images/about/desktop/people@2x.jpg 2x'*/}
          {/*          media='(min-width: 1360px)'/>*/}
          {/*  <source srcSet='../../images/about/tablet/people.jpg 1x,*/}
          {/*                 ../../images/about/tablet/people@2x.jpg 2x'*/}
          {/*          media='(min-width: 768px)'/>*/}
          {/*  <source srcSet='../../images/about/mobile/people.jpg 1x,*/}
          {/*                  ../../images/about/mobile/people@2x.jpg 2x'*/}
          {/*          media='(max-width: 767px)'/>*/}
          {/*    <img className={styles._img} src='../../images/about/desktop/people.jpg' alt='about'/>*/}
          {/*</picture>*/}
        </div>

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
