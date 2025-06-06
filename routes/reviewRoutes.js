import express from 'express';
const router = express.Router();
import auth from '../middleware/authMiddleware.js'
import { updateReview, deleteReview, addReview } from '../controllers/reviewController.js';

router.post("/books/:id",auth, addReview);
router.put("/:id", auth, updateReview);
router.delete("/:id", auth, deleteReview);

export default router