import express from 'express'
import { setCart, getCart } from '../controllers/cartController.js'
import authMiddleware from '../middleware/auth.js'

const cartRouter = express.Router()

cartRouter.post('/', authMiddleware, setCart)
cartRouter.get('/', authMiddleware, getCart)

export default cartRouter