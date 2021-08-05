import * as request from "./requester.js";
import * as api from "./api.js";

function saveData(data) {
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('email', data.email);
    localStorage.setItem('_id', data._id);
}

function deleteData() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('email');
    localStorage.removeItem('_id');
}

export function getData() {
    let accessToken = getToken();
    let email = localStorage.getItem('email');
    let _id = localStorage.getItem('_id');

    return {
        accessToken,
        email,
        _id
    }
}

export function getToken() {
    let accessToken = localStorage.getItem('accessToken');
    return accessToken;
}

export function login(email, password) {
    return request.post(api.login, { email, password })
        .then(data => {
            saveData(data);
        });
}

export function register(email, password) {
    return request.post(api.register, { email, password })
        .then(data => {
            saveData(data);
        });
}

export function isAuthenticated() {
    let token = localStorage.getItem('accessToken');

    return Boolean(token);
}

export function logout() {
    return request.get(api.logout)
        .then(() => deleteData());
}