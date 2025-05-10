import { useParams } from "react-router-dom";
import { useShips } from "../../contexts/ShipsContext";

export default function ShipDetail() {
  const { ships } = useShips();
  const { id } = useParams();

  const ship = ships.find(s => s.id === id);

  if (!ship) return <p className="p-4">Ship not found</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{ship.name} Details</h2>
      <p><strong>IMO:</strong> {ship.imo}</p>
      <p><strong>Flag:</strong> {ship.flag}</p>
      <p><strong>Status:</strong> {ship.status}</p>
    </div>
  );
}