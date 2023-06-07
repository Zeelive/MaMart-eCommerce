import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const notify = () => toast("Message Sent");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_41kviao', 'template_au501es', form.current, 'olNfhe9UfHduFwJWo')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img src="/assets/images/contact.png" alt="Contact Us" height="300px" width="300px" />
          </div>
          <div className="col-md-6">
            <form ref={form} onSubmit={sendEmail}>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="name" placeholder="Full Name" name="user_name" required/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="email" name="user_email" required />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="message" rows="5"  name="message" required></textarea>
              </div>
              <button onClick={notify} type="submit" class="btn btn-outline-primary">Send Message</button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact