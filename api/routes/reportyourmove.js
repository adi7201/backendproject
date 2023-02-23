const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Move = require("../model/reportyourmove");



router.post('/',(req,res,next)=>{
    const reportMove = new Move({
        _id:new mongoose.Types.ObjectId,
        regNo: req.body.regNo,
        date:req.body.date,
        reason:req.body.reason,
        activity: req.body.activity,
        location:req.body.location
    })
    reportMove.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            newMove : result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
  })


  router.get('/regNo',(req,res,next)=>{
    Move.findOne({regNo: req.query.reg}).then(result=>{
        res.status(200).json({
        newMove : result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
    
})







module.exports = router;