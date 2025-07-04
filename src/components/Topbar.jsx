import { topBarLinks } from "../constants";
import ToggleButton from "./ToggleBtn";

const Topbar = () => {
  return (
    <div className="h-20 bg-primary  flex items-center justify-between items-center px-4 md:px-6">
      <h1 className="italic">Helpdesk</h1>
      <div className="flex">
        <div className="px-2">
          <ToggleButton />
        </div>
        {topBarLinks.map((item) => (
          <div
            key={item.label}
            className="inline-block mx-2 flex items-center justify-center cursor-pointer"
          >
            <img
              src={item.imgUrl}
              alt={item.label}
              height={20}
              width={20}
              className="inline-block"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
