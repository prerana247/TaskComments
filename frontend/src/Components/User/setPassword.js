import { useState , React, useEffect }from 'react'
import view from "../../images/view.png"
import hide from "../../images/hide.png"
import "./Password.css"
import Config from "../Settings/Config"
import axios from 'axios';

function SetPassword() {

    const [newPasswordShown, setnewPasswordShown] = useState(false);
    const [confirmPasswordShown, setconfirmPasswordShown] = useState(false);
    const[newEye, setnewEye] = useState(false);
    const[confirmEye, setconfirmEye] = useState(false);

    const togglePasswordnew = () => {
        setnewPasswordShown(!newPasswordShown);
        setnewEye(!newEye);
    };
    const togglePasswordconfirm = () => {
        setconfirmPasswordShown(!confirmPasswordShown);
        setconfirmEye(!confirmEye);
    };

    const[user,setUser] = useState({
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


    useEffect( () => {
        axios.get(Config.api + 'Users/1') 
        // .then(response => response.data)
        // .then(res => setUser(
        //     {
        //     FirstName : res.data.firstName
        //     // LastName : r,
        //     // PersonalMail : "",
        //     // CorpMail : "",
        //     // Gender : "",
        //     // MobileNumber : "",
        //     // DOB : "",
        //     // DOJ : "",
        //     // Grade : "",
        //     // Location : "",
        //     // Role : "",
        //     // Password : "",
        //     // OTP : 0,
        //     // IsVerified : true
        // }
        // ))
        .then(res => console.log(res.data.firstName,user.FirstName))
        .catch(error => console.log(error))
    } , []) 

    const updatePassword = () => {
        axios.put(Config.api + `Users/1`, user)
        .then(response => response.data)
        .then(alert('Password changed Successfully '))
        .catch(error => alert("Oops! Something went wrong."))
        sessionStorage.clear()
        window.location.reload()
    }
  return (
    <div className="card pass-card mx-auto">
    <form className='login-form'>
        <div className='login-body'>
        <h3 className='login-head'>Set Password</h3>

        <div className="mb-3">
            <label className="form-label login-label">New Password</label>
            <div className='d-flex flex-row'>
            <input type={newPasswordShown ? "text" : "password"} className="form-control" placeholder="Enter password" />
            <img className="eye" src={newEye ? view : hide} alt="hide" onClick={togglePasswordnew}></img>
            </div>
        </div>
        <div className="mb-3">
            <label className="form-label login-label">Confirm Password</label>
            <div className='d-flex flex-row'>
            <input type={confirmPasswordShown ? "text" : "password"} className="form-control" placeholder="Enter password" />
            <img className="eye" src={confirmEye ? view : hide} alt="hide" onClick={togglePasswordconfirm}></img>
            </div>
        </div>
        <center>
            <button type="submit" className="login-btn mt-3"> Set</button>
        <br/>
        </center>
        </div>
    </form>
    </div>
  )
}

export default SetPassword