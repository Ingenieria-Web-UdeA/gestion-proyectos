import React from 'react';
import { useRouter } from 'next/router';

const TestRutaId = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>TestRutaId: {id}</div>;
};

export default TestRutaId;
