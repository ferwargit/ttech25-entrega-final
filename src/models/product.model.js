import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import db from "../config/firebase.js";

const collectionName = "products";

export const ProductModel = {
  // Obtener todos los productos
  async getAll() {
    const productsCol = collection(db, collectionName);
    const productSnapshot = await getDocs(productsCol);
    const productList = productSnapshot.docs.map((doc) => ({
      id: doc.id, // El ID alfanumérico real de Firebase
      ...doc.data(),
    }));
    return productList;
  },

  // Obtener un producto por ID
  async getById(id) {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  },

  // Crear un producto
  async create(productData) {
    const docRef = await addDoc(collection(db, collectionName), productData);
    return { id: docRef.id, ...productData };
  },

  // Eliminar un producto
  async remove(id) {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
    return true;
  },
};
