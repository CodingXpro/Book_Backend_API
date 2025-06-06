import Book from '../models/Book.js';
import Review from '../models/Review.js';

export const addBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getBooks = async (req, res) => {
    const { author, genre, page = 1, limit = 10 } = req.query;
    const filter = {};
    if (author) filter.author = new RegExp(author, "i");
    if (genre) filter.genre = genre;
    const books = await Book.find(filter)
        .skip((page - 1) * limit)
        .limit(parseInt(limit));
    res.json(books);
};

export const getBookById = async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    const reviews = await Review.find({ book: book._id }).populate("user", "username");
    const avgRating =
        reviews.reduce((sum, r) => sum + r.rating, 0) / (reviews.length || 1);
    res.json({ ...book.toObject(), avgRating, reviews });
};

export const searchBooks = async (req, res) => {
    const { query } = req.query;
    const books = await Book.find({
        $or: [
            { title: new RegExp(query, "i") },
            { author: new RegExp(query, "i") }
        ]
    });
    res.json(books);
};