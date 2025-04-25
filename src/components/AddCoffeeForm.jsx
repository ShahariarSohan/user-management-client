import React from "react";

const AddCoffeeForm = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const chef = e.target.chef.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const photoURL = e.target.photoURL.value;
    const details = e.target.details.value;

    const coffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      photoURL,
      details,
    };

    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Add New Coffee</h1>
      <div className="container mx-auto">
        <form onSubmit={handleAddCoffee}>
          <div className="w-full space-y-10 my-10 bg-gray-300 rounded-md p-10  ">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input w-1/2"
              />
              <input
                type="text"
                placeholder="Chef"
                name="chef"
                className="input w-1/2"
              />
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Supplier"
                name="supplier"
                className="input w-1/2"
              />
              <input
                type="text"
                placeholder="Taste"
                name="taste"
                className="input w-1/2"
              />
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
                name="photoURL"
                className="input w-1/2"
              />
            </div>

            <div>
              <textarea
                rows=""
                type="textarea"
                placeholder="Details"
                name="details"
                className="w-full bg-white p-5"
              />
            </div>
            <div>
              <button type="submit" className="btn w-full bg-blue-400">
                Add Coffee
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffeeForm;
