import React from "react";
import './PaginadoStyle.css'


export default function Paginado({countriesPerPage, allCountries, paginado}){
        const pageNumbers=[]

        for(let i=1; i<=Math.ceil(allCountries/countriesPerPage); i++){
            pageNumbers.push(i)
        }

        return(
            <nav>
                <ul>
                    { pageNumbers &&
                      pageNumbers.map(number=>(
                          <span>
                          <button className="buttonpage" onClick={()=>paginado(number)}> 
                             {number} 
                             </button>
                          </span>
                      ) )}
                </ul>
            </nav>
        )
} 