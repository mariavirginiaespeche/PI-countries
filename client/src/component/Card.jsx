import React from "react";
import { Link } from "react-router-dom";

export default function({country}){
    return(
        <div>
            <h3>{country.name}</h3>
            <h5>{country.region}</h5>
            <img src={country.flag} alt="img not found"/>
            <Link to= {`/countries/${country.id}`}><button>Detail</button></Link>
        </div>
    )
}