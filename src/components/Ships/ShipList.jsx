import { useNavigate } from "react-router-dom";
import { useShips } from "../../contexts/ShipsContext";

export default function ShipList() {
  const { ships, deleteShip } = useShips();
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Ships</h2>
      <button
        onClick={() => navigate("/ships/new")}
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Ship
      </button>
      <div className="grid gap-4">
        {ships.map((ship) => (
          <div key={ship.id} className="border p-4 rounded shadow">
            <h3 className="font-bold">{ship.name}</h3>
            <p>IMO: {ship.imo}</p>
            <p>Flag: {ship.flag}</p>
            <p>Status: {ship.status}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => navigate(`/ships/edit/${ship.id}`)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteShip(ship.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => navigate(`/ships/${ship.id}`)}
                className="bg-gray-500 text-white px-3 py-1 rounded"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}