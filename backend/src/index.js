import express from 'express'
import dotenv from 'dotenv'
import dbconnect from './db/db.js'
dotenv.config()


//routes
import userRoutes from './routes/User.routes.js'

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const PORT=process.env.PORT;

(async ()=>{
 try {
	await dbconnect()

	app.listen(PORT,()=>{
		console.log(`Server is running on the PORT ${PORT}`)
	})

 } catch (error) {
	console.error('Server connection Failed', error)
 }
})()


app.use('/user',userRoutes)