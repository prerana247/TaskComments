import React from 'react'
import "./AddDocument.css"
import cglogo from '../../images/cg-logo.png'

function AddDocument() {
  return (

<div className="card login-card mx-auto">
        <form className='login-form'>
            <div className='login-body'>
            <h3 className='login-head'>
            <img src={cglogo}className="cg-logo mb-4" alt="Cg-Logo"/>Documents</h3>
            <div className="mb-3">
                <label className="form-label login-label">File Name</label>
                 <input type="text" className="form-control" id="FileName" value=""
                  onChange="" placeholder='Enter File Name'/>
            </div>
            <div className="mb-3">
                <label className="form-label login-label">Upload File</label>
                <div className='d-flex flex-row'>
                <input type="file" className="form-control" id="UploadFile" value=""
                  onChange="" placeholder='Choose File'/>

                 </div>
            </div>
            <center>
                <button type="submit" className="login-btn mt-3" onClick="">Submit</button>
            </center>
            </div>
        </form>
        </div>
      )
    }

export default AddDocument