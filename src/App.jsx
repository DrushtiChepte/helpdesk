import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Layout from "./components/Layout";
import MyTickets from "./pages/MyTickets";
import NewTicket from "./pages/NewTicket";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Signup" element={<SignUp />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new-ticket" element={<NewTicket />} />
          <Route path="/my-tickets" element={<MyTickets />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
