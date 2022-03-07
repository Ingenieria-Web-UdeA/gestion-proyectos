import axios from 'axios';
import useFormData from 'hooks/useFormData';
import React, { useState } from 'react';

const Profile = () => {
  const { form, formData, updateFormData } = useFormData(null);
  const [file, setFile] = useState<File>();
  const submitForm = async (e) => {
    e.preventDefault();

    const formDataNew = new FormData();
    formDataNew.append('file', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    await axios.post('/api/upload-file', formDataNew, config);
  };
  return (
    <div>
      profile
      <form
        className='flex flex-col'
        ref={form}
        onChange={updateFormData}
        onSubmit={submitForm}
      >
        <input
          name='image'
          type='file'
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Profile;
