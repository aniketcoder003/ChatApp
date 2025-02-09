
import {User} from '../models/User.model.js'
import bcrypt from 'bcrypt'
import genratetoken from '../JWT_TOKEN/jsonwebtoken.js'

export const signup= async (req,res)=>{

	try {
		const {username,email,password,confirmpassword}=req.body

		if(!username || !email || !password || !confirmpassword)
		{
			return res.status(400).json({
				message:"something is missing",
				success:false
			})
		}

		
		if(password != confirmpassword)
			{
			 return res.status(400).json({
				 message:"confirm password is not match with password",
				 success:false
				})
			}
			
	    let user=await User.findOne({username})

		if(user)
		{
			return res.status(400).json({
             message:"Username or email already exist",
			 success:false
			})
		}

		user=await User.findOne({email})

		if(user)
		{
			return res.status(400).json({
				message:"Username or email already exist",
				success:false
			   })

		}


	   const hashpassword= await bcrypt.hash(password,7)

	   user= await User.create({
		username,
		email,
		password:hashpassword
	   })
	    if(user){
			await genratetoken(user._id,res)
	   return res.status(200).json({
		message:'User signup successfully',
        success:true,
		user
	   })
	}

	} catch (error) {
		console.log(error)
		return res.status(500).json({
			message:'Internal error',
			success:false,
			error
		})
	}
	

}


export const login= async (req,res)=>{

	try{
		const {email,password}=req.body

		if(!email || !password)
		{
		   return res.status(400).json({
			   message:"something is missing",
			   success:false
		   })
		} 
   
		const user=await User.findOne({email})
   
		if(!user)
		{
		   return res.status(400).json({
			   message:"email or password is wrong",
			   success:false
		   })
		}
   
		const ismatch=await bcrypt.compare(password,user.password)
		if(!ismatch)
		{
			return res.status(400).json({
			   message:"email or password is wrong",
			   success:false
		   })
   
		}
   
		 await genratetoken(user._id,res)
		return  res.status(200).json({
		   message:"login successfully",
		   success:true,
		   user
		})
	}
	catch(error){
		console.log(error)
		return res.status(500).json({
			error:"internal server error"
		})
	}
}

export const logout =(req,res)=>{
	try {
		res.clearCookie("jwt")
	return res.status(200).json({
		message:"logout successfully",
		success:true
	})
	} catch (error) {
		console.log(error)
		return res.status(500).json({
			error:"internal server error"
		})
	}
}