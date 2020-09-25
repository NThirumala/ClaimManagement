import React from 'react';
import {Link } from 'react-router-dom';
import './styles/box.css';
const Header = () => {
    return (
        <div>
            <div className="topnav">
                
                    <Link className="nav-link text-left" to = "/summary">Claimsummary</Link>
                   
                    <Link className="nav-link login-container" to = "/login">logout</Link>
                     
               
             </div>
         </div>
    );
};

export default Header;