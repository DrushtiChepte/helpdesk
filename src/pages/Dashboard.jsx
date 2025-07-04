import { dashboardCards } from "../constants";

const Dashboard = () => {
  return (
    <div className="bg-white flex flex-col items-center min-h-screen p-10">
      <h2 className="text-4xl">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center gap-4"
            style={{ backgroundColor: card.color }}
          >
            <h3 className="text-lg">{card.label}</h3>
            <p className="text-7xl font-bold text-[#05386B]">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
