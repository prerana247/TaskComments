import React from 'react'
import './Verifyuser.css'
import cglogo from '../../images/cg-logo.png'

function Verifyuser() {
  return (
    <div className="card Verifyuser-card mx-auto">
    <form className='login-form'>
        <div className='login-body'>
        <h3 className='login-head'>
        <img src={cglogo} className="cg-logo mb-4" alt="Cg-Logo"/>iTransform Learning</h3>
        <div className="mb-3">
            <label className="form-label login-label">Email Id</label>
            <input type="email" className="form-control" placeholder='Enter personal email address'/>
        </div>
        <div className="mb-3">
            <label className="form-label login-label">Corp Id</label>
            <input type="email" className="form-control" placeholder='Enter corp email address'/>
        </div>
        
        <center>
            <button type="submit" className="login-btn mt-3">Verify</button>
        <br/>
        Already Verified?<a href="/" className="login-link link-info mt-2"> Login</a></center>
        </div>
    </form>
    </div>

  )
}

export default Verifyuser