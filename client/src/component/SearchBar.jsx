import React from "react";
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNameCountries } from "../action/index";
import './SearchBarStyle.css'

export default function SearchBar(){
    const dispatch= useDispatch()
    const [name, setName]= useState("")
    //const countries= useSelector(state=>state.countries)

    function handleInputChange(e){
        setName(e.target.value)    
    }
    
    function handleSubmit(e){
        e.preventDefault()
        console.log("click")
        dispatch(getNameCountries(name))
        console.log("click2")
        console.log(name, "name")
        
    }

    return(
        <div className="divbusqueda">
            <input  className="inputbusqueda"
            type= "text"
            placeholder= "Buscar..."
            onChange= {(e)=> handleInputChange(e)}
            />
            <button className="buttonbusqueda" type="submit" onClick={(e)=> handleSubmit(e)}>Buscar</button>
        </div>
    )
}