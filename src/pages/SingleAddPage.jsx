import React from 'react';
import { useParams } from 'react-router-dom';

export default function SingleAddPage() {
  const params = useParams();
  console.log('params ===', params);

  return (
    <div className='container'>
      <h1 className='text-3xl mb-4 pt-4'>SingleAddPage</h1>
    </div>
  );
}
