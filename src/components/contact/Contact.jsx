import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    
    emailjs.sendForm('service_c5kwkem', 'template_p2nwqsn', form.current, 'QsH-74tOhdMnOtMjo').then((result) => {
        alert('Enviado Correctamente')
      }, (error) => {
        alert('Error al enviar')
      });
  }

  return (
    <section id='contact' className='py-5 my-5'>
      <div className="container d-flex align-items-center justify-content-center">
        <form className='row g-3 py-4' ref={form} onSubmit={sendEmail}>
          <h2 className='text-uppercase text-center'>Contact</h2>
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input required name='from_name' type="text" className="form-control border-secondary rounded-0" id="inputName" placeholder="Name" style={{ background: "#F4F4F4" }} />
              <label htmlFor="inputName">Name</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input required name='from_email' type="email" className="form-control border-secondary rounded-0" id="inputEmail" placeholder="name@example.com" style={{ background: "#F4F4F4" }} />
              <label htmlFor="inputEmail">Email address</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <textarea name='message' className="form-control border-secondary rounded-0" placeholder="Leave a message here" id="textareaMessage" style={{ height: "200px", background: "#F4F4F4", resize: 'none' }} required></textarea>
              <label htmlFor="textareaMessage">Message</label>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button className='btn btn-dark text-uppercase text-info rounded-0' type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact