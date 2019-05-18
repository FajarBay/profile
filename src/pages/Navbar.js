import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="main-top">
        <header>
           <div className="container-fluid px-lg-5 ">
               <nav className="mnu mx-auto">
                         <label htmlFor="drop" className="toggle">Anggota</label>
                           <ul className="menu">
                               <li className="mr-lg-4 mr-3"><NavLink to="/Septi">Septi</NavLink></li>
                               <li className="mr-lg-4 mr-3"><NavLink to="/Rara">Rara</NavLink></li>
                               <li className="mr-lg-4 mr-3"><NavLink to="/Daru">Daru</NavLink></li>
                               <li className="mr-lg-4 mr-3"><NavLink to="/Fajar">Fajar</NavLink></li>
                           </ul>
                </nav>
            </div>
            </header>
       </div>
    );
}

export default Navbar;