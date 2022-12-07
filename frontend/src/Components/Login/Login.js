import { useState , React }from 'react'
import './Login.css'
import cglogo from '../../images/cg-logo.png'
import view from "../../images/view.png"
import hide from "../../images/hide.png"


function Login() {
    const[Eye, setEye] = useState(false);
    const togglePassword = () => {
        setEye(!Eye);
    };

  return (
    <div className="card login-card mx-auto">
    <form className='login-form'>
        <div className='login-body'>
        <h3 className='login-head'>
        <img src={cglogo} className="cg-logo mb-4" alt="Cg-Logo"/>iTransform Learning</h3>
        <div className="mb-3">
            <label className="form-label login-label">Corp Id</label>
            <input type="email" className="form-control" placeholder='Enter corp email address'/>
        </div>
        <div className="mb-3">
            <label className="form-label login-label">Password</label>
            <div className='d-flex flex-row'>
            <input type={Eye ? "text" : "password"} className="form-control" placeholder="Enter password" />
            <img className="eye" src={Eye ? view : hide} alt="hide" onClick={togglePassword}></img>
            </div>
        </div>
        {/* <input type="checkbox" class="form-check-input" onClick={togglePassword}/> &nbsp; Show Password */}
        <center>
            <button type="submit" className="login-btn mt-3">Login</button>
        <br/>
        <a href="/verify" className="login-link link-info">New User?</a></center>
        </div>
    </form>
    </div>
  )
}

export default Login
