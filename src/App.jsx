import { MainLayout } from './Layout/MainLayout';
import { Hero } from './views/Hero';
import { About } from './views/About';
import { Blog } from './views/Blog';
import { Cases } from './views/Cases';
import { Team } from './views/Team';
import { Contact } from './views/Contact';

export const App = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Cases />
      <Blog />
      <Team />
      <Contact />
    </MainLayout>
  );
};
