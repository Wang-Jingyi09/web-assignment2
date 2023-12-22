import asyncHandler from 'express-async-handler';
import express from 'express';
import { getMovieCredits } from '../tmdb-api';

const router = express.Router();

router.get('/tmdb/movies/:id/credits', asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;
        const credits = await getMovieCredits(id);
        res.status(200).json(credits);

    } catch (error){
        res.status(500).json({message: error.message});

    }

}));

export default router;