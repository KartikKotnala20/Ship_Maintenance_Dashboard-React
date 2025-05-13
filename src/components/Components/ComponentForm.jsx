import { useParams, useNavigate } from "react-router-dom";
import { useComponents } from "../../contexts/ComponentsContext";
import { useShips } from "../../contexts/ShipsContext";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ComponentForm() {
  const { id } = useParams();
  const editing = Boolean(id);
  const { components, addComponent, updateComponent } = useComponents();
  const { ships } = useShips();
  const navigate = useNavigate();

  const existing = components.find(c => c.id === id);

  const [form, setForm] = useState({
    name: "",
    serialNumber: "",
    shipId: ships.length ? ships[0].id : "",
    installDate: "",
    lastMaintenanceDate: ""
  });

  useEffect(() => {
    if (editing && existing) setForm(existing);
  }, [editing, existing]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      updateComponent(form);
    } else {
      addComponent({ ...form, id: uuidv4() });
    }
    navigate("/dashboard/components");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white max-w-md mx-auto rounded shadow">
      <h2 className="text-xl font-bold mb-4">{editing ? "Edit" : "Add"} Component</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="w-full p-2 mb-3 border rounded" />
      <input name="serialNumber" placeholder="Serial Number" value={form.serialNumber} onChange={handleChange} required className="w-full p-2 mb-3 border rounded" />
      <select name="shipId" value={form.shipId} onChange={handleChange} required className="w-full p-2 mb-3 border rounded">
        {ships.map(ship => (
          <option key={ship.id} value={ship.id}>{ship.name}</option>
        ))}
      </select>
      <input name="installDate" type="date" value={form.installDate}   onChange={handleChange} required className="w-full p-2 mb-3 border rounded" />
      <input name="lastMaintenanceDate" type="date" value={form.lastMaintenanceDate} onChange={handleChange} required className="w-full p-2 mb-3 border rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">{editing ? "Update" : "Add"}</button>
    </form>
  );
}