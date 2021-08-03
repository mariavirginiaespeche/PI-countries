const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//const countriesR= require("./countries")
//const actividadesR= require("./actividades");


const router = Router();

router.get('/', (req,res)=>{
    res.send("ENTRE A INDEX /")
    //aca iria el landing page cone l boton
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
