import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form'

const ContactForm = props => {
    const [message, setMessage] = useState()
    const sendEmail = (e) => {
        const YOUR_TEMPLATE_ID = 'template_BZsTp9WA';
        const YOUR_USER_ID = 'user_uWLKcKnehxcFnRcvVjrdt';
        const SERVICE_ID = 'gmail';
        e.preventDefault()
        emailjs.sendForm(SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_USER_ID)
            .then((result) => {
                console.log(result.text);
                setMessage("Successfully sent. Thanks!")
            }, (error) => {
                console.log(error.text);
                setMessage("Something went wrong! Try again.")
            });
        document.getElementById("contact-form").reset();
    }

    return (

            <Form id="contact-form" onSubmit={sendEmail} method="POST" >
                <Form.Group>
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="senderName" />
                </Form.Group>
                <Form.Group>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" name="senderEmail" />
                </Form.Group>
                <Form.Group>
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5" name="message"></textarea>
                </Form.Group>
                <Form.Group>
                    <button type="submit" className="btn btn-outline-info">Submit</button>
                    <span className="msg">{message} </span>
                </Form.Group>
            </Form>

    )
}

export default ContactForm