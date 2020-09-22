const Lecture = require('../modules/lectures-module')

createLecture = (req,res)=>{
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error:("you must provide lecture"),
        })
    }

    const lecture = new Lecture(body)   

    if (!lecture) {
        return res.status(400).json({success: false, error:err})
    }

    lecture.save()
    .then(()=>{
        return res.status(201).json({
            success: true,
            id: lecture._id,
            message: "lecture created!"
        })
    })
    .catch(error=>{
        return res.status(400).json({
            error,
            message:"lecture not created"
        })
    })
}

getAllLectures= async (req,res)=>{
    await Lecture.find({},(err,lectures)=>{
        if (err) {
            return res.status(400).json({success:false, error:err})
        }
        if (!lectures.length) {
            return res
            .status(404)
            .json({success:false,error:'not a singal lecture was found'})
        }
        return res.status(200).json({success: true, data:lectures})
    }).catch(err => console.log(err));
}

updateLecture = async (req,res)=>{
    const body = req.body
    if (!body){
        return res.status(400).json({
            success: false,
            error: "You must provide a body to update",
        })
    }

   await Lecture.findOne({_id:req.params.id},(err,lecture)=>{
        if (err){
            return res.status(404).json({
                err,
                message:"lecture not found",
            })
        }
        lecture.name = body.name
        lecture.category = body.category
        lecture.review = body.review
        lecture.save()
           .then(()=>{
               return res.status(200).json({
                   success: true,
                   id:lecture._id,
                   message: "lecture updated"
               })
           })
           .catch(error =>{
               return res.status(404).json({
                   error,
                   message:"lecture not updated"
               })
           })
    })
}

deleteLecture = async (req,res)=>{
    await Lecture.findOneAndDelete({_id:req.params.id},(err,lecture)=>{
        if (err){
            return res.status(400).json({success: false, error:err})
        }
        if(!movie){
            return res.status(404)
            .json({success:false,error:"lecture not found"})
        }
        return res.status(200).json({success:true, data:lecture})
    }).catch(err=>console.log(err));
}

getLectureById= async (req,res)=>{
    await Lecture.findOne({_id:req.params.id},(err,lecture)=>{
        if (err) {
            return res.status(400).json({success:false,error:err})
        }
        if (!lecture) {
            return res.status(404).json({success:false,error:"lecture not found"})
        }
        return res.status(200).json({success:true,data:lecture})
    }).catch(err => console.log(err));
}

module.exports = {
    createLecture,
    getAllLectures,
    getLectureById,
    deleteLecture,
    updateLecture
}