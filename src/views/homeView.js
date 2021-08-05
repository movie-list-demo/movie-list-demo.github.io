import { html } from "../../node_modules/lit-html/lit-html.js";

let homeTemplate = () => html`
<div class="home-container">
    <h3>Home Page</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ducimus.</p>
</div>
`;

export function homePage(ctx) {
    ctx.render(homeTemplate());
}