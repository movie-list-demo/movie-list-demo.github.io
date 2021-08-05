import { html } from "../../node_modules/lit-html/lit-html.js";
import { isAuthenticated } from "../services/authService.js";
import * as moviesService from "../services/moviesService.js";

const privateButtons = (id) => html`
    <a href="/movies/${id}/edit" class="btn btn-warning">Edit</a>
    <a href="/movies/${id}/delete" class="btn btn-danger">Delete</a>
`;

const publicButtons = (id) => html`
    <button class="btn btn-success">Up</button>
    <button class="btn btn-secondary">Down</button>
`;

const movieDetailsTemplate = (movie) => html`
<div class="card">
    <img src="${movie.img}" class="card-img-top" alt="${movie.title}">
    <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">${movie.description}</p>
    </div>

    <div>
        ${movie.isOwn
            ? privateButtons(movie._id)
            : ''}

        ${!movie.isOwn && isAuthenticated()
            ? publicButtons(movie._id)
            : ''}

    </div>
</div>
`;

export function movieDetailsPage(ctx) {
    moviesService.getMovie(ctx.params.movieId)
        .then(movieData => {
            let templateData = {
                isOwn: movieData._ownerId == ctx.userId,
                ...movieData
            };
            ctx.render(movieDetailsTemplate(templateData))
        });
}