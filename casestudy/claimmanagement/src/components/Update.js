import React from 'react';
import useUpdateForm from './Hooks/useUpdateForm';
import {Button} from 'react-bootstrap';
import validate2 from './validations/validate2';
import Header from'./commmon/Header';
const Update = ({submitForm}) => {
    const {handleSubmit2, handleSubmit3, handleChange,errors2,claim} = useUpdateForm(submitForm, validate2 );
    //console.log(claim);
    const { empid, name, claimno, claimtype, claimprogram, startdate, enddate } = claim;

    return (
        <div >
            <div>
                <Header />
            </div>
            <div className="container col-6 card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>ID</label>
                            <input className="form-control"
                             value={empid} 
                             type="text" readOnly
                             name="id"/>
                           
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" readOnly
                             name="name"
                             value={name} 
                             className="form-control"
                            />
                            <span className="text-danger">{errors2.name}</span>
                        </div>
                        <div className="form-group">
                            <label>Claim Number</label>
                            <input type="text"
                            format="xxx-xxx-xxx"
                             name="claimno" 
                             id="claimNumber"
                            value={claimno} className="form-control" onChange={handleChange}/>
                            <span className="text-danger">{errors2.claimno}</span>
                        </div>
                        <div className="form-group">
                            <label>ClaimType</label><br/>
                            <select name="claimtype" value= {claimtype} onChange={handleChange}>
                                <option value="submitted">Submitted</option>
                                <option value="received">Received</option>
                                <option value="pending">Pending</option>
                                <option value="moreinfo">Moreinfo</option>
                                <option value="denied">Denied</option>
                                <option value="rejected">Rejected</option>
                                <option value="paid">Paid</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Claim Programs</label>
                            <input type="text" 
                            name="claimprogram"
                             value={claimprogram} 
                             className="form-control" onChange={handleChange}/>
                            <span className="text-danger">{errors2.claimprogram}</span>
                        </div>
                        <div className="form-group">
                            <label>Claim Start date</label>
                            <input type="date" 
                            name="startdate"
                            value={startdate} 
                            className="form-control" onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Claim End date</label>
                            <input type="date"
                             name="enddate"
                              value={enddate} 
                              className="form-control" onChange={handleChange}/>
                            <span className="text-danger">{errors2.enddate}</span>
                        </div>
                        <div className="form-group text-center">
                             <Button variant="primary" className="btn-mar btn" onClick={handleSubmit2}>Submit</Button>
                            <Button variant="danger" onClick={handleSubmit3}>Cancel</Button>
                        </div>
                    </form>
                </div>
            </div>
           
        </div>
    );
};

export default Update;