import React from 'react'
import Config from '../Settings/Config';
import './Tasks.css'

function TaskList() {
  return (
   <div>
    
    <>
      {Config.isUserLoggedin ?
        <div className="task-container">
          <>
            <div className="guest-container">
              <div className="d-flex justify-content-center">
                <h1 className='label-heading'>Tasks
                </h1>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <article className="card mb-3 task-card p-3">
                    <div className="row no-gutters">
                      <h3 className='para-head mb-4'><b>Task Name: </b>
                      </h3>
                      <p>
                        <b>Description :</b>
                      </p>
                      <p>
                          <b>Document Name :</b>
                        </p>
                      <div className="g-para-text col-5">
                        <p>
                          <b>Task Status :</b>
                        </p>
                        </div>
                      <div className="g-para-text col-5">
                      <span></span>
                        <p>
                          <b>Deadline : </b>
                        </p>
                      </div>

                      <aside className="col-md-1">
                       
                        <div>
                          <div className="d-grid aside-icon gap-5 d-flex justify-content-around">
                            <a href="#">
                              <i
                                className="fa fa-edit fs-4 text-primary"
                              //   onClick={() => getGuestId(guest.GuestId)}
                              ></i>
                            </a>
                            <a href="#">
                              <i
                                className="fa fa-trash fs-4 text-danger"
                              //   onClick={() => handleShow(guest.GuestId)}
                              ></i>
                            </a>


                          </div>
                         
                          {/* <a href="#" className="btn tsk-btn me-1">
                             &nbsp; Assign
                          </a> */}
                        </div>
                      </aside>
                     
                      <div className='tsked-btn'>
                          <a href="#" className="btn task-btn"><i class="fas fa-tasks"></i>
                            &nbsp; Assign
                          </a>
                        </div>
                      
                    </div>
                  </article>
                </div>
                </div>
            </div>
          </>
        </div>
        : <><center><h1 className="label-heading " style={{ color: "black" }}> Please Login to Access This Page </h1></center></>}
    </>
   </div>
  );
}
export default TaskList