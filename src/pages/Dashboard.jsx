import { dashboardCards } from "../constants";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { role, user } = useAuth();

  return (
    <>
      <div className="bg-white flex flex-col items-center min-h-screen p-5">
        <h2 className="text-4xl">Dashboard</h2>
        {/* common content */}
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

        {/* admin content */}
        <div>
          {role === "admin" && (
            <div className="grid grid-cols-2 gap-6 py-5">
              <div className="px-30 py-5 bg-primary rounded shadow row-span-3 col-span-1">
                <img src="./graphbar.svg" alt="bar" />
              </div>
              <div className="p-4 bg-primary rounded shadow col-span-1 row-span-2 flex items-center justify-around">
                <div className="flex flex-col items-center">
                  <img src="./tech1.svg" alt="tech" />
                  <p className="text-2xl">3</p>
                  <p className="text-2xl">Technical Supports</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src="./tech2.svg" alt="tech" />
                  <p className="text-2xl">4</p>
                  <p className="text-2xl">Operation Team</p>
                </div>
              </div>
              <div className="p-4 bg-primary rounded shadow col-span-1 row-span-1 flex items-center justify-center flex-col">
                <p className="text-2xl">Customer Feedback</p>
                <div className="flex gap-1 mt-2">
                  {Array(4)
                    .fill()
                    .map((_, i) => (
                      <img
                        key={i}
                        src="/star.svg"
                        alt="icon"
                        height={20}
                        width={20}
                      />
                    ))}
                  <img src="/halfstar.svg" alt="star" height={20} width={20} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
