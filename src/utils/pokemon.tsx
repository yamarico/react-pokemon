import { resolve } from "path";

export const getAllPokemon = (url:string) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data));
    });
};

export const getPokemon = (url:string) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())  
        .then((data) => {
            resolve(data);
        });
    });
};
