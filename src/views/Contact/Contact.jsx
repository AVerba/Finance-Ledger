import styles from './Contact.module.scss';
import { images } from './images';
import { Container } from '../../components/Container';
import { SubTitle } from '../../components/UI/SubTitle';

export const Contact = () => {
  return (
    <section className={styles.contact}>
      <Container className={styles.contact__container}>
        <div className={styles.contact__img}>
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
              alt="contact"
              width="680"
            />
          </picture>
        </div>
        <div className={styles.contact__form}>
          <SubTitle className={styles.contact__title}>
            Request Callback
          </SubTitle>
        </div>
      </Container>
    </section>
  );
};
