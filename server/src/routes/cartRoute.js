import express from 'express'
import { setCart, getCart } from '../controllers/cartController.js'
import authMiddleware from '../middleware/auth.js'

const cartRouter = express.Router()

cartRouter.post('/set', authMiddleware, setCart)
cartRouter.post('/get', authMiddleware, getCart)

export default cartRouter