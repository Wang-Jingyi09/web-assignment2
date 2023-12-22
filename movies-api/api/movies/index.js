import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import { getMovie } from '../tmdb-api';
import { getMovies } from '../tmdb-api';
import { getUpcomingMovies } from '../tmdb-api';
// import { getMoviesGenres } from '../tmdb-api';
import { getMovieImages } from '../tmdb-api';
// import { getMovieReviews } from '../tmdb-api';
import { getLatestMovies } from '../tmdb-api';
// import { getMovieCredits } from '../tmdb-api';
import { getTopRatedMovies } from '../tmdb-api';
import { getTrendingMovies } from '../tmdb-api';
import { getMovieRecommendations } from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({ message: 'The movie you requested could not be found.', status_code: 404 });
    }
}));


router.get('/tmdb/movies', asyncHandler(async (req, res) => {
    const { year, rating, page } = req.query;
    const movies = await getMovies(year, rating, page);
    res.status(200).json(movies);
}));

router.get('/tmdb/movie/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movie = await getMovie({ queryKey: ['movie', { id }] });
    res.status(200).json(movie);
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const page  = parseInt(req.query.page) || 1; // Get the page number requested, or default to the first page if not specified
    try {
        const upcomingMovies = await getUpcomingMovies(page);
        res.status(200).json(upcomingMovies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
// router.get('/tmdb/genres', asyncHandler(async (req, res) => {
//     const genres = await getMoviesGenres();
//     res.status(200).json(genres);
// }));
router.get('/tmdb/movies/:id/images', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const images = await getMovieImages({ queryKey: ['images', { id }] });
    res.status(200).json(images);
}));
// router.get('/tmdb/movies/:id/reviews', asyncHandler(async (req, res) => {
//     const { id } = req.params;
//     const reviews = await getMovieReviews(id);
//     res.status(200).json(reviews);
// }));
router.get('/tmdb/latest', asyncHandler(async (req, res) => {
    const latestMovies = await getLatestMovies();
    res.status(200).json(latestMovies);
}));
// router.get('/tmdb/movies/:id/credits', asyncHandler(async (req, res) => {
//     const { id } = req.params;
//     const credits = await getMovieCredits(id);
//     res.status(200).json(credits);
// }));
router.get('/tmdb/top_rated', asyncHandler(async (req, res) => {
    const topRatedMovies = await getTopRatedMovies();
    res.status(200).json(topRatedMovies);
}));
router.get('/tmdb/trending', asyncHandler(async (req, res) => {
    const trendingMovies = await getTrendingMovies();
    res.status(200).json(trendingMovies);
}));
router.get('/tmdb/movies/:id/recommendations', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const recommendations = await getMovieRecommendations(id);
    res.status(200).json(recommendations);
}));


export default router;