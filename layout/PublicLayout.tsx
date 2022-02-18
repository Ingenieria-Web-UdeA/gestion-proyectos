import React from 'react';
import Footer from '../components/Footer';

const PublicLayout = ({ children }: any) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
