import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ledinhvu6:ledinhvu6@cluster0.4w0ljax.mongodb.net/yolo').then(() => console.log('DB connected'))
}