import { useState } from "react";
import { useJobs } from "../../contexts/JobsContext";
import { useComponents } from "../../contexts/ComponentsContext"; // You must have this context defined

const JobForm = () => {
  const { addJob } = useJobs();
  const { components } = useComponents();

  const [form, setForm] = useState({
    componentId: "",
    shipId: "",
    type: "",
    priority: "Medium",
    status: "Open",
    assignedEngineerId: "",
    scheduledDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleComponentChange = (e) => {
    const componentId = e.target.value;
    const selectedComponent = components.find((c) => c.id === componentId);
    setForm((prev) => ({
      ...prev,
      componentId,
      shipId: selectedComponent?.shipId || "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.componentId || !form.assignedEngineerId || !form.scheduledDate) {
      alert("Please fill all required fields");
      return;
    }
    addJob(form);
    setForm({
      componentId: "",
      shipId: "",
      type: "",
      priority: "Medium",
      status: "Open",
      assignedEngineerId: "",
      scheduledDate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded space-y-2">
      <h2 className="text-lg font-bold">Add Maintenance Job</h2>

      <select
        name="componentId"
        value={form.componentId}
        onChange={handleComponentChange}
        className="w-full border p-2"
        required
      >
        <option value="">Select Component</option>
        {components.map((comp) => (
          <option key={comp.id} value={comp.id}>
            {comp.name} ({comp.serialNumber})
          </option>
        ))}
      </select>

      <input
        type="text"
        name="type"
        placeholder="Job Type (e.g., Inspection)"
        value={form.type}
        onChange={handleChange}
        className="w-full border p-2"
        required
      />

      <select
        name="priority"
        value={form.priority}
        onChange={handleChange}
        className="w-full border p-2"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <input
        type="text"
        name="assignedEngineerId"
        placeholder="Engineer ID (e.g., 3)"
        value={form.assignedEngineerId}
        onChange={handleChange}
        className="w-full border p-2"
        required
      />

      <input
        type="date"
        name="scheduledDate"
        value={form.scheduledDate}
        onChange={handleChange}
        className="w-full border p-2"
        required
      />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Create Job
      </button>
    </form>
  );
};

export default JobForm;


