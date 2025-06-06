import express from 'express';
import auth from '../middleware/authMiddleware.js';
import {
    addBook, getBooks,
    getBookById,
    searchBooks
} from '../controllers/bookController.js';
const router = express.Router();

router.get("/search", searchBooks);
router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/", auth, addBook);

export default router