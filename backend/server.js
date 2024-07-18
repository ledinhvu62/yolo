import express from 'express'
import cors from 'cors'

import { connectDB } from './config/db.js'
import productRouter from './routes/productRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import 'dotenv/config.js'

// app config
const app = express()
const port = process.env.PORT || 4000

// middleware
app.use(express.json())
app.use(cors())

// DB Connection
connectDB()

// API Endpoints
app.use('/api/product', productRouter)
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/images', express.static('uploads'))

app.use(express.static('frontend/build'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
  });

app.get('/', (req, res) => {
    res.send('API Working')
})

app.listen(port, () => {
    console.log('Server started')
})


//mongodb+srv://ledinhvu6:ledinhvu6@cluster0.4w0ljax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0