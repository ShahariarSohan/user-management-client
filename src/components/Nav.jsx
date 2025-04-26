import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <div className="flex flex-col md:flex-row gap-5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "underline text-red-600 font-bold" : "font-bold"
        }
      >
        My coffees
      </NavLink>
      <NavLink
        to="/addCoffees"
        className={({ isActive }) =>
          isActive ? "underline text-red-600 font-bold" : "font-bold"
        }
      >
        AddCoffees
      </NavLink>
    </div>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("LogOut Successfully");
      })
      .catch((error) => {
        toast.error("LogOut failed for", error.message);
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-3 font-bold">
            <p>{user?.email ? user.email : ""}</p>
            <button onClick={handleLogOut} className="btn btn-neutral">
              LogOut
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-neutral">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
