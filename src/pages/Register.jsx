import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    setEmailError("");
    setPasswordError("");
    if (!emailRegex.test(email)) {
      return setEmailError("Email must ends with @gmail.com");
    }
    if (!passwordRegex.test(password)) {
      return setPasswordError(
        "Password should have an uppercase, a lower case and atleast 6 characters"
      );
    }
    createUser(email, password)
      .then(() => {
        e.target.reset();
        toast.success("Registration Successful");
        navigate("/");
      })
      .catch(() => toast.error("User Registration Failed"));
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => navigate("/"))
      .catch();
  };
  return (
    <div className="p-5">
      <h3 className="text-4xl text-center font-bold">Register</h3>
      <div className="card bg-base-100 w-full  mx-auto max-w-lg shrink-0 shadow-2xl my-10 ">
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text "
              className="input w-full"
              placeholder="Name"
            />
            <label className="label">PhotoURL</label>
            <input
              name="photoURL"
              type="text "
              className="input w-full"
              placeholder="PhotoURL"
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email "
              className="input w-full"
              placeholder="Email"
              required
            />
            <p className="text-sm text-red-600">{emailError}</p>
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
              required
            />
            <p className="text-sm text-red-600">{passwordError}</p>
            <button className="btn bg-purple-400 text-white mt-4">
              Register
            </button>
          </fieldset>
        </form>
        <p className="text-center text-sm p-2">
          Already have an account ?
          <Link to="/login" className="link link-hover text-purple-400 ml-2">
            Login
          </Link>
        </p>
        <div className="my-2 flex justify-center">
          <button
            onClick={handleGoogleLogin}
            className="btn border-0 bg-white text-black w-1/2 mx-auto"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
