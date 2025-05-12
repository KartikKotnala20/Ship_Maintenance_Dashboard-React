import JobForm from "../components/Jobs/JobForm";
import JobList from "../components/Jobs/JobList";

const JobsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Maintenance Jobs Management</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: Form to add job */}
        <JobForm />

        {/* Right: List of jobs with filter and status update */}
        <JobList />
      </div>
    </div>
  );
};

export default JobsPage;
