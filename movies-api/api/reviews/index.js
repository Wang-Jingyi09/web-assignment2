import asyncHandler from 'express-async-handler';
import express from 'express';
import { getMovieReviews } from '../tmdb-api';

const router = express.Router();

router.get('/tmdb/movies/:id/reviews', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const reviews = await getMovieReviews(id);
    res.status(200).json(reviews);
}));

export default router;