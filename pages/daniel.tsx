import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const daniel = () => {
  console.log('esto es un console log en la pagina daniel');
  return (
    <div>
      <Head>
        <title>Pagina Daniel - Proyectos</title>
      </Head>
      <div className='flex flex-col'>
        Esta es una pagina en /daniel
        <Link href='/'>Ir al home</Link>
      </div>
    </div>
  );
};

export default daniel;
