import { useParams } from "react-router-dom";
import { useShips } from "../../contexts/ShipsContext";

export default function ShipDetail() {
  const { ships } = useShips();
  const { id } = useParams();

  const ship = ships.find((s) => s.id === id);

  if (!ship)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-300 ">
        <p className="p-4 text-lg font-semibold bg-red-100 text-red-600 rounded-lg shadow-md">
          🚢 Ship not found
        </p>
      </div>
    );

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover  bg-center px-4  "
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2020/12/06/22/51/ship-5810249_1280.jpg')",
      }}
    >
      <div className="max-w-lg w-full bg-grey bg-opacity-80 rounded-lg shadow-lg backdrop-blur-md p-6 bg-cover" >
        <h2 className="text-3xl font-bold lg-6 text-gray-800">{ship.name} Details</h2>
        <p className="text-lg"><strong>IMO:</strong> {ship.imo}</p>
        <p className="text-lg"><strong>Flag:</strong> {ship.flag}</p>
        <p className="text-lg"><strong>Status:</strong> {ship.status}</p>
      </div>
    </div>
  );
}