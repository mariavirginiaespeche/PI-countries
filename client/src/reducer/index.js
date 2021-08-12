
const initialState = {
    countries: [],
    allCountries: [],
    allActivity: [],
    countriesDetail:{}
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
                    if (a.population > b.population) {
                        return 1;
                    }
                    if (b.population > a.population) {
                        return -1;
                    }
                    return 0;
                }) :
                state.countries.sort(function (a, b) {
                    if (a.population > b.population) {
                        return -1;
                    }
                    if (b.population > a.population) {
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

        default:
            return state;
    }


}

export default rootReducer;