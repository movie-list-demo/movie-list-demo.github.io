// import { html } from "../../node_modules/lit-html/lit-html.js";
import { html } from 'https://unpkg.com/lit-html?module';
import * as authService from "../services/authService.js";

const registerTemplate = (onSubmit) => html`
<div class="register-container">
    <h3>Register Page</h3>
    <form @submit=${onSubmit}>
        <div class="mb-3 row">
            <label for="email" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="email" name="email">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="password" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="password" name="password">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="rePass" class="col-sm-2 col-form-label">Repeat Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="rePass" name="rePass">
            </div>
        </div>
        <div class="mb-3 row">
            <div style="width: 200px">
                <input type="submit" class="form-control" value="Submit">
            </div>
        </div>
    </form>
</div>
`;

export function registerPage(ctx) {
    const onRegisterSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let email = formData.get('email').trim();
        let password = formData.get('password').trim();
        let rePass = formData.get('rePass').trim();

        if (!email || !password || !rePass) {
            return alert('All fields are required!');
        } else if (password !== rePass) {
            return alert('Passwords must match!');
        }

        authService.register(email, password)
            .then(() => {
                ctx.page.redirect('/');
            });
    }

    ctx.render(registerTemplate(onRegisterSubmit));
}