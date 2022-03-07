import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

function PrivateComponent({ roleList, children }) {
  const { data: session }: any = useSession();
  useEffect(() => {
    console.log(session);
  }, [session]);

  const roleUser = session.user.role.name;
  const roleCheck = roleList.includes(roleUser);

  if (roleCheck) {
    return children;
  }
  return <></>;
}

export default PrivateComponent;
