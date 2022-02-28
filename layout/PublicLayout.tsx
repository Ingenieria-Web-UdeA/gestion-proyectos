import React from 'react';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PublicLayout = ({ children }: any) => {
  return (
    <div>
      {children}
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default PublicLayout;
