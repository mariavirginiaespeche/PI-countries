import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createActivity, getCountries } from '../action';
import axios from 'axios';

// function validate(input){
//     let errors = {};
//     if(!input.name){
//         errors.name = "se requiere Nombre";
//     }else if(!input.nickname){
//         errors.nickName = "se requiere nickname"
//     }
//     //si en el input hay un numero >10 y <0 enviar error
//     return errors
// }

export default function ActivityCreate(){
    const dispatch= useDispatch()
    const countries= useSelector((state)=>state.allCountries)//?????
    const [countryId, setCountryId]= useState([])
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
        if(e.target.name==="countries"){
            setCountryId([...countryId, e.target.value])
        }else{

        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        }
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






return(
    <div>

        <Link to="/home"><button>Volver</button></Link>
        <h1>Crear tu actividad</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div>
                <label>Nombre:</label>
                <input
                 type="text"
                 value={input.nombre}
                 name="name"
                 onChange={(e)=>handleChange(e)}
                />

            </div>

            <div>
                <label>Dificultad:</label>
                <input
                 type="number"
                 value={input.dificultad}
                 name="dificulty"
                 onChange={(e)=>handleChange(e)}
                />
                
            </div>

            <div>
                <label>Duracion:</label>
                <input
                 type="text"
                 value={input.duracion}
                 name="duration"
                 onChange={(e)=>handleChange(e)}
                />
                
            </div>

            <select name="season" value={input.season} onChange={(e)=>handleChange(e)}>

            <option value="summer" >Summer</option>
            <option value="winter" >Winter</option>
            <option value="spring" >Spring</option>
            <option value="autumn" >Autumn</option>

                {/* <label>Temporada:</label>
                <label><input
                 type="checkbox"
                 value="summer"
                 name="summer"
                 onChange={(e)=>handleCheck(e)}
                />Summer</label>

                <label><input
                 type="checkbox"
                 value="Winter"
                 name="Winter"
                 onChange={(e)=>handleCheck(e)}
                />Winter</label>

                <label><input
                 type="checkbox"
                 value="spring"
                 name="spring"
                 onChange={(e)=>handleCheck(e)}
                />Spring</label>

                <label><input
                 type="checkbox"
                 value="autumn"
                 name="autumn"
                 onChange={(e)=>handleCheck(e)}
                />Autumn</label> */}
                
            </select>

            <select name="countries" value={countryId} onChange={(e)=>handleChange(e)}>
                
                    {countries.map((c)=>(
                        <option key={c.name} value={c.name}>{c.name} </option>
                    ))}
                
            </select>

            {/* <ul><li>{input.countriesId.map(el=>el + " ,")}</li></ul> */}
            <button type="submit">Agregar actividad</button>
        </form>
    </div>
)
};