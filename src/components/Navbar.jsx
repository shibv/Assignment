import React from "react";
import logo from "../assets/logo.svg"
import avatar from '../assets/avatar.svg'
import { useNavigate } from "react-router-dom";


function Navbar({handleSearch}) {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("loggedIn"));
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  }

  return (
    <div className="navbar flex bg-slate-200 justify-around items-center">
    <div className="navbar-start">
      <img src={logo} className="w-10" alt="" />
      <a className="btn btn-ghost text-xl text-black font-bold">BlogApp</a>
    </div>
    {
      userName &&   <div className="navbar-center">
      <input onChange={(event) => handleSearch(event.target.value)} type="text" placeholder="Search blog.." className="input input-bordered bg-slate-100 w-24 md:w-auto"  />
  </div>
    }
  
    <div className="navbar-end">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={avatar}/>
          </div>
        </div>
        {userName && 
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
         
          <li onClick={handleLogout} ><a>Logout</a></li>
          
        </ul>
}
      </div>

    </div>
  </div>


  );
}

export default Navbar;
