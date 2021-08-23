
const initialState = {
    countries: [],
    allCountries: [],
    allActivity: [],
    countriesDetail:{},
    activityFilter: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_COUNTRIES":{
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        }
        case "FILTER_CONTINENT":{
            const allCountries = state.allCountries
            const continentFilter = allCountries.filter(el => el.region === action.payload)
            return {
                ...state,
                countries: continentFilter
            }
        }

        case "CREATE_ACTIVITY":{
            return {
                ...state,
                allActivity: action.payload

            }
        }

        //case "FILTER_ACTIVITY":


        //const activityFilter= state.allActivity.filter(activity=>activity.name===action.payload)


        case "ORDER_NAME":{
            let orderArray = action.payload === "asc" ?
                state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                }) :
                state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                countries: orderArray
            }
        }

        case "ORDER_POPULATION":{
            let orderPopulationArray = action.payload === "asc" ?
                state.countries.sort(function (a, b) {
                    if (Number(a.population) > Number(b.population)) {
                        return 1;
                    }
                    if (Number(b.population) > Number(a.population)) {
                        return -1;
                    }
                    return 0;
                }) :
                state.countries.sort(function (a, b) {
                    if (Number(a.population) > Number(b.population)) {
                        return -1;
                    }
                    if (Number(b.population) >Number(a.population)) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                countries: orderPopulationArray
            }
        }
        case "GET_NAME_COUNTRIES":{
            console.log("REDUCERRRRRRRRR")
            return {
                ...state,
                countries: action.payload
            }
        }


        case "DETAIL_COUNTRIES":
            return {
                ...state,
                countriesDetail: action.payload
            }
        

         case "FILTER_ACTIVITY":{
              const allActivity= state.allActivity
              const countriesAll= state.allCountries // [{act:[]}{}]
              //const filterActivity= countriesAll.forEach(c=>c.activities)//[[{}{}][]]
             // const countiesActivity= filterActivity.filter(e=>e===e.name)
             // console.log()
             // return {
             //     ...state,
             //     countries: countiesActivity
             //    }
             // }

             //const filterActivity= countriesAll.filter(c => (c.activities.some(a => a.name === action.payload)) //devuelve lso paises que tengan la actividad
            //)

            const activity= allActivity.filter(a=>a.name===action.payload)[0].countries.map(countryWithActivity => countryWithActivity)
            return {
                     ...state,
                     countries: activity
                    }
                 }

            case "GET_ALL_ACTIVITIES":{
                return{
                    ...state,
                    allActivity: action.payload
                }
            }

        default:
            return state;
    }


}



export default rootReducer;


