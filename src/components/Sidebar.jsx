import { sidebarLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const location = useLocation();
  const { user, role, loading } = useAuth();

  if (loading) return null;

  const filteredLinks = sidebarLinks.filter(
    (item) => item.role === "common" || item.role === role
  );

  return (
    <div className="bg-[rgba(106,103,103,0.21)] w-[250px] hidden md:flex flex-col items-center pt-5 text-lg">
      <ul>
        {filteredLinks.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.path} className="flex items-center">
              {isActive && <MdOutlineKeyboardArrowRight />}
              <Link to={item.path} className="flex items-center gap-2 p-4">
                <img src={item.imgUrl} alt={item.label} />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
