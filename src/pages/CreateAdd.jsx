import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const singeTestItem = {
  title: 'iPhone 11',
  description: 'An apple mobile which is nothing like apple',
  price: 999,
  stock: 10,
  brand: 'Apple',
  category: 'smartphones',
  mainImgUrl: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  tags: ['tech', 'phones'],
};

export default function CreateAdd() {
  // console.log('firebse app', app);

  async function createAdd() {
    console.log('creating');
    try {
      const docRef = await addDoc(collection(db, 'skelbimai'), singeTestItem);
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }

  return (
    <div className='container'>
      <h1 className='text-3xl mb-4 pt-4'>CreateAdd</h1>
      <p>CreateAdd here</p>
      <button
        onClick={createAdd}
        className='text-lg border border-slate-500 px-3 pb-[0.752rem] py-2 rounded-md hover:bg-slate-200'
      >
        create sample add
      </button>
    </div>
  );
}
