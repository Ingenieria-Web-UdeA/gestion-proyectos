import React from 'react';
import { PrismaClient } from '@prisma/client';
import safeJsonStringify from 'safe-json-stringify';

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const users = await prisma.user.findMany();
  console.log('traje los usuarios', users);
  return {
    props: {
      users: JSON.parse(safeJsonStringify(users)),
    }, // will be passed to the page component as props
  };
}

const index = ({ users }: any) => {
  console.log(users);
  return <div>Usuarios</div>;
};

export default index;
