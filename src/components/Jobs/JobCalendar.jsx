import { useState, useContext } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useJobs } from "../../contexts/JobsContext";

const JobCalendar = () => {
  const { jobs } = useJobs();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getJobsForDate = (date) => {
    const dateStr = date.toISOString().split("T")[0];
    return jobs.filter(job => job.scheduledDate === dateStr);
  };

  const tileContent = ({ date, view }) => {
    const jobsOnDate = getJobsForDate(date);
    if (view === "month" && jobsOnDate.length > 0) {
      return <span className="text-xs text-red-500">● {jobsOnDate.length}</span>;
    }
  };

  const jobsForSelected = getJobsForDate(selectedDate);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Maintenance Calendar</h2>

      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={tileContent}
      />

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Jobs on {selectedDate.toDateString()}</h3>
        {jobsForSelected.length === 0 ? (
          <p className="text-gray-500">No jobs scheduled.</p>
        ) : (
          <ul className="space-y-2 mt-2">
            {jobsForSelected.map(job => (
              <li key={job.id} className="border p-2 rounded shadow">
                <p><strong>Type:</strong> {job.type}</p>
                <p><strong>Priority:</strong> {job.priority}</p>
                <p><strong>Status:</strong> {job.status}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default JobCalendar;
