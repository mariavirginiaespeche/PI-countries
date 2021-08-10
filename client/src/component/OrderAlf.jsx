import React from "react";
import { orderByName } from "../action/index";


function handleSort(e){
    e.preventDefault();
    dispach(orderByName(e.target.value))
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`)

}