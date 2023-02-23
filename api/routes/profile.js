const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Profile = require("../model/profile");


router.post('/',(req,res,next)=>{
  const profileDetails = new Profile({
      _id:new mongoose.Types.ObjectId,
      name: req.body.name,
      regNo: req.body.regNo,
      phoneNo:req.body.phoneNo,
      roomNumber:req.body.roomNumber,
      branch: req.body.branch,
  })
  profileDetails.save()
  .then(result=>{
      console.log(result);
      res.status(200).json({
          newProfile : result
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
    Profile.findOne({regNo: req.query.reg}).then(result=>{
        res.status(200).json({
        userProfile : result
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