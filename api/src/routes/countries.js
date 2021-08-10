//const express=require("express");
//const countriesM =require("../models/Country");
const{ Router }=require("express");
const { Country, Activity } = require('../db.js');
const {Op}= require("sequelize");

const router = Router(); 





router.get('/countries/:idPais', async (req,res)=>{
    const {idPais} = req.params;

    if(!idPais){
        res.json({msg: "Debes agregar el id del Pais que deseas buscar"})
    }

    
    try{
        let country = await Country.findByPk(idPais, {
            include: Activity
        })

    //     country = {
    //   id: country.id,
    //   name:country.name,
    //   flag:country.flag,
    //   region:country.region,
    //   capital:country.capital,
    //   subregion:country.subregion,
    //   area:country.area,
    //   population:country.population,
    //   activities: country.Activity.map(activity =>{
    //       return{
    //           name:activity.name,
    //           dificulty: activity.dificulty,
    //           duration: activity.duration,
    //           season: activity.season
    //       }
    //   })
    //     }
        return res.json(country)

    }catch(error){
        res.json(error)
    }
} )



router.get('/', async (req, res, next) => {
    try {
        const countries = await Country.findAll()
        console.log(countries);
        res.json(countries)
    } catch (error) {
        res.json({msg: 'No se encuentran los paises en la base de datos'})
    }
})


router.get('/countries', async(req,res, next)=>{
    const {name}= req.query;
    if(name){
    try{
        const countries = await Country.findAll({where:{
            name: {[Op.like]: `%${name}%`}
        }})
        res.json(country);
        
    }
    catch(error){
        res.json({msg: 'No se encuentra el nombre del pais en la base de datos'})
    }
} 
});

module.exports = router;
