import React from "react";
import {Link, useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { datailCountries } from "../action/index";
import { useEffect } from "react";

export default function Detail(){
    const {id}= useParams();
    let countriesDetail= useSelector((state)=> state.countriesDetail)
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(datailCountries(id))
    },[])

        return(
            <div>
                
                   
                    <div>
                        <h1>{countriesDetail?.name}</h1>
                        <h4>ID:{countriesDetail?.id}</h4>  
                        <h4>CONTINENTE:{countriesDetail?.region}</h4>
                        <img src={countriesDetail?.flag} alt="img not found"/>
                        <h4>SUBREGION:{countriesDetail?.subregion}</h4>
                        <h4>AREA:{countriesDetail?.area}</h4>
                        <h4>CAPITAL:{countriesDetail?.capital}</h4>
                        <h4>POBLACION:{countriesDetail?.population}</h4>
                    </div> 

                
                
                <Link to= "/home">
                    <button>Volver</button>
                </Link>

            </div>
        )
}