import React from "react";


export default function Paginado({countriesPerPage, allCountries, paginado}){
        const pageNumbers=[]

        for(let i=0; i<=Math.ceil(allCountries/countriesPerPage); i++){
            pageNumbers.push(i)
        }

        return(
            <nav>
                <ul>
                    { pageNumbers &&
                      pageNumbers.map(number=>(
                          <li>
                          <a onClick={()=>paginado(number)}>
                             {number} 
                          </a>
                          </li>
                      ) )}
                </ul>
            </nav>
        )
} 