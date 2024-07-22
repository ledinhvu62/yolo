import express from "express"
import userRouter from "./userRoute.js"
import productRouter from "./productRoute.js"
import cartRouter from "./cartRoute.js"

const router = express.Router()

router.use('/product', productRouter)
router.use('/user', userRouter)
router.use('/cart', cartRouter)
router.use('/images', express.static('uploads'))

export default router