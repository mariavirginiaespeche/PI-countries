import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCountries, filterCountriesByContinent, orderByName, orderByPopulation, getNameCountries, filterByActivity, getAllActivities } from "../action/index";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";

import './HomeStyle.css'

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
    const allActivities= useSelector(state=>state.allActivity)
    console.log("holaaaaaa", allActivities)

   

 
    


    const paginado= (pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    

    useEffect(()=>{
        dispach(getCountries());
        dispach(getAllActivities())

    },[])

    function handleFilterContinent(e){
        dispach(filterCountriesByContinent(e.target.value)) //payload que toma como valor el value de option
    }

    function handleFilterActivity(e){
        dispach(filterByActivity(e.target.value))
        console.log(dispach(filterByActivity(e.target.value)))
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
        <div className="home">
            <div>
                <Link to= "/activity"><button>Agregar actividades</button></Link>
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
            <span>Filtra por pais</span>
                <select onChange={e=>handleFilterContinent(e)}>
                    <option value="Americas">America</option>
                    <option value="Europe">Europa</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Polar">Polar</option>
                </select>
            <span>Filtra por actividad</span>
                <select onChange={e=>handleFilterActivity(e)}>
                {allActivities?.length &&
                    allActivities.map(a=>{return(
                        <option key={a.id} value={a.name}>{a.name}</option>
                    )})

                    }  
               
   
                    
                </select>
                <Paginado countriesPerPage={countriesPerPage} allCountries= {allCountries.length} paginado= {paginado} />
                <SearchBar/>
                
                
            {
                
                
                currentCountries && currentCountries.map(el=>{
                    return( 
                        <div className="cardhome">
                            <Link to={"/home/"+ el.id}>
                            <Card key={el.id} country={el}/>
                            </Link>
                        </div>
                    );
                })  
            }

            </div>


             
        </div>
    )
} 