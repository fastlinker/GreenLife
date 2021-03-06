import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <nav className='footer'>
      <div className="row row-cols-1 row-cols-md-4 ">
        <div className="col">
          <h2 className="h2-style"> Contact Us</h2>
          <p>
            Ngei road, John Mulwa Building, 2nd floor
          </p>
          <ul id="list-unstyled">

            <li><a href="tel://0700889921">+254700889921</a>  </li>
            <li><a href="tel://0725606635">+254725606635</a>   </li>
            <li><a href="tel://0734317856">+254734317856</a>    </li>
            <li><a href="tel://0734367853">+254734367853</a>    </li>
            <li><a href="mailto:greenlifeafrika@gmail.com">greenlifeafrika@gmail.com</a>   </li>
          </ul>
        </div>
        <div className="col">
          <h2 className="h2-style"> Socialize with us</h2>
          <ul id="list-unstyled">
            <li>
              <a href="https://web.facebook.com/greenlifeafricake"> <i className="fab fa-facebook"></i> Facebook</a>
            </li>
            <li>
              <a href="https://www.linkedin.com"> <i className="fab fa-linkedin-in"></i> LinkedIn</a>
            </li>
            <li>
              <a href="https://twitter.com/GLIFEAFRICA"> <i className="fab fa-twitter"></i> Twitter</a>
            </li>
            <li>
              <a href="https://www.youtube.com"> <i className="fab fa-youtube"></i> Youtube</a>
            </li>
            <li>
              <a href="https://www.instagram.com/greenlifeafricake/"> <i className="fab fa-instagram"></i> Instagram</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h2 className="h2-style">Get Involved
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
        <div className="col">
          <h2 className="h2-style">
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
          &copy; Green Life Africa 2021- All Rights Reserved <h6> Developed by <a href="https://fastlinker-resume.herokuapp.com/"  style={{color:"#fff"}}> fastlinker</a>
        </h6>
        </p>
        <a href="#" class="back-to-top"> <i class="fas fa-chevron-up"></i></a>
      </div>

    </nav>

  );
}

export default Footer;
