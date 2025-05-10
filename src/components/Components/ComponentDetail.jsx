import { useParams } from "react-router-dom";
import { useComponents } from "../../contexts/ComponentsContext";

export default function ComponentDetail() {
  const { id } = useParams();
  const { components } = useComponents();
  const comp = components.find(c => c.id === id);

  if (!comp) return <p className="p-4">Component not found</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">{comp.name}</h2>
      <p><strong>Serial Number:</strong> {comp.serialNumber}</p>
      <p><strong>Ship ID:</strong> {comp.shipId}</p>
      <p><strong>Install Date:</strong> {comp.installDate}</p>
      <p><strong>Last Maintenance:</strong> {comp.lastMaintenanceDate}</p>
    </div>
  );
}