const BASE_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=`;

export const Movie = {
    one(title: string) {
        return fetch(`${BASE_URL}/`, {
            credentials: "include"
        }).then(res => res.json());
    }
}

