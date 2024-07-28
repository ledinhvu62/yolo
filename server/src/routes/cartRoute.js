import express from 'express'
import { setCart, getCart } from '../controllers/cartController'
import authMiddleware from '../middleware/auth'

const cartRouter = express.Router()

cartRouter.post('/', authMiddleware, setCart)
cartRouter.get('/', authMiddleware, getCart)

export default cartRouter