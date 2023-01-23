import { MainLayout } from './Layout/MainLayout';
import { Hero } from './views/Hero';
import { About } from './views/About';
import { Blog } from './views/Blog';

export const App = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Blog />
    </MainLayout>
  );
};
