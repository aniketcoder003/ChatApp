import mongoose from 'mongoose'

async function dbconnect (){
try {
	await mongoose.connect(process.env.MONGODB_URI)
	console.log('Database connection done')
} catch (error) {
   console.error('Database Connection failed',error)	
} 

}

export default dbconnect