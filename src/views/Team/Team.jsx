import styles from './Team.module.scss';
import { Container } from '../../components/Container';
import { SubTitle } from '../../components/UI/SubTitle';

export const Team = () => {
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

        <ul className={styles.team__list}></ul>
      </Container>
    </section>
  );
};
