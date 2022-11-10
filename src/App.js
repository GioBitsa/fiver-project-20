import { Routes, Route } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ReviewComments from "./pages/ReviewComments/ReviewComments";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/review" element={<ReviewComments />} />
      <Route path="/recommendations" element={<ReviewComments />} />
      <Route path="/settings" element={<ReviewComments />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
