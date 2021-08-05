// import { html } from "../../node_modules/lit-html/lit-html.js";
import { html } from 'https://unpkg.com/lit-html?module';
// import { ifDefined } from "../../node_modules/lit-html/directives/if-defined.js";
import {ifDefined} from 'lit-html/directives/if-defined';

export const movieFormTemplate = (isEdit, onSubmit, movie = {}) => html`
    <h3>${isEdit ? 'Edit' : 'Add'} movie</h3>
    <form @submit=${onSubmit}>
        <div class="mb-3">
            <label for="movie-title" class="form-label">Title</label>
            <input type="text" class="form-control" name="title" id="movie-title" value=${ifDefined(movie?.title)}>
        </div>
        <div class="mb-3">
            <label for="movie-image-url" class="form-label">Image URL</label>
            <input type="text" class="form-control" name="imageUrl" id="movie-image-url" value=${ifDefined(movie?.img)}>
        </div>
        <div class="mb-3">
            <label for="movie-description" class="form-label">Description</label>
            <textarea class="form-control" id="movie-description" name="description" rows="3">${movie?.description}</textarea>
        </div>
        <div class="mb-3">
            <div style="width: 200px">
                <input class="form-control" type="submit" value="${isEdit ? 'Edit' : 'Create'}">
            </div>
        </div>
    </form>
`;