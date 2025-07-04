import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-primary overflow-hidden">
      <div className="bg-[rgba(255,255,255,0.4)] px-5 py-5 md:px-[200px] md:py-[100px]">
        <h1 className="italic">Helpdesk System</h1>
        <form onSubmit={handleLogin} className="p-8 w-full max-w-lg space-y-10">
          <input
            type="username"
            placeholder="Username"
            className="bg-white w-full border px-3 py-2 mb-6"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-white w-full border px-3 py-2 mb-6"
            required
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green text-white py-3 px-20 rounded-2xl mx-auto cursor-pointer hover:bg-green-600 transition duration-300"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="flex justify-between mt-4">
          <Link to="/" className="text-red-500">
            Forgot Password?
          </Link>
          <Link to="/signup" className="">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
