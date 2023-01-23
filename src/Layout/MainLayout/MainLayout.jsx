import styles from './MainLayout.module.scss';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header';

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
