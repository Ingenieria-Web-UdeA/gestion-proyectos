import React from 'react';
import { useRouter } from 'next/router';

function TestRutaId() {
  const router = useRouter();
  const { id } = router.query;
  return <div>TestRutaId: {id}</div>;
}

export default TestRutaId;
