import React, { useState } from 'react';
import "./project.css"
import img from '../assets/school.jpg'

export default function FoodSecurityAndNutrition() {
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
                <div class="st1-style">
                    <div class="st1-style-img">
                        <img src="https://i.postimg.cc/c1DvzgVD/home-page.jpg" class="card-img-top" alt="..."></img>
                    </div>
                    <div class="st1-style-info">
                        <div class="st1-style-date">
                            <span>Agroecology (seed sovereignty) </span>
                        </div>
                        <p>
                            Seeds are the first link in the food chain and the repository of life’s future evolution. As such it is our inherent duty and responsibility to protect them and to pass them on to future generations. It is evident from the current trends that the indigenous fruit trees are becoming extinct with the adoption of genetically modified seeds.
                            This poses a threat to fruit biodiversity and food security if action is not taken.
                            The fruit tree sovereignty for school’s project is based on seed sovereignty for the community. The aim is to have a conserved biodiversity of fruit trees that thrive well in the region for future food security and nutrition. The genetically modified seed science presents itself in an enormous scope to our farmers being a threat to the indigenous fruit trees. It is thus wise for a collective action to have a common seed bank for our fruits.
                            The idea is to have sizeable fruit tree nursery in public schools initiated by the environment club students and have at least two indigenous fruit trees planted in the school compound. The planted trees are to grow in their indigenous state as they shall serve as the seed bank for the future generation.
                        </p>
                        <form onSubmit={handleSubmit} style={{ border: "none" }}>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="exampleInputName" required style={{ borderRadius: "1rem" }} placeholder="Enquire about the program..." aria-describedby="nameHelp"></input>
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="email" required style={{ borderRadius: "1rem" }} placeholder="Email Adress" aria-describedby="nameHelp"></input>
                            </div>
                            <button type="submit" class="btn btn-primary" style={{ borderRadius: "1rem", width: "100%",background:"orange",border:"none" }}>{status}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
