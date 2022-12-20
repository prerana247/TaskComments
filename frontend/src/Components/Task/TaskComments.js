import React from 'react'
import commentslogo from '../../images/comment-logo.png'
import cglogo from '../../images/cg-logo.png'
function TaskComments() {
    return (
            <div className="card login-card mx-auto">
            <form className='login-form'>
                <div className='login-body'>
                <h3 className='login-head'>
                <img src={cglogo}className="cg-logo mb-4" alt="Cg-Logo"/>Comments</h3>
                <div className="mb-3">
                    <label className="form-label login-label">UserId</label>
                    <div className='d-flex flex-row'>
                    <input type="text" className="form-control" id="UploadFile" value=""
                      onChange="" placeholder=''/>
                </div>
                <div className="mb-3">
                    <label className="form-label login-label">Comments</label>
                     <input type="text" className="form-control" id="FileName" value=""
                      onChange="" placeholder='Enter Your Comment'/>
                </div>
                </div>
                <div className="mb-3">              
                    <label className="form-label login-label">Created At : </label>
                    <input type="date" className="form-control" id="deadline" min=""
                        onChange="" placeholder='' />
                </div>
                <div className="mb-3">
                    <label className="form-label login-label">TaskId</label>
                    <input type="text" className="form-control" id="FileName" value=""
                      onChange="" placeholder='Enter Your Task Id'/>
                </div>
                
                <center>
                    <button type="submit" className="login-btn mt-3" onClick="">Submit</button>
                </center>
                </div>
            </form>
            </div>
          )
}

export default TaskComments