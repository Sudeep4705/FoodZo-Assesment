import express, { Request, Response } from "express";
import Support from "../../Model/Support/Support";
const router = express.Router()


router.get("/support",async(req:Request,res:Response)=>{
    let data  = await Support.find({})
    if(!data){
        return res.json({message:"no data found"})
    }else{
        return res.json({info:data})
    }
})
export default router


router.delete("/support/delete/:id",async(req:Request,res:Response)=>{
    let {id} = req.params
   let deleteSupport = await Support.findByIdAndDelete(id)
   if(deleteSupport){
    return res.json({message:"Message deleted"})
   }
    
})