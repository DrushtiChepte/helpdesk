import { FaMagnifyingGlass } from "react-icons/fa6";

const MyTickets = () => {
  return (
    <div className=" h-screen p-6">
      <h2 className="text-4xl text-center">My Tickets</h2>
      <div className="w-fit mt-10 rounded-lg bg-zinc-500 shadow-lg ">
        <input
          type="text"
          placeholder="Search my tickets..."
          className="border-gray-300 p-2 rounded"
        />
        <button className="ml-2 p-3 rounded">
          <FaMagnifyingGlass />
        </button>
      </div>
      <div className="flex mt-10 gap-2">
        <label className="text-lg">show:</label>
        <select className="border border-gray-300 rounded w-fit">
          <option value="">10</option>
          <option value="bug">Bug</option>
          <option value="feature">Feature Request</option>
          <option value="ui">UI Issue</option>
          <option value="other">Other</option>
        </select>
        <p>entities</p>
      </div>
    </div>
  );
};

export default MyTickets;
