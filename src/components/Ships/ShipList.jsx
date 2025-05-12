import { useNavigate } from "react-router-dom";
import { useShips } from "../../contexts/ShipsContext";

export default function ShipList() {
  const { ships, deleteShip } = useShips();
  const navigate = useNavigate();

  return (
    <div className="p-8  min-h-screen">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
        Ships
      </h2>

      <div className="flex justify-center mb-6 ">
        
        <button class="group relative h-12 rounded-full border border-neutral-200 bg-blue-100 px-4 text-neutral-950" onClick={() => navigate("/dashboard/ships/new")} >
          <span class="relative inline-flex overflow-hidden">
            <div class="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
              Add Ship
            </div>
            <div class="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              Add Ship
            </div>
          </span>
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ships.map((ship) => (
          <div
            key={ship.id}
            className="relative border p-6 rounded-lg shadow-lg bg-cover bg-center brightness-100 text-white transition-transform transform duration-700 hover:scale-105"
            style={{
              backgroundImage: `url('https://cdn.pixabay.com/photo/2020/12/06/22/51/ship-5810249_1280.jpg')`,
            }}
          >
            <div className="relative ">
              <h3 className="font-bold text-xl">{ship.name}</h3>
              <p className="text-sm">IMO: {ship.imo}</p>
              <p className="text-sm">Flag: {ship.flag}</p>
              <p className="text-sm">Status: {ship.status}</p>

              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => navigate(`/dashboard/ships/edit/${ship.id}`)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-transform transform hover:scale-105"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteShip(ship.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-transform transform hover:scale-105"
                >
                  Delete
                </button>
                <button
                  onClick={() => navigate(`/dashboard/ships/${ship.id}`)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-transform transform hover:scale-105"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
