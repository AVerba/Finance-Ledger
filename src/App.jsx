import { MainLayout } from './Layout/MainLayout';
import { Hero } from './views/Hero';
import { About } from './views/About';

export const App = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
    </MainLayout>
  );
};
