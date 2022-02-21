import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CLIENTES } from 'graphql/queries/clients';
import Link from 'next/link';

const IndexClients = () => {
  const { data, loading } = useQuery(GET_CLIENTES, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div>Loading....</div>;

  return (
    <div className='flex flex-col items-center p-10'>
      <Link href='/clients/new' passHref={true}>
        <div className='self-end button-primary'>Nuevo Cliente</div>
      </Link>
      <h2 className='my-4 text-3xl font-bold text-gray-800'>Clientes</h2>
      <table>
        <thead>
          <th>ID Cliente</th>
          <th>Nombre</th>
          <th>Fecha de Actualización</th>
          <th>Fecha de Creación</th>
        </thead>
        <tbody>
          {data.getClients.map((c) => {
            return (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.updatedAt}</td>
                <td>{c.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default IndexClients;
