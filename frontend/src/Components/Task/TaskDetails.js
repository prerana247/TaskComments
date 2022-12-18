import React from 'react'
import cglogo from '../../images/cg-logo.png'


function TaskDetails() {

    return (
        <div className="card login-card mx-auto">
            <form className='login-form'>
                <div className='login-body'>
                    <h3 className='login-head'>
                        <img src={cglogo} className="cg-logo mb-4" alt="Cg-Logo" />Task
                    </h3>
                    <div className="mb-3">
                        <label className="form-label login-label">Task Name : </label>
                        <input type="text" className="form-control" id="TaskName" 
                             placeholder='Enter Task Name' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label login-label">Created By : </label>
                        <div className='d-flex flex-row'>
                            <input type="text" className="form-control"
                                placeholder='' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label login-label">Description : </label>
                            <input type="text" className="form-control" id="description"
                                onChange="" placeholder='Enter Description' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label login-label">Deadline : </label>
                            <input type="text" className="form-control" id="deadline"
                                onChange="" placeholder='Enter Deadline' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label login-label">Task Status : </label>
                            <input type="text" className="form-control" id="TaskStatus"
                                onChange="" placeholder='Enter Status' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label login-label">Scores : </label>
                            <input type="text" className="form-control" id="scores"
                                onChange="" placeholder='Enter Scores' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label login-label">Document : </label>
                            <input type="text" className="form-control" id="Document"
                                onChange="" placeholder=' ' />
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

export default TaskDetails