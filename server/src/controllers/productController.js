import productModel from '../models/productModel.js'
import cloudinary from '../config/cloudinary.js'

// Add product
const addProduct = async (req, res) => {
    const files = req.files
    const uploadPromises = files.map((file) =>
        cloudinary.uploader.upload(file.path)
    )
    const uploadResults = await Promise.all(uploadPromises)
    const imageUrls = uploadResults.map((result) => result.secure_url)

    const product = new productModel({
        name: req.body.name,
        price: req.body.price,
        images: imageUrls,
        color: req.body.color,
        size: req.body.size,
        slug: req.body.slug,
        categorySlug: req.body.categorySlug,
        description: req.body.description,
    })

    try {
        await product.save()
        res.json({success: true, message: 'Sản phẩm đã được thêm'})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: 'Lỗi'})
    }
}

// Get all product
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({})
        res.json({success: true, data: products})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: 'Lỗi'})
    }
}

// Remove product
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.params.productId)
        res.json({success: true, message: 'Sản phẩm đã bị xóa'})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: 'Lỗi'})
    }
}

// Test get product

const getProduct = async (req, res) => {
    try {
        if (req.query.slug) {
            const product = await productModel.findOne({slug: req.query.slug})
            res.json({success: true, data: product})
        }
        else if (req.query._id) {
            const product = await productModel.findById(req.query._id)
            res.json({success: true, data: product})
        }
        else {
            const products = await productModel.find({categorySlug: req.query.category})
            res.json({success: true, data: products})
        }
    } catch (error) {
        console.log(error)
        res.json({success: false, message: 'Lỗi'})
    }
}

// Test get related products

const getRelatedProducts = async (req, res) => {
    try {
        const product = await productModel.findOne({ slug: req.query.slug })
        const relatedProducts = await productModel.find({categorySlug: product.categorySlug, _id: { $ne: product._id }})
        res.json({success: true, data: relatedProducts})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: 'Lỗi'})
    }
}

export { addProduct, listProduct, removeProduct, getProduct, getRelatedProducts }