import { useState , React }from 'react'
import view from "../../images/view.png"
import hide from "../../images/hide.png"
import "./Password.css"

function Password() {
    const [oldPasswordShown, setoldPasswordShown] = useState(false);
    const [newPasswordShown, setnewPasswordShown] = useState(false);
    const [confirmPasswordShown, setconfirmPasswordShown] = useState(false);
    const[oldEye, setoldEye] = useState(false);
    const[newEye, setnewEye] = useState(false);
    const[confirmEye, setconfirmEye] = useState(false);

    const togglePasswordold = () => {
        setoldPasswordShown(!oldPasswordShown);    
        setoldEye(!oldEye);
    };
    const togglePasswordnew = () => {
        setnewPasswordShown(!newPasswordShown);
        setnewEye(!newEye);
    };
    const togglePasswordconfirm = () => {
        setconfirmPasswordShown(!confirmPasswordShown);
        setconfirmEye(!confirmEye);
    };


  return (
    <div className="card pass-card mx-auto">
    <form className='login-form'>
        <div className='login-body'>
        <h3 className='login-head'>Change Password</h3>
        <div className="mb-3 ">
            <label className="form-label login-label">Old Password</label>
            <div className='d-flex flex-row'>
            <input type={oldPasswordShown ? "text" : "password"} className="form-control" placeholder="Enter password"/>
            <img className="eye" src={oldEye ? view : hide} alt="hide" onClick={togglePasswordold}></img>
            </div>
        </div>
        
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
        {/* <input type="checkbox" class="form-check-input" onClick={togglePassword}/> &nbsp; Show Password */}
        <center>
            <button type="submit" className="login-btn mt-3">Change</button>
        <br/>
        </center>
        </div>
    </form>
    </div>
  )
}

export default Password