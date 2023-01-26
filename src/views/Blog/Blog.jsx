import styles from './Blog.module.scss';
import { images } from './images';
import { Container } from '../../components/Container';
import { SubTitle } from '../../components/UI/SubTitle';
import { CommonButton } from '../../components/UI/Button';

export const Blog = () => {
  return (
    <section className={styles.blog} id="blog">
      <Container className={styles.blog__container}>
        <div className={styles.blog__content}>
          <p>April 16 2020</p>
          <SubTitle className={styles.blog__subTitle}>Blog Post One</SubTitle>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <CommonButton className={styles.blog__btn}>
            Read Our Blog
          </CommonButton>
        </div>
        <div className={styles.blog__img}>
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
      </Container>
    </section>
  );
};
