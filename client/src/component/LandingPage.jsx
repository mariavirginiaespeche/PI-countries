import React from "react";
import { Link } from "react-router-dom";
import './LandingPageStyle.css'


export default function LandingPage(){
    return(
        <div className="landing-page">
            <h1 className="titlelanding">BIENVENIDOS AL MUNDO</h1>
            <Link to="/home" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <button className="buttonlanding">INGRESAR</button>
            </Link>
        </div>
    )
}