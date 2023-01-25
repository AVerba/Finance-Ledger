import styles from './Team.module.scss';
import { Container } from '../../components/Container';
import { SubTitle } from '../../components/UI/SubTitle';
import icon from 'images/icons.svg';
import { images } from './images';

export const Team = () => {
  const { firstImages, secondImages, thirdImages } = images;
  return (
    <section className={styles.team}>
      <Container className={styles.team__container}>
        <p className={styles.team__preTitle}>Who we are</p>
        <SubTitle className={styles.team__title}>
          Our Professional Team
        </SubTitle>
        <p className={styles.team__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>

        <ul className={styles.team__list}>
          <li className={styles.itemCard}>
            <div className={styles.overlay}>
              <picture>
                <source
                  type="image/webp"
                  media="(min-width: 1360px)"
                  srcSet={`${firstImages.deskWebp1} 1x, ${firstImages.deskWebp2x1} 2x`}
                />
                <source
                  type="image/webp"
                  media="(min-width: 768px)"
                  srcSet={`${firstImages.tabWebp1} 1x, ${firstImages.tabWebp2x1} 2x`}
                />
                <source
                  type="image/webp"
                  media="(max-width: 767px)"
                  srcSet={`${firstImages.mobWebp1} 1x, ${firstImages.mobWebp2x1} 2x`}
                />
                <source
                  media="(min-width: 1360px)"
                  srcSet={`${firstImages.deskJpeg1} 1x, ${firstImages.deskJpeg2x1} 2x`}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={`${firstImages.tabJpeg1} 1x, ${firstImages.tabJpeg2x1} 2x`}
                />
                <source
                  media="(max-width: 767px)"
                  srcSet={`${firstImages.mobJpeg1} 1x, ${firstImages.mobJpeg2x1} 2x`}
                />
                <img
                  className={styles._img}
                  src={firstImages.mobJpeg1}
                  alt="about"
                  width="680"
                />
              </picture>
              {/*<div className={styles.itemCardOverlay}>*/}
              {/*  <ul className={styles.social__list}>*/}
              {/*    <li className={styles.social__item}>*/}
              {/*      <a*/}
              {/*        href="https://www.facebook.com/"*/}
              {/*        target="_blank"*/}
              {/*        rel="noopener noreferrer"*/}
              {/*      >*/}
              {/*        <svg*/}
              {/*          className={styles.social__item_icon}*/}
              {/*          width={35}*/}
              {/*          height={35}*/}
              {/*        >*/}
              {/*          <use href={`${icon}#facebook`}></use>*/}
              {/*        </svg>*/}
              {/*      </a>*/}
              {/*    </li>*/}
              {/*    <li className={styles.social__item}>*/}
              {/*      <a*/}
              {/*        href="https://twitter.com/"*/}
              {/*        target="_blank"*/}
              {/*        rel="noopener noreferrer"*/}
              {/*      >*/}
              {/*        <svg*/}
              {/*          className={styles.social__item_icon}*/}
              {/*          width={35}*/}
              {/*          height={33}*/}
              {/*        >*/}
              {/*          <use href={`${icon}#twitter`}></use>*/}
              {/*        </svg>*/}
              {/*      </a>*/}
              {/*    </li>*/}
              {/*    <li className={styles.social__item}>*/}
              {/*      <a*/}
              {/*        href="https://www.youtube.com/"*/}
              {/*        target="_blank"*/}
              {/*        rel="noopener noreferrer"*/}
              {/*      >*/}
              {/*        <svg*/}
              {/*          className={styles.social__item_icon}*/}
              {/*          width={40}*/}
              {/*          height={31}*/}
              {/*        >*/}
              {/*          <use href={`${icon}#youtube`}></use>*/}
              {/*        </svg>*/}
              {/*      </a>*/}
              {/*    </li>*/}
              {/*    <li className={styles.social__item}>*/}
              {/*      <a*/}
              {/*        href="https://www.linkedin.com/"*/}
              {/*        target="_blank"*/}
              {/*        rel="noopener noreferrer"*/}
              {/*      >*/}
              {/*        <svg*/}
              {/*          className={styles.social__item_icon}*/}
              {/*          style={{ width: "35px", height: "39px" }}*/}
              {/*        >*/}
              {/*          <use href={`${icon}#linkedin`}></use>*/}
              {/*        </svg>*/}
              {/*      </a>*/}
              {/*    </li>*/}
              {/*  </ul>*/}
              {/*</div>*/}
            </div>
            <div className={styles.itemCard__content}>
              <h4 className={styles.itemCard__name}>John Doe</h4>
              <p className={styles.itemCard__pos}>President</p>
            </div>
          </li>
          <li className={styles.itemCard}>
            <div className={styles.overlay}>
              <picture>
                <source
                  type="image/webp"
                  media="(min-width: 1360px)"
                  srcSet={`${secondImages.deskWebp2} 1x, ${secondImages.deskWebp2x2} 2x`}
                />
                <source
                  type="image/webp"
                  media="(min-width: 768px)"
                  srcSet={`${secondImages.tabWebp2} 1x, ${secondImages.tabWebp2x2} 2x`}
                />
                <source
                  type="image/webp"
                  media="(max-width: 767px)"
                  srcSet={`${secondImages.mobWebp2} 1x, ${secondImages.mobWebp2x2} 2x`}
                />
                <source
                  media="(min-width: 1360px)"
                  srcSet={`${secondImages.deskJpeg2} 1x, ${secondImages.deskJpeg2x2} 2x`}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={`${secondImages.tabJpeg2} 1x, ${secondImages.tabJpeg2x2} 2x`}
                />
                <source
                  media="(max-width: 767px)"
                  srcSet={`${secondImages.mobJpeg2} 1x, ${secondImages.mobJpeg2x2} 2x`}
                />
                <img
                  className={styles._img}
                  src={secondImages.mobJpeg2}
                  alt="about"
                  width="680"
                />
              </picture>
              {/*<div className={styles.itemCardOverlay}>*/}
              {/*  <ul className={styles.social__list}>*/}
              {/*    <li className={styles.social__item}>*/}
              {/*      <a*/}
              {/*        href="https://www.facebook.com/"*/}
              {/*        target="_blank"*/}
              {/*        rel="noopener noreferrer"*/}
              {/*      >*/}
              {/*        <svg*/}
              {/*          className={styles.social__item_icon}*/}
              {/*          width={35}*/}
              {/*          height={35}*/}
              {/*        >*/}
              {/*          <use href={`${icon}#facebook`}></use>*/}
              {/*        </svg>*/}
              {/*      </a>*/}
              {/*    </li>*/}
              {/*    <li className={styles.social__item}>*/}
              {/*      <a*/}
              {/*        href="https://twitter.com/"*/}
              {/*        target="_blank"*/}
              {/*        rel="noopener noreferrer"*/}
              {/*      >*/}
              {/*        <svg*/}
              {/*          className={styles.social__item_icon}*/}
              {/*          width={35}*/}
              {/*          height={33}*/}
              {/*        >*/}
              {/*          <use href={`${icon}#twitter`}></use>*/}
              {/*        </svg>*/}
              {/*      </a>*/}
              {/*    </li>*/}
              {/*    <li className={styles.social__item}>*/}
              {/*      <a*/}
              {/*        href="https://www.youtube.com/"*/}
              {/*        target="_blank"*/}
              {/*        rel="noopener noreferrer"*/}
              {/*      >*/}
              {/*        <svg*/}
              {/*          className={styles.social__item_icon}*/}
              {/*          width={40}*/}
              {/*          height={31}*/}
              {/*        >*/}
              {/*          <use href={`${icon}#youtube`}></use>*/}
              {/*        </svg>*/}
              {/*      </a>*/}
              {/*    </li>*/}
              {/*    <li className={styles.social__item}>*/}
              {/*      <a*/}
              {/*        href="https://www.linkedin.com/"*/}
              {/*        target="_blank"*/}
              {/*        rel="noopener noreferrer"*/}
              {/*      >*/}
              {/*        <svg*/}
              {/*          className={styles.social__item_icon}*/}
              {/*          style={{ width: "35px", height: "39px" }}*/}
              {/*        >*/}
              {/*          <use href={`${icon}#linkedin`}></use>*/}
              {/*        </svg>*/}
              {/*      </a>*/}
              {/*    </li>*/}
              {/*  </ul>*/}
              {/*</div>*/}
            </div>
            <div className={styles.itemCard__content}>
              <h4 className={styles.itemCard__name}>Jane Doe</h4>
              <p className={styles.itemCard__pos}>Vice President</p>
            </div>
          </li>
          <li className={styles.itemCard}>
            <div className={styles.overlay}>
              <picture>
                <source
                  type="image/webp"
                  media="(min-width: 1360px)"
                  srcSet={`${thirdImages.deskWebp3} 1x, ${thirdImages.deskWebp2x3} 2x`}
                />
                <source
                  type="image/webp"
                  media="(min-width: 768px)"
                  srcSet={`${thirdImages.tabWebp3} 1x, ${thirdImages.tabWebp2x3} 2x`}
                />
                <source
                  type="image/webp"
                  media="(max-width: 767px)"
                  srcSet={`${thirdImages.mobWebp3} 1x, ${thirdImages.mobWebp2x3} 2x`}
                />
                <source
                  media="(min-width: 1360px)"
                  srcSet={`${thirdImages.deskJpeg3} 1x, ${thirdImages.deskJpeg2x3} 2x`}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={`${thirdImages.tabJpeg3} 1x, ${thirdImages.tabJpeg2x3} 2x`}
                />
                <source
                  media="(max-width: 767px)"
                  srcSet={`${firstImages.mobJpeg3} 1x, ${thirdImages.mobJpeg2x3} 2x`}
                />
                <img
                  className={styles._img}
                  src={thirdImages.mobJpeg3}
                  alt="about"
                  width="680"
                />
              </picture>
              {/*<div className={styles.itemCardOverlay}>*/}
              {/*  <ul className={styles.social__list}>*/}
              {/*    <li className={styles.social__item}>*/}
              {/*      <a*/}
              {/*        href="https://www.facebook.com/"*/}
              {/*        target="_blank"*/}
              {/*        rel="noopener noreferrer"*/}
              {/*      >*/}
              {/*        <svg*/}
              {/*          className={styles.social__item_icon}*/}
              {/*          width={35}*/}
              {/*          height={35}*/}
              {/*        >*/}
              {/*          <use href={`${icon}#facebook`}></use>*/}
              {/*        </svg>*/}
              {/*      </a>*/}
              {/*    </li>*/}
              {/*    <li className={styles.social__item}>*/}
              {/*      <a*/}
              {/*        href="https://twitter.com/"*/}
              {/*        target="_blank"*/}
              {/*        rel="noopener noreferrer"*/}
              {/*      >*/}
              {/*        <svg*/}
              {/*          className={styles.social__item_icon}*/}
              {/*          width={35}*/}
              {/*          height={33}*/}
              {/*        >*/}
              {/*          <use href={`${icon}#twitter`}></use>*/}
              {/*        </svg>*/}
              {/*      </a>*/}
              {/*    </li>*/}
              {/*    <li className={styles.social__item}>*/}
              {/*      <a*/}
              {/*        href="https://www.youtube.com/"*/}
              {/*        target="_blank"*/}
              {/*        rel="noopener noreferrer"*/}
              {/*      >*/}
              {/*        <svg*/}
              {/*          className={styles.social__item_icon}*/}
              {/*          width={40}*/}
              {/*          height={31}*/}
              {/*        >*/}
              {/*          <use href={`${icon}#youtube`}></use>*/}
              {/*        </svg>*/}
              {/*      </a>*/}
              {/*    </li>*/}
              {/*    <li className={styles.social__item}>*/}
              {/*      <a*/}
              {/*        href="https://www.linkedin.com/"*/}
              {/*        target="_blank"*/}
              {/*        rel="noopener noreferrer"*/}
              {/*      >*/}
              {/*        <svg*/}
              {/*          className={styles.social__item_icon}*/}
              {/*          style={{ width: "35px", height: "39px" }}*/}
              {/*        >*/}
              {/*          <use href={`${icon}#linkedin`}></use>*/}
              {/*        </svg>*/}
              {/*      </a>*/}
              {/*    </li>*/}
              {/*  </ul>*/}
              {/*</div>*/}
            </div>
            <div className={styles.itemCard__content}>
              <h4 className={styles.itemCard__name}>Steve Smith</h4>
              <p className={styles.itemCard__pos}>Marketing Head</p>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
};
