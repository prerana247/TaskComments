import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Verifyuser.css'
import cglogo from '../../images/cg-logo.png'
import Config from '../../Settings/config'
import {useLocation} from 'react-router-dom'

function VerifyOtp() {
  
  const [Users, setUsers] = useState([]);
  const [otp, setOtp] = useState("");
    
  //  const location = useLocation()
  //  const userId = location.state.Id

  useEffect(() => {
    // console.log(location.state.Id)
    // console.log(userId)
        axios.get(Config.api + `Users/OTP/${sessionStorage.getItem("user")}`) 
            .then(res => setUsers(res.data))
      .catch(error => console.log(error))
    console.log(Users)
    }, [])

  const handleChange = (e) => {
    // const { id, value } = e.target;
    // setOtp((prevState) => ({
    //   ...prevState,
    //   [id]: value,
    // }));
    setOtp(e.target.value);
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    console.log(otp)
    console.log(Users.otp)
    if (otp == Users.otp) {
       window.location.reload()
       window.location.href = '/setPassword'
    } else {
      alert("otp is not valid !!");
    }
    // const payload = {
    //   OTP: state.OTP,
    //   CorpMail: state.CorpMail, 
    //   };
      
}

  return (
    <div className="card Verifyuser-card mx-auto">
    <form className='login-form'>
        <div className='login-body'>
        <h3 className='login-head'>
        <img src={cglogo} className="cg-logo mb-4" alt="Cg-Logo" />iTransform Learning</h3>
        {/* {Users.map((u) => (
        <div class="alert alert-warning" role="alert" key={u.UserId}>
            We have sent a mail to{u.CorpMail} !!
        </div>  
        ))} */}
          <div class="alert alert-warning" role="alert" >
            We have sent a mail to !!
        </div> 
        <div class="form-floating">
          <input type="number" className="form-control" id="OTP" name="OTP" placeholder="OTP"onChange={handleChange}/>
          <label >OTP</label>
        </div>
        <center>
            <button type="submit" className="login-btn mt-3" onClick={handleSubmitClick}>Verify</button>
        </center>
        </div>
    </form>
    </div>

  )
}

export default VerifyOtp