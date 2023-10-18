// components/FirestoreDataDisplay.tsx
import React from 'react';
import useFirestoreData from '../../pages/hooks/useFirestoreData';

function FirestoreDataDisplay() {
  const { data, loading } = useFirestoreData();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data && data.map((item, index) => (
        <div key={index}>
            <h2>{item.name}</h2>
            <h3>{item.genre}</h3>
          <p>{item.instruction}</p>
        </div>
      ))}
    </div>
  );
}

export default FirestoreDataDisplay;
