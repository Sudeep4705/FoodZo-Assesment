import Food from "../../Model/Food/AddFood"
import express, { Request, Response } from "express";
import multer = require("multer");
import {storage} from "../../Cloudinary"
const upload = multer({storage})
const router = express.Router()
import authenticate from "../../Middleware/auth";

interface MulterRequest extends Request {
    file?: Express.Multer.File;
}
router.post("/add",upload.single("image"),async (req: MulterRequest, res: Response) => {
    try{
 const { hotelname, foodname, description, price } = req.body;

    if (!hotelname || !foodname || !description || !price) {
        return res.json({ message: "Fill the field" });
    }

    const checkhotel = await Food.findOne({ hotelname });
    if (checkhotel) {
        return res.json({ message: "Hotel already exist" });
    }

    if (!req.file) {
        return res.json({ message: "Image is required" });
    }
    const newdata = new Food({
        hotelname,
        foodname,
        description,
        price,
        image: {
            url: req.file.path,       
            filename: req.file.filename
        }
    });

    await newdata.save();

    res.json({ message: "Food added successfully" });
    }
    catch(err){
        res.json({message:err})
    }
   
});

router.get("/show",async(req:Request,res:Response)=>{
    let data  = await Food.find({})
    if(!data){
        return res.json({message:"No data found"})
    }
    return res.json({info:data})
})


router.get("/edit/:id",async(req:Request,res:Response)=>{
    let {id} = req.params
    if(!id){
        return res.json({message:"No id found"})
    }
    let data = await Food.findById(id)
    if(!data){
        return res.json({message:"No data found"})
    }else{
        return res.json({info:data})
    }
    
})

router.put("/edit/:id",upload.single("image"),async(req:MulterRequest,res:Response)=>{
     const { hotelname, foodname, description, price } = req.body;
        const {id} = req.params
let data  = await Food.findById(id)
 if (!data) {
      return res.status(404).json({ message: "Food not found" });
    }
   data.hotelname = hotelname,
   data.foodname = foodname,
   data.description=description,
   data.price=price
   if(req.file){
    data.image ={
         url:req.file.path,
        filename:req.file.filename
    }
   }
   await data?.save()
   return res.json({message:"Updated Successfully"})
})
router.get("/order",authenticate,async(req:Request,res:Response)=>{
    let token = req.cookies.token
    if(token){
        return res.json({message:"Order Placed"})
    }else{
        return res.json({message:"Something wrong"})
    }
})

router.delete("/delete/:id",async(req:Request,res:Response)=>{
    let {id} = req.params
    let deletedata = await Food.findByIdAndDelete(id)
    if(deletedata){
        return res.json({message:"Deleted Successfully"})
    }
    
})


export default router