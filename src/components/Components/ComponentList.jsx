import { useNavigate } from "react-router-dom";
import { useComponents } from "../../contexts/ComponentsContext";

export default function ComponentList() {
  const { components, deleteComponent } = useComponents();
  const navigate = useNavigate();

  return (
    <div className="bg-[#F2F9FF] min-h-screen p-10 w-full text-gray-900">
      <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in">
        Component Management
      </h2>

      <div className="flex justify-end mb-6">
        <button
          className="group relative h-12 rounded-full border border-neutral-200 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 shadow-lg hover:shadow-xl transition-transform transform hover:scale-110"
          onClick={() => navigate("/dashboard/components/new")}
        >
          <span className="relative inline-flex overflow-hidden">
            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[120%] group-hover:skew-y-9">
              Add Components
            </div>
            <div className="absolute translate-y-[120%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              Add Components
            </div>
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((comp) => (
          <div
            key={comp.id}
            className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 animate-slide-up"
          >
            <p className="text-lg font-semibold text-gray-700">{comp.name}</p>
            <p className="text-sm text-gray-600">Serial: {comp.serialNumber}</p>
            <p className="text-sm text-gray-600">Ship ID: {comp.shipId}</p>
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => navigate(`/dashboard/components/${comp.id}`)}
                className="bg-gray-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800 hover:scale-105 transition-transform"
              >
                View
              </button>
              <button
                onClick={() => navigate(`/dashboard/components/edit/${comp.id}`)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 hover:scale-105 transition-transform"
              >
                Edit
              </button>
              <button
                onClick={() => deleteComponent(comp.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 hover:scale-105 transition-transform"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}