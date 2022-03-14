import { useMutation } from '@apollo/client';
import { ButtonLoading } from '@components/ButtonLoading';
import FileUpload from '@components/FileUpload';
import { CREATE_PROJECT } from 'graphql/mutations/project';
import useFormData from 'hooks/useFormData';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { matchRoles } from 'utils/matchRoles';

export async function getServerSideProps(context) {
  return {
    props: { ...(await matchRoles(context)) },
  };
}

const NewProject = () => {
  const [createProject] = useMutation(CREATE_PROJECT);
  const { form, formData, updateFormData } = useFormData(null);
  const [fileUrl, setFileUrl] = useState<string>(null);
  const successCallback = (e) => {
    setFileUrl(e.info.url);
  };
  const errorCallback = () => {
    toast.error('error uploading file');
  };
  const submitForm = async (e) => {
    e.preventDefault();
    await createProject({
      variables: {
        data: {
          name: formData.name,
          description: formData.description,
          price: parseFloat(formData.price),
          document: fileUrl,
        },
      },
    });
    toast.success('project created ok');
  };
  return (
    <div className='w-full flex flex-col items-center p-10'>
      <h1 className='text-2xl font-bold text-gray-900 my-2'>New Project</h1>
      <form ref={form} onChange={updateFormData} onSubmit={submitForm}>
        <label htmlFor='name' className='flex flex-col'>
          <span>Project Name</span>
          <input name='name' required />
        </label>
        <label htmlFor='description' className='flex flex-col'>
          <span>Project Description</span>
          <input name='description' required />
        </label>
        <label htmlFor='price' className='flex flex-col'>
          <span>Project Price</span>
          <input name='price' type='number' required />
        </label>
        <div className='w-full flex justify-center'>
          <FileUpload
            folder='project-documents'
            text='Upload Document'
            resourceType='auto'
            successCallback={successCallback}
            errorCallback={errorCallback}
          />
        </div>
        <div className='w-full flex justify-center my-3'>
          <ButtonLoading text='Confirm' loading={false} isSubmit />
        </div>
      </form>
    </div>
  );
};

export default NewProject;
