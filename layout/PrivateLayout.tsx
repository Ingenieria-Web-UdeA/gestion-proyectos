import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn, useSession } from 'next-auth/react';

const PrivateLayout = ({ children }: any) => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <Loading />;
  }

  if (!session) {
    signIn('auth0');
    return <Loading />;
  }

  return (
    <div>
      {children}
      <ToastContainer />
      <Footer />
    </div>
  );
};

const Loading = () => {
  return <div>Loading...</div>;
};

export default PrivateLayout;
