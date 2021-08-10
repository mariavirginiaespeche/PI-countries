import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCountries, filterCountriesByContinent, orderByName, orderByPopulation } from "../action/index";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";

export default function Home(){
    const dispach= useDispatch()
    const allCountries= useSelector(state=> state.countries)
    const [currentPage, setCurrentPage]=useState(1)
    const [countriesPerPage, setCountriesPerPage]= useState(9)
    const indexOfLastCountries= currentPage * countriesPerPage //9
    const indexOfFisrtCountries= indexOfLastCountries - countriesPerPage //0
    const currentCountries = allCountries.slice(indexOfFisrtCountries, indexOfLastCountries)
    const [order, setOrder]= useState("")
    const [orderPopulation, setOrderPopulation]= useState("")

    const paginado= (pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispach(getCountries());

    },[])

    function handleFilterContinent(e){
        dispach(filterCountriesByContinent(e.target.value)) //payload que toma como valor el value de option
    }

    function handleNameSort(e){
        e.preventDefault();
        dispach(orderByName(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)

    }

    function handlePopulationSort(e){
        e.preventDefault();
        dispach(orderByPopulation(e.target.value))
        setCurrentPage(1);
        setOrderPopulation(`Ordenado ${e.target.value}`)

    }


    return(
        <div>
            <div>
                <Link to= "/activity">Agregar Actividades</Link>
                <h1>COUNTRIES</h1>
            </div>
            <div>
            <span>Ordenar alfabeticamente</span>
                <select onChange={e=>handleNameSort(e)}>
                    
                    <option value= "asc">Ascendente</option>
                    <option value= "desc">Descendente</option>
                </select>
            <span>Ordenar por poblacion</span>  
                <select onChange={e=>handlePopulationSort(e)}> 
                    <option value= "asc">Ascendente</option>
                    <option value= "desc">Descendente</option>
                </select>
                <select onChange={e=>handleFilterContinent(e)}>
                    <option value="Americas">America</option>
                    <option value="Europe">Europa</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Polar">Polar</option>
                </select>
                <select>
                    
                    
                </select>
                <Paginado countriesPerPage={countriesPerPage} allCountries= {allCountries.length} paginado= {paginado} />

            {
                
                
                currentCountries && currentCountries.map(el=>{
                    return( 
                        <fragment>
                            <Link to={"/home/"+ el.id}>
                            <Card name={el.name} region={el.region} flag={el.flag} key={el.id}/>
                            </Link>
                        </fragment>
                    );
                })  
            }

            </div>


             
        </div>
    )
} 