import React from 'react'
import Config from '../Settings/Config';
import './Tasks.css'

function TaskList() {
  return (
    <>
    {Config.isUserLoggedin ? 

    <div className="guest-container">
      <>
        <div className="guest-container">
          <div className="d-flex justify-content-center">
          <h1 className='label-heading'>Tasks
          </h1>
          </div>
          <div className="row">
              <div className="col-md-6">
                <article className="card mb-3 room-card p-3">
                  <div className="row no-gutters">
                        <h3 className='para-head'><b>Task Name: </b>
                        </h3>
                        <div className="g-para-text col-5">
                        <p>
                          <b>Deadline : </b> 
                        </p>
                        <p>
                          <b>Document Name :</b> 
                        </p>
                        </div>
                        <div className="g-para-text col-5">
                        <p>
                          <b>Description :</b> 
                        </p>
                        <p>
                          <b>Task Status :</b> 
                        </p>
                        </div>
                    <aside className="col-1">
                      <div>
                        <div className="d-grid gap-3 d-flex justify-content-around me-1">
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
                      </div>
                    </aside>
                  </div>
                </article>
              </div>
            
                  {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fa fa-trash-o fa-1x centered" aria-hidden="true" style={{color:"red"}}></i> Delete Guests</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <center>
          <p>Do you really want to delete this record? This process cannot be undone.</p>
          </center>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteGuests}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal> */}
          </div>
        </div>
      </>
    </div>
     :<><center><h1 className="label-heading " style={{color:"black"}}> Please Login to Access This Page </h1></center></> }
     </>
  );
}

export default TaskList