import { html } from "../../node_modules/lit-html/lit-html.js";
import * as moviesService from "../services/moviesService.js";

const movieCardTemplate = (movie) => html`
<div class="card">
    <img src="${movie.img}" class="card-img-top" alt="${movie.title}">
    <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <a href="/movies/${movie._id}" class="btn btn-primary">Details</a>
    </div>
</div>
`;

const moviesTemplate = (movies) => html`
<div class="movies-container">
    <h3>Movies Page</h3>

    <ul class="movie-list">
        ${movies.map(movie => movieCardTemplate(movie))}
        ${movies.length == 0
        ? html`<p>There's no movies here</p>`
        : ''}
    </ul>
</div>
`;

export function moviePage(ctx) {
    moviesService.getMovies()
        .then(movies => ctx.render(moviesTemplate(movies)));
}

export function myMoviesPage(ctx) {
    moviesService.getMyMovies(ctx.userId)
        .then(movies => ctx.render(moviesTemplate(movies)));
}