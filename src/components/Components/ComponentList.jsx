import { useNavigate } from "react-router-dom";
import { useComponents } from "../../contexts/ComponentsContext";

export default function ComponentList() {
  const { components, deleteComponent } = useComponents();
  const navigate = useNavigate();

  return (
    <div className="bg-red-100 h-screen p-10 w-full ">
      <h2 className="text-xl font-bold mb-4">Components</h2>
      <div className="flex justify-end mb-6  ">
      <button class="group  relative h-12 rounded-full border border-neutral-200 bg-blue-100 px-4 text-neutral-950" onClick={() => navigate("/dashboard/components/new")} >
          <span class="relative inline-flex overflow-hidden">
            <div class="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[120%] group-hover:skew-y-9">
              Add Components
            </div>
            <div class="absolute translate-y-[120%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              Add Components
            </div>
          </span>
        </button>
        </div>
      <div className="flex justify-around gap-20 flex-wrap ">
      {components.map((comp) => (
        <div key={comp.id} className="border p-4 mb-3 rounded w-64">
          <p><strong>{comp.name}</strong></p>
          <p>Serial: {comp.serialNumber}</p>
          <p>Ship ID: {comp.shipId}</p>
          <div className="flex gap-2 mt-2">
            <button onClick={() => navigate(`/dashboard/components/${comp.id}`)} className="bg-gray-500 text-white px-3 py-1 rounded">View</button>
            <button onClick={() => navigate(`/dashboard/components/edit/${comp.id}`)} className="bg-blue-600 text-white px-3 py-1 rounded">Edit</button>
            <button onClick={() => deleteComponent(comp.id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}