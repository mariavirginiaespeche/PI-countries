import React from "react";
import { Link } from "react-router-dom";
import './LandingPageStyle.css'


export default function LandingPage(){
    return(
        <div className="landing-page">
            <h1 className="titlelanding">Bienvenidos al mundo</h1>
            <Link to="/home">
                <button className="buttonlanding">HOME</button>
            </Link>
        </div>
    )
}