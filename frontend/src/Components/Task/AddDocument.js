import React from 'react'
import cglogo from '../../images/cg-logo.png'
import { useState, useRef}from 'react'
import axios from 'axios'
import Config from '../Settings/Config'
function AddDocument() {
  const fileInput = useRef(null);
  const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
     event.preventDefault();

      const formData = new FormData();
      formData.append("file", file);
     axios.post(Config.api+"Documents/SaveFile",formData,{headers:{ 'Content-Type': 'multipart/form-data'}})
     .then(response => {alert(response.data+" "+"uploaded")
                           window.location.reload()})
        .catch(error => alert(error));
       
  }
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
}
  return (

<div className="card login-card mx-auto">
        <form className='login-form' onSubmit={handleSubmit}>
            <div className='login-body'>
            <h3 className='login-head'>
             <img src={cglogo}className="cg-logo mb-4" alt="Cg-Logo"/>Documents
            </h3> 
            {/* <div className="mb-3">
                <label className="form-label login-label">File Name</label>
                 <input type="text" className="form-control" id="FileName" value=""
                  onChange="" placeholder='Enter File Name'/>
            </div> */}
            <div className="mb-3">
                <label className="form-label login-label">Upload File</label>
                <div className='d-flex flex-row'>
                <input type="file" className="form-control"  ref={fileInput}
                 placeholder='Choose File'  onChange={handleFileChange}  />
                 </div>
            </div>
            <center>
                <button type="submit" className="login-btn mt-3">Submit</button>
            </center>
            </div>
        </form>
        </div>
      )
    }

export default AddDocument