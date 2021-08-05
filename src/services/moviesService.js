import * as request from "./requester.js";
import * as api from "./api.js";

export const getMovies = () => request.get(api.movies);

export const search = (text) => request.get(`${api.movies}?where=title%20LIKE%20%22${text}%22`);

export const getMovie = (id) => request.get(`${api.movies}/${id}`);
export const getMyMovies = (ownerId) => request.get(`${api.movies}?where=_ownerId%3D"${ownerId}"`);

export const create = (title, imageUrl, description) => request.post(api.movies, {title, img: imageUrl, description});

export const update = (movieId, title, imageUrl, description) => request.put(`${api.movies}/${movieId}`, {title, img: imageUrl, description});

export const del = (movieId) => request.del(`${api.movies}/${movieId}`);