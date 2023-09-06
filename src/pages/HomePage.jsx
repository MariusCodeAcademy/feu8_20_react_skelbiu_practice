import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { useAuth } from '../store/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import SingleAddCard from '../components/adds/SingleAddCard';

export default function HomePage() {
  const [addsArr, setAddsArr] = useState([]);
  const ctx = useAuth();

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

      <ul className='grid grid-cols-3 gap-3'>
        {addsArr.map((addObj) => (
          <SingleAddCard key={addObj.id} item={addObj} />
          // <li

          //   className={`border-[1px] px-4 py-3 inline-block ${isMine(
          //     userUid,
          //     ctx.userUid
          //   )}`}
          // >
          //   <h2 className='font-bold text-2xl'>{title}</h2>
          //   <p>{price}eur</p>
          //   <p>userUid: {userUid}</p>
          //   <Link
          //     className='border border-slate-200 px-2 py-1 mt-3 inline-block bg-slate-600 text-white'
          //     to={`/adds/${id}`}
          //   >
          //     Read more
          //   </Link>
          //   {userUid === ctx.userUid && (
          //     <button
          //       onClick={() => deleteFire(id)}
          //       className='border border-slate-200 px-2 py-1 mt-3 inline-block bg-red-600 text-white'
          //     >
          //       delete
          //     </button>
          //   )}
          // </li>
        ))}
      </ul>
    </div>
  );
}

function isMine(elId, userId) {
  if (elId === userId) {
    return 'shadow-md bg-amber-100';
  }
}
