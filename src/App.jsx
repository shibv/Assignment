import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./components/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useState } from "react";


function App() {
  const [searchtext, setSearchText] = useState("");
  return (
    <BrowserRouter>
      <div className=" bg-white ">
        <Navbar handleSearch={setSearchText} />

        <Routes>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<Home searchtext={searchtext} />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
