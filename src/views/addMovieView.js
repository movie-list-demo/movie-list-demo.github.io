import * as moviesService from "../services/moviesService.js";
import { movieFormTemplate } from "../templates/movieFormTemplate.js";

export function addMoviePage(ctx) {
    let isEdit = false;

    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');

        moviesService.create(title, imageUrl, description)
            .then(res => ctx.page.redirect('/movies'));
    }
    ctx.render(movieFormTemplate(isEdit, onSubmit));
}