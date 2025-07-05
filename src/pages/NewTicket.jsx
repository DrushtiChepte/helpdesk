const NewTicket = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-10 overflow-hidden">
      <h2 className="text-4xl">Create New Ticket</h2>
      <form action="" className="w-full max-w-4xl mt-10 p-6 ">
        <div className="grid grid-cols-2 gap-4">
          <label className="text-lg col-span-1">Ticket No.</label>
          <input
            type="text"
            placeholder="Ticket No."
            className="border border-gray-300 bg-gray-400  p-2 rounded col-span-2"
          />

          <label className="text-lg col-span-1">Date: </label>
          <input
            type="date"
            className="border border-gray-300 bg-gray-400 p-2 rounded col-span-2"
          />
          <label className="text-lg col-span-1">Name: </label>
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 bg-gray-400 p-2 rounded col-span-2"
          />
          <label className="text-lg col-span-1">Department: </label>
          <input
            type="text"
            placeholder="Department"
            className="border border-gray-300 bg-gray-400 p-2 rounded col-span-2"
          />
          <label className="text-lg col-span-3">Subject: </label>
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 bg-gray-400 p-2 rounded col-span-6"
          />
        </div>
        <div className="grid grid-cols-5 gap-4 mt-4">
          <div className="col-span-2 grid grid-cols-1 gap-2 ">
            <label className="text-lg col-span-1 self-center">Category:</label>
            <input
              type="text"
              placeholder="Category"
              className="border border-gray-300 bg-gray-400 p-2 rounded col-span-1"
            />
          </div>

          <div className="col-span-3 row-span-3 grid grid-cols-1 grid-rows-5 gap-2">
            <label className="text-lg col-span-1 self-start">
              Description:
            </label>
            <textarea
              placeholder="Description"
              className="border border-gray-300 bg-gray-400 p-2 rounded col-span-1 row-span-14 resize-none"
            ></textarea>
          </div>

          <div className="col-span-2 grid grid-cols-1 gap-2 ">
            <label className="text-lg col-span-1 self-center">Type:</label>
            <input
              type="text"
              placeholder="Type"
              className="border border-gray-300 bg-gray-400 p-2 rounded col-span-1"
            />
          </div>

          <div className="col-span-2 grid grid-cols-1 gap-2 ">
            <label className="text-lg col-span-1 self-center">Priority:</label>
            <input
              type="text"
              placeholder="Priority"
              className="border border-gray-300 bg-gray-400 p-2 rounded col-span-1"
            />
          </div>
        </div>

        <div className="flex justify-around items-center mt-6">
          <div className="flex justify-end">
            <div className="flex items-center gap-2 border border-black rounded p-4">
              <input type="checkbox" id="robotCheck" />
              <label htmlFor="robotCheck" className="text-md">
                I'm not a robot
              </label>
            </div>
          </div>
          <div>
            <button type="button" className="bg-primary px-15 py-2 rounded-lg">submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewTicket;
