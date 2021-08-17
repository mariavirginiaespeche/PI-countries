import React from "react";
import {Link, useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { datailCountries } from "../action/index";
import { useEffect } from "react";
import './DetailStyle.css'

export default function Detail(){
    const {id}= useParams();
    let countriesDetail= useSelector((state)=> state.countriesDetail)
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(datailCountries(id))
    },[])

        return(
            <div className="detailbackground">
                
                   
                    <div className="card-detail">
                        <h1>{countriesDetail?.name}</h1>
                        <h5>ID:{countriesDetail?.id}</h5>  
                        <h5>CONTINENTE:{countriesDetail?.region}</h5>
                        <img className="imgdetailstyle" src={countriesDetail?.flag} alt="img not found"/>
                        <h5>SUBREGION:{countriesDetail?.subregion}</h5>
                        <h5>AREA:{countriesDetail?.area}</h5>
                        <h5>CAPITAL:{countriesDetail?.capital}</h5>
                        <h5>POBLACION:{countriesDetail?.population}</h5>
                    {/* </div> 

                    <div> */}
                        <h5>ACTIVIDADES</h5>
                        

                        {countriesDetail?.activities?.length ?
                    countriesDetail?.activities.map(a=>{
                        return (<div key={a.id} >
                            <h5>{a.name}</h5>
                            <h5>Difficulty: {a.dificulty}</h5>
                            <h5>Duration: {a.duration} mins</h5>
                            <h5>Season: {a.season}</h5>
                        </div>   )
                    } ):
                        <h5> NO HAY ACTIVIDADES PARA ESTE PAIS</h5>
                    }

                <Link to= "/home">
                    <button>Volver</button>
                </Link>

                    </div>

                
                
                

            </div>
        )
}