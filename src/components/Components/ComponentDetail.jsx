import { useParams } from "react-router-dom";
import { useComponents } from "../../contexts/ComponentsContext";

export default function ComponentDetail() {
  const { id } = useParams();
  const { components } = useComponents();
  const comp = components.find((c) => c.id === id);

  if (!comp)
    return (
      <p className="p-4 text-center text-red-600 text-lg font-semibold animate-fade-in">
        Component not found
      </p>
    );

  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center px-4"
      style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}
    >
      <div className="bg-white bg-opacity-90 shadow-xl rounded-lg p-8 w-full max-w-md animate-slide-up">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {comp.name}
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong className="text-gray-900">Serial Number:</strong>{" "}
            {comp.serialNumber}
          </p>
          <p>
            <strong className="text-gray-900">Ship ID:</strong> {comp.shipId}
          </p>
          <p>
            <strong className="text-gray-900">Install Date:</strong>{" "}
            {comp.installDate}
          </p>
          <p>
            <strong className="text-gray-900">Last Maintenance:</strong>{" "}
            {comp.lastMaintenanceDate}
          </p>
        </div>
      </div>
    </div>
  );
}