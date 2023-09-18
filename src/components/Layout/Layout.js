import { Container } from './Layout.styled';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
        <Toaster position="top-right" reverseOrder={true} />
      </main>
    </Container>
  );
};
