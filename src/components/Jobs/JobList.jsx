
import { useState } from "react";
import { useJobs } from "../../contexts/JobsContext";
import { useShips } from "../../contexts/ShipsContext";

const JobList = () => {
  const { updateJobStatus, filterJobs } = useJobs();
  const { ships } = useShips();

  const [filters, setFilters] = useState({
    shipId: "",
    status: "",
    priority: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusUpdate = (jobId, newStatus) => {
    updateJobStatus(jobId, newStatus);
  };

  const filteredJobs = filterJobs(filters.shipId, filters.status, filters.priority);

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold mb-2">Maintenance Jobs</h2>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <select name="shipId" onChange={handleFilterChange} className="border p-2">
          <option value="">All Ships</option>
          {ships.map((ship) => (
            <option key={ship.id} value={ship.id}>
              {ship.name}
            </option>
          ))}
        </select>

        <select name="status" onChange={handleFilterChange} className="border p-2">
          <option value="">All Statuses</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <select name="priority" onChange={handleFilterChange} className="border p-2">
          <option value="">All Priorities</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>

      {filteredJobs.map((job) => (
        <div key={job.id} className="border p-3 mb-2 rounded shadow">
          <p><strong>Type:</strong> {job.type}</p>
          <p><strong>Priority:</strong> {job.priority}</p>
          <p><strong>Status:</strong> {job.status}</p>
          <p><strong>Scheduled:</strong> {job.scheduledDate}</p>
          <p><strong>Engineer ID:</strong> {job.assignedEngineerId}</p>

          <select
            value={job.status}
            onChange={(e) => handleStatusUpdate(job.id, e.target.value)}
            className="mt-2 border p-1"
          >
            <option>Open</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>
      ))}

      {filteredJobs.length === 0 && <p>No jobs found for selected filters.</p>}
    </div>
  );
};

export default JobList;
