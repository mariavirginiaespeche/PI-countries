import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createActivity, getCountries } from '../action';
import axios from 'axios';

import './FormStyle.css'

function validate(input, countryId){
    let errors = {};
    if(!input.name){
        errors.name = "se requiere Nombre";
    }else if(!input.dificulty){
        errors.dificulty = "se requiere dificultad"
    }else if(input.dificulty>5 || input.dificulty< 1){
        errors.dificulty = "se requiere dificultad hasta 5"
    
    }else if(!input.duration){
        errors.duration = "se requiere duration"
    //si en el input hay un numero >10 y <0 enviar error
    }else if (input.duration>24){
        errors.duration = "agregar duracion manos de 24 hs"
    
    }else if(!input.season){
        errors.season = "se requiere season"
    //si en el input hay un numero >10 y <0 enviar error
   
    }else if(!countryId.length){
        errors.countryId = "se requiere country"
    //si en el input hay un numero >10 y <0 enviar error
    
    }return errors;
}

export default function ActivityCreate(){
    const dispatch= useDispatch()
    const countries= useSelector((state)=>state.allCountries)//?????
    const [countryId, setCountryId]= useState([])
    const [errors, setErrors]= useState({})
    const [input, setInput]= useState({
        name: "",
        dificulty:"",
        duration:"",
        season:"",
        
    })
    
    useEffect(()=>{
        dispatch(getCountries())
    },[])

    function handleChange(e){
        if(e.target.name==="countryId"){
            setCountryId([...countryId, e.target.value])
        }else{

        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        }
        setErrors(validate({ //luego seteo el estado de errores, pasandole el estado setetado
            ...input,
            [e.target.name] : e.target.value
        }, countryId))
    }

    // function handleCheck(e){
    //     if(e.target.checked){
    //         setInput({
    //             ...input,
    //             temporada: e.target.value
    //         })
    //     }
    // }

    // function handleSelect(e){
    //     setInput({
    //         ...input,
    //         countryId:[...input.countryId, e.target.value]
    //     })
    // }

    async function handleSubmit(e){

        e.preventDefault();
        const obj={
            ...input,
            countryId: countryId
        }
        if(Object.keys(errors).length === 0){
            var json= await axios.post("http://localhost:3001/activity", obj);
        // dispatch(createActivity(input))
        alert("actividad creada")
        setInput({
            name: "",
            dificulty:"",
            duration:"",
            season:"", 
        })
        setCountryId([])
        }
        else if(Object.keys(errors).length > 0){ 

            alert("Debes completar todos los campos requeridos para agregar la Actividad")
         }
    }






return(
    <div className="fondoform">

        <Link to="/home"><button className="buttonlanding">Volver</button></Link>
        <div className="divform">
        <h1 className="h1">Crear tu actividad</h1>
        <form className="form" onSubmit={(e)=>handleSubmit(e)}>

        <div className="div">
            <label>Pais:</label>
            <select name="countryId" value={countryId} onChange={(e)=>handleChange(e)}>
                
                    {countries.map((c)=>(
                        <option key={c.name} value={c.name}>{c.name} </option>
                    ))}
                
            </select>
            {errors.countryId && (
                        <p>{errors.countryId}</p>
                    )}
            </div>
            <div className="div">
                <label>Nombre:</label>
                <input
                 type="text"
                 value={input.name}
                 name="name"
                 onChange={(e)=>handleChange(e)}
                />
                {/* Debajo de cada input prgeunto si hay algo en error.nombredelinput y si hay algo lo renderizo .TMB ES NECESARIO HACER LA VALIDACION EN EL BACK*/}
                {errors.name && (
                        <p>{errors.name}</p>
                    )}
                    

            </div>

            <div className="div">
                <label>Dificultad:</label>
                <input
                 type="number"
                 value={input.dificulty}
                 name="dificulty"
                 onChange={(e)=>handleChange(e)}
                />
                {errors.dificulty && (
                        <p>{errors.dificulty}</p>
                    )}
                
            </div>

            <div className="div">
                <label>Duracion:</label>
                <input
                 type="text"
                 value={input.duration}
                 name="duration"
                 onChange={(e)=>handleChange(e)}
                />
                {errors.duration && (
                        <p>{errors.duration}</p>
                    )}
                
            </div>
            <div className="div">
            <label>Temporada:</label>
            <select name="season" value={input.season} onChange={(e)=>handleChange(e)}>

            <option value="summer" >Summer</option>
            <option value="winter" >Winter</option>
            <option value="spring" >Spring</option>
            <option value="autumn" >Autumn</option>

                                
            </select>
            {errors.season && (
                        <p>{errors.season}</p>
                    )}

            </div>

            

            {/* <ul><li>{input.countriesId.map(el=>el + " ,")}</li></ul> */}
            <button type="submit">Agregar actividad</button>
        </form>
        </div>
    </div>
)
};