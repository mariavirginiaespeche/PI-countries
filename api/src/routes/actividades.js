//const express=require("express");
//const activityM= require("../models/Activity");
const{ Router }=require("express");
const { Country, Activity } = require('../db.js')



const router = Router();

router.post('/',async(req,res,next)=>{
    //agregarle toUpperCase
try{
    const{name,dificulty,duration,season,idCountry}=req.body;
    let [postActivity] = await Activity.findOrCreate({
        where: {
            name: name,
            dificulty: dificulty,
            duration: duration,
            season: season
        },
        default:{
            name: name,
            dificulty: dificulty,
            duration: duration,
            season: season
        }
    });
    await postActivity.setCountries(idCountry);
    res.json(postActivity)

}catch(error){
    next(error)
}
});




// router.post('/activity', async (req, res, next)=>{
//     try{
//     const {idCountry, name, dificulty, duration, season}=req.body;

//     const [activity] = await Activity.findOrCreate({
//         where: {
//             name: name,
//             dificulty: dificulty,
//             duration: duration,
//             season: season
//         },
//         default:{
//             name:name,
//             dificulty: dificulty,
//             duration: duration,
//             season: season
//         },
//     });

//     await activity.setCountries(idCountry);
//      res.json(activity);
//     }catch(error){
//         next (error);
//     }
    
//     });



    module.exports = router;
