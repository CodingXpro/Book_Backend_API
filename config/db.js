import mongoose from "mongoose";
// import mongodb from 'mongodb';


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database is connected to ${conn.connection.host}`);
    } catch (err) {
        console.log(`Error in mongoDB ${err}`);
    }

}
export default connectDB;