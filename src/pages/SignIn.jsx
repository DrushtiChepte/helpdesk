import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import { useAuth } from "../context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setRole } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Login failed: " + error.message);
      return;
    }

    const { data: roleData, error: roleError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .single();

    if (roleError) {
      alert("Failed to fetch role");
      return;
    }

    setRole(roleData?.role);
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-primary overflow-hidden">
      <div className="bg-[rgba(255,255,255,0.4)] px-5 py-5 md:px-[200px] md:py-[100px]">
        <h1 className="italic text-center text-2xl mb-6">Helpdesk System</h1>
        <form onSubmit={handleLogin} className="p-8 w-full max-w-lg space-y-10">
          <input
            type="email"
            placeholder="Email"
            className="bg-white w-full border px-3 py-2 mb-6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-white w-full border px-3 py-2 mb-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <div className="flex justify-between mt-4 px-8">
          <Link to="/" className="text-red-500 hover:underline">
            Forgot Password?
          </Link>
          <Link to="/signup" className="hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
