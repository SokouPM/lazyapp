export default function Home() {
  return (
    <main>
      <h1 className="text-6xl font-bold text-center mb-14">Gestion de vos stock</h1>
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
          <tr>
            <td className="border border-black"></td>
            <td className="border border-black"></td>
            <td className="border border-black"></td>
            <td className="border border-black">
              <span className="w-max flex">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1">Modifier</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Supprimer</button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mx-auto w-min">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Ajouter</button>
      </div>
    </main>
  );
}
