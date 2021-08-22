import React, { useState } from 'react';
import "./services.css";

const GarbageCollection = () => {
  const URL = process.env.NODE_ENV === 'development' ? "http://localhost:5000" : "https://greenlifeafrica.herokuapp.com"
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { exampleInputName, email } = e.target.elements;
    let details = {
      exampleInputName: exampleInputName.value,
      email: email.value
    };
    let response = await fetch(URL + "/service", {
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
    <div className='container'>
      <div className='gb-coll'>
        <div className="st1-style">
          <div className="st1-style-img">
            <img src="https://i.postimg.cc/yNN5vG9p/IMG-9377.jpg" className="card-img-top" alt="..."></img>
          </div>
          <div className="st1-style-info">
            <div className="st1-style-date">
              <span>Garbage collection service </span>
            </div>
            <h1 className="st1-style-title">
              Usafi mtaani project
            </h1>
            <p>
              The amount of solid waste produced is growing proportionate to
              the growth in population, which is significantly high in the
              urban areas. With a 4.3% growth in urbanization annually,
              Kenyan Cities and Towns are faced with the ever- growing
              challenge of managing the waste generated by the urban citizens.
              In addition, the advent of devolution has inspired growth of
              secondary towns, which are likely to exacerbate the solid
              waste management situation exposing the urban citizenry to
              wanton suffering.
              <br />
              The impacts of solid waste if not properly
              managed within the urban settlements particularly cities
              and big municipalities can be disastrous. But this also
              presents opportunities of turning the waste into a resource!
              We offer professional garbage collection services, termed “Usafi
              Mtaani Project”, in Machakos and its environs. Garbage is collected
              once a week and clients are provided with convenient waste bins
              or environmentally friendly garbage bags for proper waste handling.
              Get a free quote by booking our service.

            </p>
            <form onSubmit={handleSubmit} style={{ border: "none" }}>
              <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputName" required style={{ borderRadius: "1rem" }} placeholder="Enquire about the service..." aria-describedby="nameHelp"></input>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="email" required style={{ borderRadius: "1rem" }} placeholder="Email Adress" aria-describedby="nameHelp"></input>
              </div>
              <button type="submit" className="btn btn-primary" style={{ borderRadius: "1rem", width: "100%",background:"orange",border:"none" }}>{status}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GarbageCollection