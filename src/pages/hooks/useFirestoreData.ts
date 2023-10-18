// hooks/useFirestoreData.ts
import { useState, useEffect } from 'react';
import { db } from '../../config/firebase.js';
import { collection, getDocs } from 'firebase/firestore';

// Define the shape of your data
interface DataItem {
  name: string;
  genre: string;
  instruction: string;
}

interface FirestoreData {
  data: DataItem[] | null;
  loading: boolean;
}

function useFirestoreData(): FirestoreData {
  const [data, setData] = useState<DataItem[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const usersCollection = collection(db, 'globalInstruction');
      const snapshot = await getDocs(usersCollection);
      const data = snapshot.docs.map(doc => doc.data() as DataItem);
      setData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading };
}

export default useFirestoreData;
