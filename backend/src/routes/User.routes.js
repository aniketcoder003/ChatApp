import express from 'express'
import { login, signup } from '../controllers/User.controller.js'

const routes=express.Router()

routes.post('/signup',signup)
routes.post('/login',login)


export default routes