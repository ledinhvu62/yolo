import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import 'dotenv/config.js'

import routes from "./src/routes/index.js"
import mongoose from "mongoose"
import http from 'http'

/* // App config
const app = express()
const port = 4000

// Middleware
app.use(cors())
app.use(express.json())

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
}) */

const app = express()
const corsOptions = {
    origin: '*', // Your frontend domain
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use("/api/v1", routes)

const port = process.env.PORT || 4000

const server = http.createServer(app)

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Mongodb connected");
    server.listen(port, () => {
        console.log(`Server is listening on port ${port}`)
    })
}).catch((err) => {
    console.log({ err })
    process.exit(1)
})

//mongodb+srv://ledinhvu6:ledinhvu6@cluster0.4w0ljax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0