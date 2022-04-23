import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='py-3 vh-100 mt-5'>
      <div className="container h-100 d-flex align-items-center justify-content-center">
        <form className='row g-3 py-4' action="">
          <h2 className='text-uppercase text-center'>Contact</h2>
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input type="text" className="form-control border-info" id="inputName" placeholder="Name" style={{background: "#F4F4F4"}} />
              <label htmlFor="inputName">Name</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input type="email" className="form-control border-info" id="inputEmail" placeholder="name@example.com" style={{background: "#F4F4F4"}}/>
              <label htmlFor="inputEmail">Email address</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <textarea className="form-control border-info" placeholder="Leave a message here" id="textareaMessage" style={{height: "200px", background: "#F4F4F4"}}></textarea>
              <label htmlFor="textareaMessage">Message</label>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button className='btn btn-info text-uppercase' type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact