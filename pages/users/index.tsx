import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
// import { PrismaClient } from '@prisma/client';
// import safeJsonStringify from 'safe-json-stringify';

// const prisma = new PrismaClient();

// export async function getServerSideProps() {
//   const users = await prisma.user.findMany();
//   console.log('traje los usuarios', users);
//   return {
//     props: {
//       users: JSON.parse(safeJsonStringify(users)),
//     }, // will be passed to the page component as props
//   };
// }

const Index = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchUsuarios = async () => {
      const options: any = {
        url: '/api/users',
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
      };
      const users = await axios.request(options);
      setUsers(users.data.datos);
    };
    fetchUsuarios();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div>
      Usuarios
      <Link href='/users/new'>Crear nuevo usuario</Link>
    </div>
  );
};

export default Index;
