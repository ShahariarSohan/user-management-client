import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Add New Coffee</h1>
      <div className="container mx-auto">
        <form>
          <div className="w-full space-y-10 my-10 bg-gray-300 rounded-md p-10  ">
            <div className="flex gap-3">
              <input type="text" placeholder="Name" className="input w-1/2" />
              <input type="text" placeholder="Chef" className="input w-1/2" />
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Supplier"
                className="input w-1/2"
              />
              <input type="text" placeholder="Taste" className="input w-1/2" />
            </div>
            <div className="flex gap-3">
              <select
                type="text"
                name="category"
                placeholder="Select Brand"
                className="input w-1/2"
              >
                <option value="Express">Express</option>
                <option value="Rio">Rio</option>
                <option value="Hot Brand">Hot Brand</option>
                <option value="Express Plus">Express Plus</option>
              </select>

              <input
                type="text"
                placeholder="Photo URL"
                className="input w-1/2"
              />
            </div>

            <div>
              <textarea
                rows=""
                type="textarea"
                placeholder="Details"
                className="w-full bg-white p-5"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Add Coffee"
                className="input w-full bg-blue-400"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
