import productModel from '../models/productModel.js'
import fs from 'fs'

// Add product item

const addProduct = async (req, res) => {
    let image01_filename = `${req.files[0].filename}`
    let image02_filename = `${req.files[1].filename}`

    const product = new productModel({
        name: req.body.name,
        price: req.body.price,
        image01: image01_filename,
        image02: image02_filename,
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

// Get all product list
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({})
        res.json({success: true, data: products})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: 'Lỗi'})
    }
}

// Remove product item

const removeProduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.body.id)
        fs.unlink(`uploads/${product.image}`, () => {})
        await productModel.findByIdAndDelete(req.body.id)
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