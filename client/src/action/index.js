import axios from "axios";



//me trae todos los paises en la home
export function getCountries(){
    return async function(dispatch){

                var json= await axios.get("http://localhost:3001/countries");

                return dispatch({
                    type: "GET_COUNTRIES",
                    payload: json.data,
                });

    }

 }

 export function filterCountriesByContinent(payload){
     return{
         type:"FILTER_CONTINENT",
         payload
     }
 }

 export function filterByActivity(payload){
     return{
         type:"FILTER_ACTIVITY",
         payload
     }
 }




 export function createActivity(payload){
    return async function(dispatch){

        var json= await axios.post("http://localhost:3001/activity", payload);

        return dispatch({
            type: "CREATE_ACTIVITY",
            payload: json.data,
        });
 }
}

export function orderByName(payload){
    return{
        type:"ORDER_NAME",
        payload
    }
}

export function orderByPopulation(payload){
    return{
        type:"ORDER_POPULATION",
        payload
    }
}





export function getNameCountries(name){

    return async function(dispatch){

        var json= await axios.get("http://localhost:3001/countries?name=" + name);

        return dispatch({
            type: "GET_NAME_COUNTRIES",
            payload: json.data,
        });

}
}


export function datailCountries(payload){

    return async function(dispatch){

        var json= await axios.get(`http://localhost:3001/countries/${payload}`);

        return dispatch({
            type:"DETAIL_COUNTRIES",
            payload: json.data,
        });

}
}

export function getAllActivities(){
    return function(dispatch){
        return axios.get('http://localhost:3001/activity')
        .then(getActivities=>{
            return dispatch({
                type: "GET_ALL_ACTIVITIES",
                payload: getActivities.data
            })
        })
    }
}



// export function datailCountries(payload){ //payload es el id
//     //'/countries/:idPais'
//     return async function(dispatch){
//         // try{

//         var json= await axios.get(`http://localhost:3001/countries/${payload}`);

//         return dispatch({
//             type: "DETAIL_COUNTRIES",
//             payload: json.data,
//         } );
//     // }catch(error){
//     //     console.log(error)
//     // }
// }
// }