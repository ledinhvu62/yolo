import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

// Login

const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await userModel.findOne({email})
        if (!user) {
            res.json({success: false, message: 'Tài khoản không tồn tại'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            res.json({success: false, message: 'Mật khẩu không đúng'})
        }

        const token = createToken(user._id)
        res.json({success: true, token})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: 'Error'})
    }
}

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// Register

const registerUser = async (req, res) => {
    const { name, password, email } = req.body
    try {
        const exists = await userModel.findOne({email})
        if (exists) {
            return res.json({success: false, message: 'Email này đã được sử dụng'})
        }

        if (!validator.isEmail(email)) {
            return res.json({success: false, message: 'Email không hợp lệ'})
        }

        if (password.length < 8) {
            return res.json({success: false, message: 'Mật khẩu yếu'})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success: true, token})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: 'Error'})
    }
}

export { loginUser, registerUser }