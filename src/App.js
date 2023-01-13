import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Attendance from "./pages/Attendance";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="bg-slate-100">
      <Header />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="attendance" element={<Attendance />} />
      </Routes>
    </div>
  );
}

export default App;
