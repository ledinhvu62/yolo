import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import 'dotenv/config.js'

import routes from './src/routes/index.js'
import mongoose from 'mongoose'
import http from 'http'

const app = express()

app.use(cors({
    origin: '*',
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/v1', routes)

app.get('/', (req, res) => {
    res.send('API Working')
})

const port = process.env.PORT || 4000

const server = http.createServer(app)

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Mongodb connected');
    server.listen(port, () => {
        console.log(`Server is listening on port ${port}`)
    })
}).catch((err) => {
    console.log({ err })
    process.exit(1)
})

//mongodb+srv://ledinhvu6:ledinhvu6@cluster0.4w0ljax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0