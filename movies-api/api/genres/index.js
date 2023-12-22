
import asyncHandler from 'express-async-handler';
import express from 'express';
import { getMoviesGenres } from '../tmdb-api';

const router = express.Router();
router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const genres = await getMoviesGenres();
    res.status(200).json(genres);
}));

export default router;