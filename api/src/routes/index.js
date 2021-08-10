// const { Router } = require('express');
// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');
// //const countriesR= require("./countries")
// //const actividadesR= require("./actividades");
// const { Country, Activity } = require('../db.js');
// const {Op}= require("sequelize");
// const countriesR= require("./countries")
// const actividadesR= require("./actividades");



// const router = Router();




// //router.get('/', (req,res)=>{
//   //  res.send("ENTRE A INDEX /")
//     //aca iria el landing page cone l boton
// //})

// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);

// server.use("/countries", countriesR);
// server.use("/actividades", actividadesR);

// module.exports = router;


const { Router } = require('express');
//const express = require('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRoutes = require('./countries');
const activityRoutes = require('./actividades')

//const router = express.Router()

 const router = Router();

 //MODULARIZACION
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 router.use('/countries', countriesRoutes )
 router.use('/activity', activityRoutes)

//ruta para el landing --?? ESTA BIEN ACAA??
router.get('/', (req,res)=>{
    res.send("ENTRE A INDEX /")
    //aca iria el landing page cone l boton
})


module.exports = router;