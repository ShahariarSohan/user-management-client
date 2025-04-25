import React from "react";
import { FaEye } from "react-icons/fa";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const Coffees = () => {
  const coffees = useLoaderData();

  const handleShow = () => {};
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
                <Link
                  to={`/coffees/${coffee._id}`}
                  onClick={() => handleShow(coffee._id)}
                  type="button"
                >
                  <FaEye />
                </Link>
                <Link type="button">
                  <MdModeEdit />
                </Link>
                <Link type="button">
                  <MdDeleteForever />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coffees;
