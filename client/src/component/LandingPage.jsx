import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage(){
    return(
        <div>
            <h1>Bienvenidos al mundo</h1>
            <Link to="/home">
                <button>HOME</button>
            </Link>
        </div>
    )
}