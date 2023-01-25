import styles from './Cases.module.scss';
import { Container } from '../../components/Container';
import { SubTitle } from '../../components/UI/SubTitle';

export const Cases = () => {
  return (
    <section className={styles.cases}>
      <Container className={styles.cases__container}>
        <p className={styles.cases__preTitle}>This is what we do</p>
        <SubTitle className={styles.cases__title}>Business Cases</SubTitle>
        <p className={styles.cases__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>

        <ul className={styles.cases__list}></ul>
      </Container>
    </section>
  );
};
