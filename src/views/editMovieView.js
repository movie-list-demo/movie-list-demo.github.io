import * as moviesService from "../services/moviesService.js";
import { movieFormTemplate } from "../templates/movieFormTemplate.js";

export function editMoviePage(ctx) {
    let isEdit = true;

    let movieId = ctx.params.movieId
    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');

        moviesService.update(movieId, title, imageUrl, description)
            .then(res => ctx.page.redirect(`/movies/${movieId}`));
    }
    moviesService.getMovie(movieId)
        .then(movie => {
            ctx.render(movieFormTemplate(isEdit, onSubmit, movie));
        });
}