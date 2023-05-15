"use client";

import { app, database } from "../../firebaseConfig";
import { getApp } from "firebase/app";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

const dbInstance = collection(database, "products");

const getProducts = async (setProducts) => {
  getDocs(dbInstance).then((querySnapshot) => {
    const elements = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProducts(elements);
  });
};

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <main>
      <h1 className="text-6xl font-bold text-center mb-14">
        Gestion de vos stock
      </h1>
      <table className="w-5/6 mx-auto mb-7">
        <thead>
          <tr>
            <th className="border border-black w-3/6">Nom</th>
            <th className="border border-black w-1/6">Quantité</th>
            <th className="border border-black w-1/6">Prix</th>
            <th className="border border-black">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border border-black text-center">
                {product.name}
              </td>
              <td className="border border-black text-center">
                {product.quantity}
              </td>
              <td className="border border-black text-center">
                {product.price}
              </td>
              <td className="border border-black">
                <span className="w-max flex">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1">
                    Modifier
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Supprimer
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mx-auto w-min">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Ajouter
        </button>
      </div>
    </main>
  );
}
