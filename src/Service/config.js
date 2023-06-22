// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  orderBy,
  writeBatch,
} from "firebase/firestore";

import ListPlants from "../Data/ListPlants.json"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP2G99s3-C31spTyK2hdM0Nrussw6WNg4",
  authDomain: "eplants-2f50d.firebaseapp.com",
  projectId: "eplants-2f50d",
  storageBucket: "eplants-2f50d.appspot.com",
  messagingSenderId: "447841966881",
  appId: "1:447841966881:web:7fd65d08e04c9a54a6bc60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getData() {
  const productsCollectionRef = collection(db, "ListPlants");

  const q = query(productsCollectionRef, orderBy("index"));
  const productsSnapshot = await getDocs(q);
  const arrayDocs = productsSnapshot.docs;

  const dataDocs = arrayDocs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return dataDocs;
}
export async function getItemData(idUrl) {
  const docRef = doc(db, "ListPlants", idUrl);
  const docSnap = await getDoc(docRef);
  return { id: docSnap.id, ...docSnap.data() };
}

export async function getCategoryData(idCategory) {
  const productsCollectionRef = collection(db, "ListPlants");
  const q = query(productsCollectionRef, where("category", "==", idCategory));
  const productsSnapshot = await getDocs(q);
  const arrayDocs = productsSnapshot.docs;
  const dataDocs = arrayDocs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return dataDocs;
}

export async function createOrder(data) {
  const ordersCollectionRef = collection(db, "orders");

  const response = await addDoc(ordersCollectionRef, data);
  return response.id;
}

export async function createOrderWithStockUpdate(data) {
  const ordersCollectionRef = collection(db, "orders");
  const batch = writeBatch(db);
  const { items } = data;

  for (let itemInCart of items) {
    const refDoc = doc(db, "ListPlants", itemInCart.id);
    const docSnap = await getDoc(refDoc);

    const { stock } = docSnap.data();
    console.log(stock);

    const stockToUpdate = stock - itemInCart.count;
    if (stockToUpdate < 0) {
      throw new Error(`No hay stock suficiente del producto: ${itemInCart.id}`);
    } else {
      const docRef = doc(db, "ListPlants", itemInCart.id);
      batch.update(docRef, { stock: stockToUpdate });
    }
  }

  await batch.commit();
  const response = await addDoc(ordersCollectionRef, data);

  return response.id;
}

export async function exportDataWithBatch() {
  const batch = writeBatch(db);

  const collectionRef = collection(db, "ListPlants");

  for (let item of ListPlants) {
    item.index = item.id;
    delete item.id;

    const docRef = doc(collectionRef);
    batch.set(docRef, item);
  }

  await batch.commit();
  console.log("Items Exportados");
}