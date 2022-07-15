import React, { useRef } from 'react'
import Error from './Error'
import emailjs from '@emailjs/browser'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const Contact = () => {
    const form = useRef()



    const newMailSchema = Yup.object({
        from_name: Yup.string()
            .max(35, 'Must be 35 characters or less')
            .required('Required'),
        from_email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        message: Yup.string().required('Required'),
    })

    const sendEmail = (values) => {
        emailjs.send(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, values, import.meta.env.VITE_EMAIL_PUBLIC_KEY).then((result) => {
            alert('Enviado Correctamente')
        }, (error) => {
            alert('Error al enviar')
        });
    }

    return (
        <section id='contact' className='py-5 my-5'>
            <h2 className='text-uppercase text-center'>Contact</h2>
            <div className="container d-flex align-items-center justify-content-center py-5">
                <Formik
                    initialValues={{
                        from_name: '',
                        from_email: '',
                        message: ''
                    }}
                    enableReinitialize={true}
                    onSubmit={(values, actions) => {
                        sendEmail(values)
                        actions.setSubmitting(false)
                    }}
                    validationSchema={newMailSchema}
                >
                    {({ errors , touched }) => {
                        return (
                            <Form className='row g-3'>
                                <div className="col-md-6">
                                    <div className="form-floating mb-3">
                                        <Field type="text" name="from_name" placeholder="Name" className="form-control border-secondary rounded-0" id="inputName" style={{ background: "#F4F4F4" }} />
                                        <label htmlFor="inputName">Name</label>
                                        { errors.from_name && touched.from_name ? (<Error message={errors.from_name} />) : null}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating mb-3">
                                        <Field name='from_email' type="email" className="form-control border-secondary rounded-0" id="inputEmail" placeholder="name@example.com" style={{ background: "#F4F4F4" }} />
                                        <label htmlFor="inputEmail">name@example.com</label>
                                        { errors.from_email && touched.from_email ? (<Error message={errors.from_email} />) : null}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <Field as="textarea" name="message" id="textareaMessage" type="text" className="form-control border-secondary rounded-0" placeholder="Leave a message here" style={{ height: "200px", background: "#F4F4F4", resize: 'none' }} />
                                        <label htmlFor="textareaMessage">Leave a message here</label>
                                        { errors.message && touched.message ? (<Error message={errors.message} />) : null}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mt-4">
                                    <input className='btn btn-dark text-uppercase rounded-0' type="submit" value="Send" />
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </section>
    )
}

export default Contact