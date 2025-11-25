import express, { Request, Response } from "express";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import User from "../../Model/User/User"
import nodemailer from "nodemailer"
import Support from "../../Model/Support/Support"
const router = express.Router()


router.post("/signup",async(req:Request,res:Response)=>{
let {email,username,password} = req.body
let regex1 = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
let result1 = regex1.test(email)
if(!result1){
    return res.json({message:"Please check the email format"})
}
let regex2 = /^[a-zA-Z0-9]{8,}$/
let result2 = regex2.test(password)
if(!result2){
    return res.json({message:"Password must be at least 8 characters"})
}
let checkemail = await User.findOne({email})
if(checkemail){
    return res.json({message:"Email already exist try to login"})
}
let checkUsername = await User.findOne({username}) 
if(checkUsername){
    return res.json({message:"Try diffrent username"})
}
else{
const hashed = await bcrypt.hash(password,10)
const usedata = await new User({
    email,username,password:hashed
})
await usedata.save()
const token  = await jwt.sign({id:usedata.id},process.env.SECRET as string,{expiresIn:"1d"})
res.cookie("token",token,{
    httpOnly:true,
    secure:process.env.NODE_ENV as string === "production",
    sameSite:process.env.NODE_ENV as string === "production" ? "none" : "strict",
    maxAge:3*60*60*1000
})
return res.json({message:"Signup Successfully"})
}})

router.post("/login",async(req:Request,res:Response)=>{
    let {email,password}:{ email: string; password: string }= req.body
    if(!email || !password){
        return res.json({message:"Please fill the field"})
    }
    const checkemail = await User.findOne({email})
if(!checkemail){
return res.json({message:"No email found try to signup"})
}
else{
  const checkPassword = await bcrypt.compare(password, checkemail.password);
if(!checkPassword){
    return res.json({message:"wrong password Please try again or try to SignUp"})
}
const token  = await jwt.sign({id:checkemail.id},process.env.SECRET as string,{expiresIn:"1d"})
res.cookie("token",token,{
    httpOnly:true,
    secure:process.env.NODE_ENV as string === "production",
    sameSite:process.env.NODE_ENV as string === "production" ? "none" : "strict",
    maxAge:3*60*60*1000
})
return res.json({message:"Login Successfully"})  
}
})


router.get("/verify",async(req:Request,res:Response)=>{
    let token = req.cookies.token
    if(!token){
        return res.json({isloggedIn:false})
    }
    else{
        const decoded = await jwt.verify(token,process.env.SECRET as string)
        if(!decoded){
            return res.json({isloggedIn:false})
        }else{
            return res.json({isloggedIn:true})
        }
    }

})

router.post("/logout",async(req:Request,res:Response)=>{
     res.clearCookie("token",{
        httpOnly:true,
    secure:process.env.NODE_ENV as string === "production",
    sameSite:process.env.NODE_ENV as string === "production" ? "none" : "strict",
    maxAge:3*60*60*1000
     })
     return res.json({isloggedIn:false})
})

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.GMAIL_USER,
        pass:process.env.GMAIL_PASS
    }
})
router.post("/support",async(req:Request,res:Response)=>{
    let {name,email,message} = req.body
    const mailoptions = {
        from:email,
        to:process.env.GMAIL_USER,
        subject:`new message from ${name}`,
        html:`
        <p>${message}</p>`
    }

    const mail = await transporter.sendMail(mailoptions)
    if(mail){
        const supportdata = new Support({
            name,email,message
        })
        await supportdata.save()

        return res.json({message:"Message sent successfully"})
    }
})




export default router