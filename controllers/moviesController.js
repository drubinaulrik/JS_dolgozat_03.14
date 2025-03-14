import movies from "../data/movies.js";

export const getAllmovies = (req, res) =>{
    res.status(200).json(movies)
}

export const getMovieById = (req, res) =>{
    const id = req.params.id
    if(id < 0 || id > movies.length){
        return res.status(404).json({ message: "Movie not found!"})
    }
    res.status(200).json(movies[id])
}

export const createMovie = (req, res) =>{
    const {name, director, year, oskar} = req.body
    if (!name || !director || !year || !oskar){
        return res.status(400).json({ message: "Missing data!"})
    }
    const newMovie = {name, director, year, oskar}
    movies.push(newMovie)
    res.status(201).json(newMovie)
}

export const updateMovie = (req, res) =>{
    const id = req.params.id
    if(id < 0 || id > movies.length){
        return res.status(404).json({ message: "Movie not found!"})
    }
    const {name, director, year, oskar} = req.body
    if (!name || !director || !year || !oskar){
        return res.status(400).json({ message: "Missing data!"})
    }
    movie[id] ={name, director, year, oskar}
    res.status(200).json(movies[id])
}

export const deleteMovie = (req, res) =>{
    const id = req.params.id
    if(id < 0 || id > movies.length){
        return res.status(404).json({ message: "Movie not found!"})
    }
    movies.splice(id, 1)
    res.status(200).json({ message: "The movie has been deleted successfully!"})
}