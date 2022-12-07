import { useState, useEffect , React }from 'react'
import axios from 'axios'
import './Login.css'
import cglogo from '../../images/cg-logo.png'
import view from "../../images/view.png"
import hide from "../../images/hide.png"
import Config from "../../Settings/config"


function Login() {
    const[Eye, setEye] = useState(false);
    const togglePassword = () => {
        setEye(!Eye);
    };

    const [state, setState] = useState({
        CorpMail: "",
        Password: "",
      });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({
          ...prevState,
          [id]: value,
        }));
      };
    
      const handleSubmitClick = (e) => {
        e.preventDefault();
       sessionStorage.removeItem('token');
        const payload = {
          CorpMail: state.CorpMail,
          Password: state.Password, 
        };

        axios.post(Config.api + "UserLogin", payload)
        .then((res) => {sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('role',res.data.Role)
        sessionStorage.setItem('email',payload.CorpMail)
              window.location.reload()
              window.location.href = '/dashboard'
            
            })
    
        .catch((err)=> {console.log(err)
        alert('Invalid credentials')
        setState({ CorpMail: '', Password: '' })
           })  
      };

  return (
    <div className="card login-card mx-auto">
    <form className='login-form'>
        <div className='login-body'>
        <h3 className='login-head'>
        <img src={cglogo} className="cg-logo mb-4" alt="Cg-Logo"/>iTransform Learning</h3>
        <div className="mb-3">
            <label className="form-label login-label">Corp Id</label>
             <input type="email" className="form-control" id="CorpMail" value={state.CorpMail}
              onChange={handleChange}placeholder='Enter corp email address'/>
        </div>
        <div className="mb-3">
            <label className="form-label login-label">Password</label>
            <div className='d-flex flex-row'>
            <input type={Eye ? "text" : "password"} className="form-control" id="Password" value={state.Password} onChange={handleChange}placeholder="Enter password" />
            <img className="eye" src={Eye ? view : hide} alt="hide" onClick={togglePassword}></img>
            </div>
        </div>
        <center>
            <button type="submit" className="login-btn mt-3" onClick={handleSubmitClick}>Login</button>
        <br/>
        <a href="/verify" className="login-link link-info">New User?</a></center>
        </div>
    </form>
    </div>
  )
}

export default Login