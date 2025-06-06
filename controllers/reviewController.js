import Review from "../models/Review.js";

export const addReview = async (req, res) => {
  const { id: bookId } = req.params;
  const { rating, comment } = req.body;
  const existing = await Review.findOne({ book: bookId, user: req.user.id });
  if (existing) return res.status(400).json({ message: "Already reviewed" });
  const review = await Review.create({ book: bookId, user: req.user.id, rating, comment });
  res.status(201).json(review);
};

export const updateReview = async (req, res) => {
  const review = await Review.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );
  if (!review) return res.status(404).json({ message: "Review not found or unauthorized" });
  res.json(review);
};

export const deleteReview = async (req, res) => {
  const result = await Review.findOneAndDelete({ _id: req.params.id, user: req.user.id });
  if (!result) return res.status(404).json({ message: "Review not found or unauthorized" });
  res.json({ message: "Review deleted" });
};
