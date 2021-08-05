import { html } from "../../node_modules/lit-html/lit-html.js";
import * as moviesService from "../services/moviesService.js";

const deleteMovieTemplate = (onClick, movie) => html`
<div class="alert alert-danger" role="alert">
    Are you sure you want to delete movie ${movie.title}?
</div>
<div>
    <button class="btn btn-danger" @click=${onClick}>Delete</button>
    <a class="btn btn-info" href="/movies/${movie._id}">Cancel</a>
</div>
`;

export function deleteMoviePage(ctx) {
    let movieId = ctx.params.movieId;

    const onMovieDelete = () => {
        moviesService.del(movieId)
            .then(() => ctx.page.redirect('/movies'));
    };

    moviesService.getMovie(movieId)
        .then(movie => ctx.render(deleteMovieTemplate(onMovieDelete, movie)))

}