import { useShips } from "../../contexts/ShipsContext";
import { useJobs } from "../../contexts/JobsContext";
import { useComponents } from "../../contexts/ComponentsContext";

export default function KPICards() {
  const { ships } = useShips();
  const { jobs } = useJobs();
  const { components } = useComponents();

  const totalShips = ships.length;
  const jobsInProgress = jobs.filter((j) => j.status === "in-progress").length;
  const jobsCompleted = jobs.filter((j) => j.status === "completed").length;
  const overdueComponents = components.filter((c) => c.isOverdue).length;

  const cards = [
    {
      label: "Total Ships",
      value: totalShips,
      bg: "bg-[url('https://cdn.pixabay.com/photo/2023/07/28/11/05/boat-8155029_1280.jpg')] bg-cover bg-center text-white backdrop-blur-md",
    },
    {
      label: "Overdue Components",
      value: overdueComponents,
      bg: "bg-[url('https://cdn.pixabay.com/photo/2022/08/29/07/44/port-7418239_1280.jpg')] bg-cover bg-center text-white backdrop-blur-md",
    },
    {
      label: "Jobs In Progress",
      value: jobsInProgress,
      bg: "bg-[url('https://cdn.pixabay.com/photo/2019/02/25/14/02/marine-4019745_1280.jpg')] bg-cover bg-center text-white backdrop-blur-md",
    },
    {
      label: "Jobs Completed",
      value: jobsCompleted,
      bg: "bg-[url('https://cdn.pixabay.com/photo/2021/12/06/10/55/hamburg-6849995_1280.jpg')] bg-cover bg-center text-white backdrop-blur-md",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`rounded-2xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50 animate-fade-in p-6 h-44 flex flex-col justify-between ${card.bg}`}
        >
          <p className="text-lg font-medium drop-shadow-md">{card.label}</p>
          <p className="text-5xl font-extrabold drop-shadow-md">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
