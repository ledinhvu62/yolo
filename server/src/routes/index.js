import express from 'express'
import userRouter from './userRoute'
import productRouter from './productRoute'
import cartRouter from './cartRoute'

const router = express.Router()

router.use('/products', productRouter)
router.use('/users', userRouter)
router.use('/cart', cartRouter)

export default router