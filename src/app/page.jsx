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
  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <main>
      <h1 className="text-6xl font-bold text-center mb-14">
        Gestion de vos stock
      </h1>
      <table className="w-5/6 mx-auto mb-4">
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
        {!visible ? (
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setVisible(true)}
          >
            Ajouter
          </button>
        ) : (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={() => setVisible(false)}
          >
            Annuler
          </button>
        )}
      </div>

      {visible && (
        <div className="w-1/2 mx-auto">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nom
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                id="name"
                type="text"
                placeholder="Nom"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="quantity"
              >
                Quantité
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                id="quantity"
                type="number"
                placeholder="Quantité"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="price"
              >
                Prix
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                id="price"
                type="number"
                placeholder="Prix"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-1"
                type="button"
                onClick={() => console.log("TODO")}
              >
                Ajouter
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}
