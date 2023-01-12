import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="bg-slate-100">
      <Header />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
