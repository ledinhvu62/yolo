import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: { type:String, required:true },
    price: { type:Number, required:true },
    images: { type:Array, required:true },
    color: { type:Array, required:true },
    size: { type:Array, required:true },
    slug: { type:String, required:true },
    categorySlug: { type:String, required:true },
    description: { type:String, required:true },
})

const productModel = mongoose.models.product || mongoose.model('product', productSchema)

export default productModel