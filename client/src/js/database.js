import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented')

  // open db 
  const jatedb = await openDB('jate', 1);

  // create a new transition 
  const tx = jatedb.transaction('jate', 'readwrite');

  // Open up the object store
  const store = tx.objectStore('jate');

  // put method over here 
  const req = store.put({ value: content });

  // putting the data to the page 
  const res = await req;

  console.log('data saved!', res)
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented')
  
  // open db 
  const jatedb = await openDB('jate', 1);

  // create a new transition 
  const tx = jatedb.transaction('jate', 'readwrite');

  // Open up the object store
  const store = tx.objectStore('jate');

  // get all function goes here
  const req = store.getAll();

  // putting the date to the page 
  const res = await req; 

  console.log('data loaded!', res)
};

initdb();
