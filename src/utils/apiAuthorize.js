import { setToken } from "./token";

export const BASE_URL = 'https://auth.nomoreparties.co';


export const register = (email, password) => {
        return fetch(`${BASE_URL}/signup`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                password: password,
                email: email
            })
        });
}

export const authorize = (email, password) => {
        return fetch(`${BASE_URL}/signin`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                password: password,
                email: email
            })
        });
}

export const checkToken = (token) => {
        return fetch(`${BASE_URL}/users/me`, {
            method: "GET",
            headers: {
                ...this._headers,
                'Authorization': `Bearer ${token}`
            }
        });
}

