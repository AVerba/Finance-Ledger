import styles from './Cases.module.scss';
import { Container } from '../../components/Container';
import { SubTitle } from '../../components/UI/SubTitle';
import { images } from './images';
import shortid from 'shortid';

export const Cases = () => {
  const { pictures: pics } = images;
  console.log(pics);
  return (
    <section className={styles.cases} id="cases">
      <Container className={styles.cases__container}>
        <p className={styles.cases__preTitle}>This is what we do</p>
        <SubTitle className={styles.cases__title}>Business Cases</SubTitle>
        <p className={styles.cases__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>

        <ul className={styles.cases__list}>
          {pics.map(
            ({
              mobWebp,
              mobWebp2x,
              mobJpeg,
              mobJpeg2x,
              tabWebp,
              tabWebp2x,
              tabJpeg,
              tabJpeg2x,
              deskWebp,
              deskWebp2x,
              deskJpeg,
              deskJpeg2x,
            }) => (
              <li className={styles.cases__item} key={shortid.generate()}>
                <picture>
                  <source
                    type="image/webp"
                    media="(min-width: 1360px)"
                    srcSet={`${deskWebp} 1x, ${deskWebp2x} 2x`}
                  />
                  <source
                    type="image/webp"
                    media="(min-width: 768px)"
                    srcSet={`${tabWebp} 1x, ${tabWebp2x} 2x`}
                  />
                  <source
                    type="image/webp"
                    media="(max-width: 767px)"
                    srcSet={`${mobWebp} 1x, ${mobWebp2x} 2x`}
                  />
                  <source
                    media="(min-width: 1360px)"
                    srcSet={`${deskJpeg} 1x, ${deskJpeg2x} 2x`}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={`${tabJpeg} 1x, ${tabJpeg2x} 2x`}
                  />
                  <source
                    media="(max-width: 767px)"
                    srcSet={`${mobJpeg} 1x, ${mobJpeg2x} 2x`}
                  />
                  <img
                    className={styles._img}
                    src={mobJpeg}
                    alt={shortid.generate()}
                    width="680"
                  />
                </picture>
              </li>
            )
          )}
        </ul>
      </Container>
    </section>
  );
};
