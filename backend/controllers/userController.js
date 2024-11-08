const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const asyncHandler=require('express-async-handler')
const User =require('../models/User')


//@disc register user
//route POST/api/users
//@access Public
const registerUser= asyncHandler(async (req,res)=>{
    const {name,email,password,role}=req.body

    if(!name || !email || !password ||!role){
        res.status(400)
        throw new Error('Please add all fields')
    }

    //check if user exist
    const userExist=await User.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error('User already exist')
    }

    //Hash the password
    const salt=await bcrypt.genSalt(10)
    const hashedPassword =await bcrypt.hash(password,salt)

    //Create User
    const user=await User.create({
        name,
        email,
        password:hashedPassword,
        role
    })

    if(user){
        res.status(201).json(
        {_id:user.id,
        name:user.name,
        email:user.email,
        token:generateToken(user.id)
    })
    }else{
        res.status(400)
            throw new Error('Invalid user data')
        
    }

    
})

//@disc Authenticate user
//route POST/api/users/login
//@access Public
const loginUser=asyncHandler(async (req,res)=>{

    const {email,password,role}=req.body
    const user=await User.findOne({email})

    if(user &&(await bcrypt.compare(password,user.password))){
        res.status(201).json(
            {_id:user.id,
            name:user.name,
            email:user.email,
            role:user.role,
            token:generateToken(user.id,role)
        })
    }else{
        res.status(400)
        throw new Error('Invalid credentials')
    }


})

//@disc Get user data
//route Get/api/users/me
//@access Private
const getMe=asyncHandler(async (req,res)=>{
res.status(200).json(req.user)
})


//Generate JWT Token
const generateToken=(id,role)=>{
    return jwt.sign({id,role},process.env.JWT_SECRET,
        {expiresIn:'30d'})
    
}   



module.exports={
    registerUser,
    loginUser,
    getMe
}