//const express=require("express");
//const activityM= require("../models/Activity");
const{ Router }=require("express");
const { Country, Activity } = require('../db.js')
const {Op}= require("sequelize"); 



const router = Router();

router.post('/',async(req,res,next)=>{
    //agregarle toUpperCase
try{
    const{name,dificulty,duration,season,countryId}=req.body;
    let postActivity = await Activity.findOrCreate({
        where: {
            name: name,
            dificulty: dificulty,
            duration: duration,
            season: season
        },
        // default:{
        //     name: name,
        //     dificulty: dificulty,
        //     duration: duration,
        //     season: season
        // }
    });
    console.log("COUNTRII", countryId)
         for(let i=0; i<countryId.length; i++){
                 const match = await Country.findOne({
                     where:{
                         name: countryId[i]
                     }
                 })

                 await postActivity[0].addCountry(match);
                 console.log("MATCHHHHHH", match)
             }
              //await postActivity.setCountries(countryId);
             res.json(postActivity)

}catch(error){
    next(error)
}
});

router.get("/", async (req, res, next) => {
    try {
        const activities = await Activity.findAll({
            include: Country
        });
        return res.json(activities)
    } catch (err) {
        return next(err);
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

// router.put("/", async (req, res) => {
//     try {
//       const { name, dificulty, duration, season, countries } = req.body;
//       const activity = await Activity.findOne({
//         where: {
//           name: {
//             [Op.eq]: name,
//           },
//         },
//       });
//       //console.log("ACTIVIDAD", activity)

//       activity.dificulty = dificulty;
//       activity.duration = duration;
//       activity.season = season;
//       await activity.save();
  
//       let ctry;
//       if (Array.isArray(countries)) {
//         ctry = await Promise.all(
//           countries.map((country) => Country.findByPk(country.id))
//         );
//       }
//       if (ctry) {
//         await activity.setCountries(ctry);
//       }
//       return res.send(activity);
//     } catch (error) {
//       console.log(error);
//     }
//   });



//   router.delete("/:name", async (req, res, next) => {
//     try {
//       const { name } = req.params;
//       const activity = await Activity.destroy({
//         where: {
//           name: {
//             [Op.eq]: name,
//           },
//         },
//       });

//      res.json(activity)
//     }catch(err){
//         next(err)
//     }
//  })

    module.exports = router;
