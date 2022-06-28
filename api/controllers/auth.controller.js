import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { User } from '../models/User.js'

export const register = async(req, res) => {
    console.log(req.body)
    
    const {username, email, password, isAdmin} = req.body
    !req.body && res.status(400).json('there is no body')
   
    //TO DO - handle error
    const emailExist = await User.findOne({ email: email });
    if (emailExist) return res.status(401).json("this Email already exist")

    const userExist = await User.findOne({ username: username });
    if (userExist) return res.status(401).json("this Username already exist")

    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, salt)
        const newUser = new User({
            username: username,
            email: email,
            isAdmin: isAdmin,
            password: hashedPass
        })

        const user = await newUser.save()
        return res.status(200).json('User created !')
    }
    catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}

export const login = async(req, res) => {
    console.log(req.body)
    try{
        // User exist ?
        const user = await User.findOne({email:req.body.email })
        if(!user){
            return res.status(400).json("L'email ou le mot de passe est incorrect") //For security issue never reveal wich is wrong
        }   

        //Password is correct ?
        const validated = await bcrypt.compare(req.body.password, user.password)
        if(!validated) {
            return res.status(400).json("L'email ou le mot de passe est incorrect") // For security issue never reveal wich is wrong
        }
       

        // Create Jwt TODO Implement jwt
        if(user && validated) {
            const token = jwt.sign(
                {id: user._id, isAdmin:user.isAdmin},
                process.env.JWT_SEC,
                { expiresIn: '24h' }
            )

            const { password, ...others } = user._doc;  
            res.status(200).json({...others, token});
           
        }
    }
    catch(err){
        console.log(err)
        res.status(401).json(err)
    }
}
