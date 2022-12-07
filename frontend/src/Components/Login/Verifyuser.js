import React,{useState} from 'react'
import axios from 'axios'
import './Verifyuser.css'
import cglogo from '../../images/cg-logo.png'
import Config from '../../Settings/config'
import {useNavigate} from 'react-router-dom';

function Verifyuser() {
  const[user,setUser] = useState({
    UserId : "",
    FirstName : "",
    LastName : "",
    PersonalMail : "",
    CorpMail : "",
    Gender : "",
    MobileNumber : "",
    DOB : "",
    DOJ : "",
    Grade : "",
    Location : "",
    Role : "",
    Password : "",
    OTP : 0,
    IsVerified : true
  });

  const navigate = useNavigate();
  const [state, setState] = useState({
    PersonalMail: "",
    CorpMail: "",
  });

  const getVerifiedId = (id) => {
      navigate('/otp',{state:{Id:id}});
  }
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  function sendotp() {
    axios.post(Config.api + `EmailSender/SendOTP/?id=${user.UserId}`)
      .then(res => { alert("Email sent !!") })
    .catch(err => alert("nhi hua sent"))
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      PersonalMail: state.PersonalMail,
      CorpMail: state.CorpMail, 
    };

    axios.get(Config.api + `NewUser?Mail1=${payload.PersonalMail}&Mail2=${payload.CorpMail}`)
        .then(res => setUser(
        {
          UserId : res.userId,   
          FirstName : res.firstName,
          LastName : res.lastName,
          PersonalMail : res.personalMail,
          CorpMail : res.corpMail,
          Gender : res.gender,
          MobileNumber : res.mobileNumber,
          DOB : res.dob,
          DOJ : res.doj,
          Grade : res.grade,
          Location : res.location,
          Role : res.role,
          Password : res.password,
          OTP : res.otp,
          IsVerified : res.isVerified
        }
      ))
      .then(getVerifiedId(user.UserId))
      .then(sendotp())
      .then(console.log(user.UserId))
      .catch(err => alert("Oops! Something went wrong."))
}

  return (
    <div className="card Verifyuser-card mx-auto">
    <form className='login-form'>
        <div className='login-body'>
        <h3 className='login-head'>
        <img src={cglogo} className="cg-logo mb-4" alt="Cg-Logo"/>iTransform Learning</h3>
        <h3>{user.userId}</h3>
        <div className="mb-3">
            <label className="form-label login-label">Email Id</label>
            <input type="email" id="PersonalMail" className="form-control" onChange={handleChange} placeholder='Enter personal email address'/>
        </div>
        <div className="mb-3">
            <label className="form-label login-label">Corp Id</label>
            <input type="email" id="CorpMail" className="form-control" onChange={handleChange} placeholder='Enter corp email address'/>
        </div>
        
        <center>
            <button type="submit" className="login-btn mt-3" onClick={handleSubmitClick}>Verify</button>
        <br/>
        Already Verified?<a href="/" className="login-link link-info mt-2"> Login</a></center>
        </div>
    </form>
    </div>

  )
}

export default Verifyuser