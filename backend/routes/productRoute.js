import express from 'express'
import { addProduct, listProduct, removeProduct, getProduct, getRelatedProducts } from '../controllers/productController.js'
import multer from 'multer'

const productRouter = express.Router()

// Image Storage Engine
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

productRouter.post('/add', upload.array('image'), addProduct)
productRouter.get('/list', listProduct)
productRouter.post('/remove', removeProduct)
// test
productRouter.get('/query', getProduct)
productRouter.get('/related-products', getRelatedProducts)

export default productRouter