import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('DB connected'))
}