import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useShips } from "../../contexts/ShipsContext";
import { v4 as uuidv4 } from "uuid";

export default function ShipForm() {
  const { ships, addShip, updateShip } = useShips();
  const navigate = useNavigate();
  const { id } = useParams();

  const editing = Boolean(id);
  const existing = ships.find(s => s.id === id);

  const [form, setForm] = useState({
    name: "",
    imo: "",
    flag: "",
    status: "Active"
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
      updateShip(form);
    } else {
      addShip({ ...form, id: uuidv4() });
    }
    navigate("/ships");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">{editing ? "Edit Ship" : "Add New Ship"}</h2>
      {["name", "imo", "flag"].map((field) => (
        <input
          key={field}
          name={field}
          value={form[field]}
          onChange={handleChange}
          placeholder={field.toUpperCase()}
          className="w-full mb-3 p-2 border rounded"
          required
        />
      ))}
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
      >
        <option value="Active">Active</option>
        <option value="Under Maintenance">Under Maintenance</option>
        <option value="Inactive">Inactive</option>
      </select>
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
        {editing ? "Update" : "Add"}
      </button>
    </form>
  );
}