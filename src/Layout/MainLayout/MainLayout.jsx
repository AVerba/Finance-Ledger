import styles from './MainLayout.module.scss';
import { Container } from '../../components/Container/Container';
import { Hero } from '../../views/Hero';
import { About } from '../../views/About';
import { Cases } from '../../views/Cases';
import { Blog } from '../../views/Blog';
import { Team } from '../../views/Team/Team';
import { Contact } from '../../views/Contact';
import { Footer } from '../../views/Footer/Footer';

export const MainLayout = () => {
  return (
    <Container>
      <main>
        <Hero />
        <About />
        <Cases />
        <Blog />
        <Team />
        <Contact />
      </main>
      <Footer />
    </Container>
  );
};
