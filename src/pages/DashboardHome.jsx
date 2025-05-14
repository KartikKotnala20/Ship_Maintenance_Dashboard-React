import KPICards from "../components/Dashboard/KPICards";
import Charts from "../components/Dashboard/Charts";

export default function DashboardHome() {
  return (
    <div className="bg-[#F2F9FF] relative p-6 space-y-6 overflow-y-auto h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("")' }}>
      <KPICards />
      <Charts />
    </div>
  );
}
