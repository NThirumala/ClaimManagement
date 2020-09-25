//import {Link } from 'react-router-dom';
import Header from './commmon/Header';
import React, { useState, useEffect } from "react";
import axios from "axios"; 
import Claim from './Claim';
import './commmon/styles/box.css';
//import { Link, Route, Router } from 'react-router-dom';
const Claimsummary = () => {

    const [claims, setClaims] = useState([]);

    let renderProducts = () => {
        return claims.map((claim, idx) => {
          return (
          
              <Claim key={idx} claim={claim} />
            
          );
        });
    };

    
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:4000/postMessages");
        setClaims(result.data);
    };


    return (
        <div>
            <div>
                 <Header />
            </div>
            <div className="container col-12">
<div className="grid">
    {renderProducts()}
</div>
                {/* <div className="card">
                    <div className="card-header bg-success ">
                        <h4>Cliam Summary</h4>
                    </div>
                    <div className="card-body">
                        <table border="2px">
                            <thead>
                                <tr>
                                    <th>Employee Id</th>
                                    <th>Employee Name</th>
                                    <th>Claim Number</th>
                                    <th>Claim Type</th>
                                    <th>Claim Programs</th>
                                    <th>Claim Start date</th>
                                    <th>Claim End date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>{renderProducts()}</tbody>
                        </table>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Claimsummary;