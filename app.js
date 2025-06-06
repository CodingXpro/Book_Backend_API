import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/api", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/reviews", reviewRoutes);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    connectDB();
    console.log(`server is running on ${PORT}`);
})