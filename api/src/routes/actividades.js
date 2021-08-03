//const express=require("express");
//const activityM= require("../models/Activity");
const{ Router }=require("express");
const { Country, Activity } = require('../db.js')


const router = Router();


router.post('/activity', async (req, res)=>{
    const {name, dificulty, duration, season}=req.body;

    const {activity} = await Activity.findOrCreate({
        where: {
            name: name,
            dificulty: dificulty,
            duration: duration,
            season: season
        }
    })
    return res.json(activity);
    
    });

    module.exports = router;

