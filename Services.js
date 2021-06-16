import React from "react"

function Services() {
    return(
        <div className="services-container">
            <h1 style={{color: "rgb(32, 32, 58) "}}>Provided Services</h1>
            <br/>
            <ul style={{fontSize: "20px", color:"black"}}> 
                <li>Leaky Pipes</li>
                <li>Leaky Faucets</li>
                <li>Pipe Repair and Replacement</li>
                <li>Drain Cleaning</li>
                <li>Toilet Repair</li>
                <li>Water Heater Repair</li>
                <li>Refrigerator Water Line Installation</li>
                <li>Sewer/Water Line Replacement</li>
                <br/>
                <p style={{color: "black", fontSize:"25px", paddingTop: "10px"}}><b>And much, much MORE!</b></p>
            </ul>
        </div>
    )
}

export default Services
