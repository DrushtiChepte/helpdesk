import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-primary overflow-hidden">
      <div className="bg-[rgba(255,255,255,0.4)] px-5 py-5 md:px-[200px] md:py-[50px]">
        <h1 className="italic">Helpdesk System</h1>
        <div className="flex flex-col items-center justify-center p-2">
          <h2 className="text-center">Sign Up here</h2>
          <form onSubmit={handleSignUp} className="p-5 w-full max-w-lg">
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
            <input
              type="email"
              placeholder="Email"
              className="bg-white w-full border px-3 py-2 mb-6"
              required
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#296ef2] text-white py-3 px-20 rounded-2xl mx-auto cursor-pointer hover:bg-blue-600 transition duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-between mt-4">
          <Link to="/" className="text-red-500">
            Forgot Password?
          </Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
