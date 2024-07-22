import express from 'express'
import { addProduct, listProduct, removeProduct, getProduct, getRelatedProducts } from '../controllers/productController.js'
import multer from 'multer'

const productRouter = express.Router()

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage })

productRouter.post('/', upload.array('image'), addProduct)
productRouter.get('/', listProduct)
productRouter.post('/remove', removeProduct)
// Test
productRouter.get('/query', getProduct)
productRouter.get('/related-products', getRelatedProducts)

export default productRouter