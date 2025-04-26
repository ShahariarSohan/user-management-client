import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Coffees = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingCoffees = coffees.filter(
                (coffee) => coffee._id !== id
              );
              setCoffees(remainingCoffees);
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="my-20 ">
      <div className="container mx-auto grid grid-cols-4 gap-5 items-center">
        {coffees.map((coffee) => (
          <div
            key={coffee._id}
            className="flex gap-3 border-2 border-red-500 rounded-md "
          >
            <div>
              <img src={coffee.photoURL} className="w-28 h-28" alt="" />
            </div>
            <div className=" flex gap-5 font-bold items-center">
              <div>
                <p>{coffee.name}</p>
                <p className="text-red-500">{coffee.category}</p>
                <p>{coffee.supplier}</p>
              </div>
              <div className=" grid gap-2 text-2xl text-red-500 font-bold">
                <Link to={`/coffee/${coffee._id}`} type="button">
                  <FaEye />
                </Link>
                <Link to={`/coffees/update/${coffee._id}`} type="button">
                  <MdModeEdit />
                </Link>
                <button onClick={() => handleDelete(coffee._id)} type="button">
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coffees;
