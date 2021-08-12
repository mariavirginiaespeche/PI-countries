//const express=require("express");
//const countriesM =require("../models/Country");
const{ Router }=require("express");
const { Country, Activity } = require('../db.js');
const {Op}= require("sequelize");


const router = Router(); 





router.get('/:idPais', async (req,res, next)=>{
    const {idPais} = req.params;

    if(!idPais){
        res.json({msg: "Debes agregar el id del Pais que deseas buscar"})
    }

    
    try{
        let country = await Country.findByPk(idPais, {
            include: Activity
        })

    
        return res.json(country)

    }catch(error){
        next(error)
    }
} )





// router.get('/countries', async(req,res, next)=>{
//     const {name}= req.query;
// const allcountry= await getAll();
// if(name){
//     const byName= await allcountry.filter(i => i.name.toLowerCase().includes(name.toLocaleLowerCase()))
//     //si hay personajes devuelvo el personaje, 
//     byName.length ? 
//     res.status(200).send(byName) :
//     //sino envio un error
//     res.status(404).send("No existe el pais")
// } else {
//     //si no recibo por query el name, devuelvo todos los personajes
//     res.status(200).send(allcountry)
// };
// });


// router.get('/', async (req, res, next) => {
//     try {
//         const countries = await Country.findAll()
//         console.log(countries);
//         res.json(countries)
//     } catch (error) {
//         res.json({msg: 'No se encuentran los paises en la base de datos'})
//     }
// })


//  router.get('/', async(req,res, next)=>{
//      const {name}= req.query;
//      if(name){
//      try{
//          const countries = await Country.findAll({where:{
//              name: {[Op.iLike]: `%${name}%`}
//          }})
//          res.json(countries);
        
//      }
//      catch(error){
//          res.json({msg: 'No se encuentra el nombre del pais en la base de datos'})
//      }
//  } 
//  });

 router.get('/', async(req,res, next)=>{
    const {name}= req.query;

    if(name){
        try{
            const countries = await Country.findAll({where:{
                name: {[Op.iLike]: `%${name}%`}
            }})
            res.json(countries);
           
        }
        catch(error){
            res.json({msg: 'No se encuentra el nombre del pais en la base de datos'})
        }
    }else{
        try {
            const countries = await Country.findAll()
            console.log(countries);
            res.json(countries)
        } catch (error) {
            res.json({msg: 'No se encuentran los paises en la base de datos'})
        }



    }

})



module.exports = router;
