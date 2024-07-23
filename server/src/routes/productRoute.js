import express from 'express'
import { addProduct, listProduct, removeProduct, getProduct, getRelatedProducts } from '../controllers/productController.js'
import multer from 'multer'

import { v2 as cloudinary } from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary'

const productRouter = express.Router()

/* const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
}) */


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'products',
        format: async (req, file) => 'jpg',
        public_id: (req, file) => `${Date.now()}_${file.originalname}`,
    },
})

const upload = multer({ storage })

productRouter.post('/', upload.array('image'), addProduct)
productRouter.get('/', listProduct)
productRouter.post('/remove', removeProduct)

// Test
productRouter.get('/query', getProduct)
productRouter.get('/related-products', getRelatedProducts)

export default productRouter