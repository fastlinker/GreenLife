// require('dotenv').config()
import React, { useState } from 'react';
import './contact-us.css';

const ContactUs = () => {
  const [status, setStatus] = useState("Submit");
  const URL = process.env.NODE_ENV === 'development' ? "http://localhost:5000" : "https://greenlifeafrica.herokuapp.com";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { fullname, subject, email, message } = e.target.elements;
    let details = {
      fullname: fullname.value,
      subject: subject.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch(URL + "/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div class="contact-st">
      <div class="contact-st-info">
        <div class="row row-cols-1 row-cols-md-3 ">
          <div class="col mb-2 contact-form">
            <div class="contact-st-date">
              <span>Green Life Africa</span>
            </div>
            <h1 class="contact-st-title">
              Contact Us
            </h1>
            <p>
              To promote a healthy and wealthy community through ecofriendly practices
            </p>
            <div class="social-links" id="contact-social">
              <a href="https://twitter.com/GLIFEAFRICA" class="twitter"
              ><i class="fab fa-twitter"></i></a>
              <a href="https://web.facebook.com/greenlifeafricake" class="facebook"
              ><i class="fab fa-facebook-f"></i></a>
              <a href="https://www.youtube.com/" class="youtuube"
              ><i class="fab fa-youtube"></i></a>
              <a href="https://www.instagram.com/greenlifeafricake/" class="instagram"
              ><i class="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/" class="linkedin"
              ><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div class="col mb-2 contact-form">
            <div class="contact-st-date">
              <span>Contact Details</span>
            </div>
            <i className="fa fa-book"> Ngei road, John Mulwa Building, 2nd floor </i>
            <br />
            <i className="fa fa-phone"> +254700889921/+254725606635/+254734317856 </i>
            <br />
            <i className="fa fa-envelope"> greenlifeafrika@gmail.com </i>

          </div>
          <div class="col contact-form mb-2">
            <div class="contact-st-date">
              <span>Send Us an Email</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <input type="text" class="form-control" id="fullname" placeholder="Your Full Name." aria-describedby="nameHelp" required ></input>
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" id="email" placeholder="Your Email." aria-describedby="emailHelp" required></input>
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" id="subject" placeholder="Subject." aria-describedby="subjectHelp" required ></input>
              </div>
              <div class="mb-3">
                <textarea class="form-control" aria-label="With textarea" placeholder="Message." id="message" required ></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style={{ borderRadius: "1rem", width: "100%", background: "orange", border: "none" }}>{status}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs
