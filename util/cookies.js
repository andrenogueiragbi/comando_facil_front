import cookie from "cookie";
import Cookies from "js-cookie";

export function parseCookies(req) {
    if (!req || !req.headers) {
        return {};
    }

    return cookie.parse(req.headers.cookie || "");
}

export function setCookie(key,value,options=null) {

    Cookies.set(key, value, {
        ...options,
        secure: process.env.NODE_ENV === "production" ? true : false,
    });
}


export function delCookie(key,value=null,options=null) {

    Cookies.remove(key, value, {
        ...options,
        secure: process.env.NODE_ENV === "production" ? true : false,
    });
}


export function getCookie(key) {
    return Cookies.get(key);
}