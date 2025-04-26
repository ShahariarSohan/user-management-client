import React from "react";
import { useLoaderData } from "react-router-dom";

const Coffee = () => {
  const coffee = useLoaderData();
  return (
    <div className="my-20">
      <div className="flex gap-10 border-2 border-purple-600 w-1/2 mx-auto rounded-md p-10 items-center ">
        <div>
          <img src={coffee.photoURL} alt="" />
        </div>
        <div className="text-xl font-bold">
          <p>{coffee.name}</p>
          <p className="text-red-500">{coffee.category}</p>
          <p>{coffee.supplier}</p>
          <p>{coffee.chef}</p>
          <p>{coffee.taste}</p>
          <p>{coffee.details}</p>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
