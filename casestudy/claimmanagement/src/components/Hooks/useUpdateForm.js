import {useState, useEffect} from 'react';
import axios from "axios"; 
import { useHistory, useParams } from 'react-router-dom';

const useUpdateForm = (submitForm, validate2) => {
    let history = useHistory();
    const { id } = useParams();

    const [claim, setClaim] = useState({
        empid:'',
        name :'',
        claimno:'',
        cliamtype:'',
        claimprogram:'',
        startdate:'',
        enddate:''
})
const[isSubmitted, setIsSubmitted] = useState(false);
const[errors2, setErrors2] = useState({});

const handleChange = (e) => {
    console.log("handle change executed in useUpdateForm")
    const {name, value}=e.target;
    setClaim({
        ...claim,
        [name]:value
    })
}
const handleSubmit2 = (e)=>{
        
    e.preventDefault();
    console.log( claim);
    //validations
    setIsSubmitted(true);
    setErrors2( validate2(claim));
    if (Object.keys(errors2).length === 0 && isSubmitted) {
         axios.put(`http://localhost:4000/postMessages/${id}`, claim);
            history.push("/summary");
    }
    //console.log("handle2 Submit method executed in useUpadteForm");
}
const handleSubmit3 = (e)=>{
    e.preventDefault();
    console.log( claim);
    //validations
    setIsSubmitted(true);
    setErrors2( validate2(claim));
    if (Object.keys(errors2).length === 0 && isSubmitted) {
           history.push("/summary");
   }
}
useEffect(() => {
    loadUser();
}, []);

const loadUser = async e => {
    const result = await axios.get(`http://localhost:4000/postMessages/${id}`);
    setClaim(result.data);
};



    return {handleSubmit2, handleSubmit3, handleChange, errors2, claim }
};

export default useUpdateForm;