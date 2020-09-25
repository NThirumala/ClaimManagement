import React from "react";
import { Link } from "react-router-dom";
import './commmon/styles/box.css';
import { MdEdit } from "react-icons/md";
const Claim = (props) => {
  let { claim } = props;
  console.log("inside UI Claim.js"+claim);
  return (
    <div className="container col-6 box box1">
      <div className="card">
        <div className="card-header">
          {claim.name}
        </div>
        <div className="card-body">
          <div>Employee ID: {claim.empid}</div>
          <div>Claim Number: {claim.claimno}</div>
          <div>Claim Type: {claim.claimtype}</div>
          <div> Claim Number:{claim.claimprogram}</div>
          <div> Claim Start Date: {claim.startdate}</div>
          <div> Claim End Date: {claim.enddate}</div>
        </div>
        <div className="card-footer text-center">
          <Link className="nav-link" to = {`/update/${claim._id}`}>Update<MdEdit/></Link>
        </div>
      </div>
    </div>
  );
};

export default Claim;
