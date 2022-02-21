import { useMutation } from '@apollo/client';
import { CREATE_CLIENT } from 'graphql/mutations/client';
import { GET_CLIENTES } from 'graphql/queries/clients';
import useFormData from 'hooks/useFormData';
import Link from 'next/link';
import React, { useEffect } from 'react';

const NewClient = () => {
  const { form, formData, updateFormData } = useFormData(null);
  const [createClient, { data, loading }] = useMutation(CREATE_CLIENT, {
    refetchQueries: [GET_CLIENTES],
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.log('cliente:', formData);
    createClient({
      variables: {
        name: formData.name,
      },
      refetchQueries: [GET_CLIENTES],
    });
  };

  useEffect(() => {
    console.log('data mutation', data);
  }, [data]);

  return (
    <div className='flex flex-col items-center p-10'>
      <Link href='/clients' passHref={true}>
        <i className='fas fa-arrow-left self-start' />
      </Link>
      <h2>Nuevo Cliente</h2>
      <form
        ref={form}
        onChange={updateFormData}
        onSubmit={submitForm}
        className='flex flex-col my-4'
      >
        <label className='flex flex-col' htmlFor='name'>
          <span>Nombre del Cliente</span>
          <input name='name' type='text' />
        </label>
        <button type='submit' className='button-primary'>
          Crear Cliente
        </button>
      </form>
    </div>
  );
};

export default NewClient;
