import userModel from '../models/userModel.js'

const setCart = async (req, res) => {
    try {
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: req.body.cartData })
        res.json({ success: true, message: 'Giỏ hàng đã được cập nhật' })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'Lỗi' })
    }
}

const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData
        res.json({ success: true, cartData })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'Lỗi' })
    }
}

export { setCart, getCart }