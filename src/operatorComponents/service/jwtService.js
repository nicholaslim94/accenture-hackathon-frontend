export function jwtLoginService(token) {
    if(typeof token === "string") {
        localStorage.setItem("operator-token", token)
    } else {
        console.warn("Token not a string")
    }
}

export function jwtLogoutService() {
    if(typeof token === "string") {
        localStorage.removeItem("operator-token")
    } else {
        console.warn("Token not a string")
    }
}

export function jwtGetTokenService() {
    return localStorage.getItem("operator-token")
}

export default function JwtIsLoginService() {
    if(localStorage.getItem("operator-token")) {
        return true
    } 
        return false
}