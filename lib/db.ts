import mongoose from "mongoose";

const MONGO_URI = process.env.NEXT_PUBLIC_MONGODB;

export async function connectDB() {
    if(mongoose.connection.readyState === 1)
        return;
    if (!MONGO_URI) {
        throw new Error("MongoDB URI is not defined");
    }
    await mongoose.connect(MONGO_URI)
}