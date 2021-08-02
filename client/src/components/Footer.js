import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <>
      <nav className='footer'>
        <div class="row row-cols-1 row-cols-md-4 ">
          <div class="col">
            <h2> Contact Us</h2>
            <p>
              Ngei road, John Mulwa Building, 2nd floor
            </p>
            <ul id="list-unstyled">

              <li><a href="tel://0700889921">+254700889921</a>  </li>
              <li><a href="tel://0725606635">+254725606635</a>   </li>
              <li><a href="tel://0734317856">+254734317856</a>    </li>
              <li><a href="mailto:greenlifeafrika@gmail.com">greenlifeafrika@gmail.com</a>   </li>
            </ul>
          </div>
          <div class="col">
            <h2>Socialize with us</h2>
            <ul id="list-unstyled">
              <li>
                <a href="https://www.facebook.com"> <i class="fab fa-facebook"></i> Facebook</a>
              </li>
              <li>
                <a href="https://www.linkedin.com"> <i class="fab fa-linkedin-in"></i> LinkedIn</a>
              </li>
              <li>
                <a href="https://www.twitter.com"> <i class="fab fa-twitter"></i> Twitter</a>
              </li>
              <li>
                <a href="https://www.youtube.com"> <i class="fab fa-youtube"></i> Youtube</a>
              </li>
            </ul>
          </div>
          <div class="col">
            <h2>Get Involved
            </h2>
            <ul id="list-unstyled">
              <li>
                <a href="/donate">Donate With Us</a>
              </li>
              <li>
                <a href="/volunteer">Volunteer With Us</a>
              </li>
              </ul>
          </div>
          <div class="col">
          <h2>
            Check us Out
            </h2>
            <ul id="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="gallery">Gallery</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-xs-center" id="ftrst">
            &copy; Green Life Africa 2021- All Rights Reserved
          </p>
        </div>
      </nav>


    </>
  );
}

export default Footer;