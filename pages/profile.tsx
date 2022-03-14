import useFormData from 'hooks/useFormData';
import React, { useEffect, useState } from 'react';
import FileUpload from '@components/FileUpload';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_IMAGE, UPSERT_PROFILE } from 'graphql/mutations/profile';
import { ButtonLoading } from '@components/ButtonLoading';
import { GET_PROFILE } from 'graphql/queries/users';
import { toast } from 'react-toastify';

const Profile = () => {
  const { data: session }: any = useSession();
  const { data: userData, loading: userLoading } = useQuery(GET_PROFILE, {
    variables: {
      email: session.user.email,
    },
  });
  const { form, formData, updateFormData } = useFormData(null);

  const [upsertProfile, { loading }] = useMutation(UPSERT_PROFILE, {
    refetchQueries: [GET_PROFILE],
  });
  const [updateImage, { loading: imageLoading }] = useMutation(UPDATE_IMAGE, {
    refetchQueries: [GET_PROFILE],
  });

  const updateProfilePicture = async (url) => {
    await updateImage({
      variables: {
        where: {
          id: userData.getUser.id,
        },
        image: url,
      },
    });
    toast.success('Profile Picture updated successfully');
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await upsertProfile({
      variables: {
        where: {
          id: userData.getUser.id,
        },
        data: {
          phone: formData.phone,
          address: formData.address,
          customImage: formData.profileImage,
        },
      },
    });
    toast.success('Profile updated successfully');
  };

  if (userLoading) return <div>Loading...</div>;

  return (
    <div className='w-full h-full flex flex-col items-center justify-center p-10'>
      <h1 className='text-2xl font-bold text-gray-900 my-2'>User Profile</h1>
      <form
        className='flex flex-col my-2 w-full'
        ref={form}
        onChange={updateFormData}
        onSubmit={submitForm}
      >
        <div className='flex flex-col items-center'>
          <Image
            className='rounded-full '
            src={
              userData.getUser.profile?.customImage ?? userData.getUser.image
            }
            height={120}
            width={120}
            alt='user-profile'
          />
          <div className='my-4'>
            <FileUpload
              name='profileImage'
              type='image'
              text='Change'
              onSuccess={updateProfilePicture}
            />
          </div>
        </div>

        <div className='grid grid-cols-2 gap-5'>
          <label htmlFor='email' className='flex flex-col'>
            <span>Email</span>
            <input
              type='email'
              name='email'
              defaultValue={userData.getUser.email}
              disabled
            />
          </label>
          <label htmlFor='username' className='flex flex-col'>
            <span>User Name</span>
            <input
              type='username'
              name='username'
              defaultValue={userData.getUser.name}
              disabled
            />
          </label>
          <label htmlFor='phone' className='flex flex-col'>
            <span>Phone</span>
            <input
              type='phone'
              name='phone'
              defaultValue={userData.getUser.profile?.phone ?? ''}
            />
          </label>
          <label htmlFor='address' className='flex flex-col'>
            <span>Address</span>
            <input
              type='address'
              name='address'
              defaultValue={userData.getUser.profile?.address ?? ''}
            />
          </label>
        </div>
        <div className='w-full flex justify-center'>
          <ButtonLoading
            loading={loading}
            text='Update Profile'
            type='submit'
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;
