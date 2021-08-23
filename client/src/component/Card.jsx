import React from "react";
import { Link } from "react-router-dom";
import './CardStyle.css'

export default function({country}){
    return(
        <div className="card">
            
            <h2 className="h3style" >{country.name}</h2>
            <h4 className="h3style">{country.region}</h4>
            <img className="imgstyle" src={country.flag} alt="img not found"/>
            
            <Link to= {`/countries/${country.id}`}><button className="buttondetail">Ver mas</button></Link>
        </div>
    )
}