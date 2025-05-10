import { useNavigate } from "react-router-dom";
import { useComponents } from "../../contexts/ComponentsContext";

export default function ComponentList() {
  const { components, deleteComponent } = useComponents();
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Components</h2>
      <button
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded"
        onClick={() => navigate("/components/new")}
      >
        Add Component
      </button>

      {components.map((comp) => (
        <div key={comp.id} className="border p-4 mb-3 rounded">
          <p><strong>{comp.name}</strong></p>
          <p>Serial: {comp.serialNumber}</p>
          <p>Ship ID: {comp.shipId}</p>
          <div className="flex gap-2 mt-2">
            <button onClick={() => navigate(`/components/${comp.id}`)} className="bg-gray-500 text-white px-3 py-1 rounded">View</button>
            <button onClick={() => navigate(`/components/edit/${comp.id}`)} className="bg-blue-600 text-white px-3 py-1 rounded">Edit</button>
            <button onClick={() => deleteComponent(comp.id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}