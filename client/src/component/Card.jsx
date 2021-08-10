import React from "react";

export default function({name, region, flag}){
    return(
        <div>
            <h3>{name}</h3>
            <h5>{region}</h5>
            <img src={flag} alt="img not found"/>
        </div>
    )
}