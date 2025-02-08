import express from 'express'
import dotenv from 'dotenv'
import dbconnect from './db/db.js'
dotenv.config()

const app=express()
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
