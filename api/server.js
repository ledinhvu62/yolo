import express from 'express'
import cors from 'cors'

import { connectDB } from './config/db.js'
import productRouter from './routes/productRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import 'dotenv/config.js'

// App config
const app = express()
const port = process.env.PORT || 4000

// Middleware
app.use(express.json())
app.use(cors({
  origin: '*', // Allow all origins or specify your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin']
}))

// DB Connection
connectDB()

// API Endpoints
app.use('/api/product', productRouter)
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/images', express.static('uploads'))

app.get('/', (req, res) => {
  res.send('API Working')
})

app.listen(port, () => {
    console.log('Server started')
})

//mongodb+srv://ledinhvu6:ledinhvu6@cluster0.4w0ljax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0