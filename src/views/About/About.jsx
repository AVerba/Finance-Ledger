import styles from './About.module.scss';
import { images } from './images';
import { Container } from '../../components/Container';
import { CommonButton } from '../../components/UI/Button';
import { SubTitle } from '../../components/UI/SubTitle';

export const About = () => {
  return (
    <section className={styles.about} id="about">
      <Container className={styles.about__container}>
        <div className={styles.about__img}>
          <picture>
            <source
              type="image/webp"
              media="(min-width: 1360px)"
              srcSet={`${images.deskWebp} 1x, ${images.deskWebp2x} 2x`}
            />
            <source
              type="image/webp"
              media="(min-width: 768px)"
              srcSet={`${images.tabletWebp} 1x, ${images.tabletWebp2x} 2x`}
            />
            <source
              type="image/webp"
              media="(max-width: 767px)"
              srcSet={`${images.mobWebp} 1x, ${images.mobWebp2x} 2x`}
            />
            <source
              media="(min-width: 1360px)"
              srcSet={`${images.deskJpeg} 1x, ${images.deskJpeg2x} 2x`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${images.tabletJpeg} 1x, ${images.tabletJpeg2x} 2x`}
            />
            <source
              media="(max-width: 767px)"
              srcSet={`${images.mobJpeg} 1x, ${images.mobJpeg2x} 2x`}
            />
            <img
              className={styles._img}
              src={images.mobJpeg}
              alt="about"
              width="680"
            />
          </picture>
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
