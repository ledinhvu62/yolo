import express from 'express'
import { addProduct, removeProduct, getProducts, getRelatedProducts } from '../controllers/productController'
import multer from 'multer'

import cloudinary from '../config/cloudinary.js'
import { CloudinaryStorage } from 'multer-storage-cloudinary'

const productRouter = express.Router()

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'products',
        public_id: (req, file) => `${Date.now()}_${file.originalname}`,
    },
})

const upload = multer({ storage })

productRouter.post('/', upload.array('images'), addProduct)
productRouter.delete('/:productId', removeProduct)
productRouter.get('/', getProducts)
productRouter.get('/related-products', getRelatedProducts)

export default productRouter