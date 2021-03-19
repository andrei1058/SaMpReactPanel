import React from "react";

export function isLoggedIn() : boolean {
    return localStorage.getItem("token") != null;
}

export function getUsername() : string {
    return localStorage.getItem("username") || "Unknown";
}

export function parseLogIn(data: any){
    localStorage.setItem("token", data.token);
    localStorage.setItem("username", data.user.playerName)
}

export function logOut(){
    // send destroy token request
    localStorage.clear();
}