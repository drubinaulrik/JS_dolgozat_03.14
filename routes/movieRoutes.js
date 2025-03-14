import express from "express";
import * as moviesControls from '../controllers/moviesController.js'

const router = express.Router()

router.get('/movie', moviesControls.getAllmovies)
router.get('/movie/:id', moviesControls.getMovieById)
router.post('/movie', moviesControls.createMovie)
router.put('/movie/:id', moviesControls.updateMovie)
router.delete('/movie/:id', moviesControls.deleteMovie)

export default router