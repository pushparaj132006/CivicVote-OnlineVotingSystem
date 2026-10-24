import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyRegistrations from "./pages/MyRegistrations";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/my-registrations" element={<MyRegistrations />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
        <footer className="bg-slate-900 text-slate-400 py-6 text-center text-xs border-t border-slate-800">
          <p className="font-semibold text-slate-300">CivicVote &copy; 2026. Official Online Voting Platform.</p>
          <p className="mt-1 text-slate-500">Ishan Katariya • Roll No. 19 • Class D15A • Full Stack Development</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
