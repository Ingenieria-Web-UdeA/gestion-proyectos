import React from 'react';
import Link from 'next/link';

const New = () => {
  return (
    <div>
      New User
      <Link href='/users'>Users</Link>
    </div>
  );
};

export default New;
