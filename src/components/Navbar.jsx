import React, { useState } from "react";
import "./styles/Navbar.css";
import avatar from '../assets/profile-image.jpg'

import Sidebar from "./Sidebar";

const Navbar = () => {

  const [sidebar, setSidebar] = useState(null);

  return (
    <>
      <header className="header bg-slate-800">
        <div className="navbar">
          <h3 onClick={() => setSidebar(true)} className="navbar-welcome hover:text-slate-100 text-teal-600">{"<Jason/>"}</h3>
          <h3 className="navbar-contact hover:text-slate-100 text-teal-600">Contact me!</h3>
        </div>
      </header>
      <Sidebar setSidebar={setSidebar} sidebar={sidebar} avatar={avatar} />
    </>
  );
};

export default Navbar;
