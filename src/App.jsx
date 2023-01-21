import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation/Navigation';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Navigation />
      {/*<Logo />*/}
    </div>
  );
};
