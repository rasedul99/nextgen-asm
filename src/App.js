import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar";
import Attendance from "./pages/Attendance";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="bg-slate-100  flex">
      <Navbar className="w-1/5" />
      <div className="basis-full">
        <Header />
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="attendance" element={<Attendance />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
