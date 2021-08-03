//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js'); //traigo todo lo de express
const { conn,Country } = require('./src/db.js');//traigo la conexion con sequelize y la tabla
const axios = require('axios')

// Syncing all the models at once.
// conn.sync({ force: true }).then(() => {
//   server.listen(3001, () => {
//     console.log('%s listening at 3001'); // eslint-disable-line no-console
//   });
// });

// Syncing all the models at once.
//como conn devuelve una promesa, colo el .then() para que cuando termine se levante el servidor 

conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});




// conn.sync({ force: false 
// }).then(async () => {
//  //precargar los paises 
//   const apiCountriesResponse = await axios.get('https://restcountries.eu/rest/v2/all')
//  // console.log(apiCountriesResponse)
//   let apiCountries = await axios.get('https://restcountries.eu/rest/v2/all')
//   console.log("COUNTRIESS", apiCountries)
//   apiCountries= apiCountries.data.map(country =>{
//     return{
//       id: country.alpha3Code,
//       name:country.name,
//       flag:country.flag,
//       region:country.region,
//       capital:country.capital,
//       subregion:country.subregion,
//       area:country.area,
//       population:country.population
//     }
//   })
//   await Country.bulkCreate(apiCountries) //guardar en DB

//   server.listen(3001, () => {
//     console.log('%s listening at 3001'); // eslint-disable-line no-console
//   });
// });
