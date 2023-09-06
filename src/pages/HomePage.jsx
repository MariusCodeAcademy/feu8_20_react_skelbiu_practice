import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { toast } from 'react-hot-toast';
import SingleAddCard from '../components/adds/SingleAddCard';
import AddCardList from '../components/adds/AddCardList';

export default function HomePage() {
  const [addsArr, setAddsArr] = useState([]);

  useEffect(() => {
    getAdds();
  }, []);

  async function getAdds() {
    const querySnapshot = await getDocs(collection(db, 'skelbimai'));
    const dataBack = [];
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      dataBack.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    console.log('dataBack ===', dataBack);
    setAddsArr(dataBack);
  }

  function deleteFire(delId) {
    deleteDoc(doc(db, 'skelbimai', delId))
      .then(() => {
        toast.success('istrinta');
        getAdds();
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
        toast.error('istrinti nepavyko');
      });
  }

  return (
    <div className='container'>
      <h1 className='text-3xl mb-4 pt-4'>HomePage</h1>
      <p>welcome to out adds</p>

      <AddCardList list={addsArr} onDelete={deleteFire} />
    </div>
  );
}
