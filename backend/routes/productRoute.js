import express from 'express'
import { addProduct, listProduct, removeProduct, getProduct, getRelatedProducts } from '../controllers/productController.js'
import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import cloudinary from '../config/cloudinary.js'

const productRouter = express.Router()

// Image Storage Engine
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'products',
        format: async (req, file) => 'jpg',
        public_id: (req, file) => `${Date.now()}_${file.originalname}`,
    },
})

const upload = multer({ storage })

productRouter.post('/add', upload.array('image'), addProduct)
productRouter.get('/list', listProduct)
productRouter.post('/remove', removeProduct)
// Test
productRouter.get('/query', getProduct)
productRouter.get('/related-products', getRelatedProducts)

export default productRouter