// import page from "../node_modules/page/page.mjs";
import page from "//unpkg.com/page/page.mjs";

import { homePage } from "./views/homeView.js";
import { loginPage } from "./views/loginView.js";
import { moviePage, myMoviesPage } from "./views/movieView.js";
import { registerPage } from "./views/registerView.js";
import { renderMiddleware } from "./middlewares/renderMiddleware.js";
import { movieDetailsPage } from "./views/movieDetailsView.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { addMoviePage } from "./views/addMovieView.js";
import { editMoviePage } from "./views/editMovieView.js";
import { deleteMoviePage } from "./views/deleteMovieView.js";
import { navigationMiddleware } from "./middlewares/navigationMiddleware.js";

page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/movies', moviePage);
page('/my-movies', myMoviesPage);
page('/movies/add', addMoviePage);
page('/movies/:movieId', movieDetailsPage);
page('/movies/:movieId/edit', editMoviePage);
page('/movies/:movieId/delete', deleteMoviePage);

page.start();