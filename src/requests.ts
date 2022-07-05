const BASE_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_KEY}`;

export const Movie = {
    one(title: string) {
        return fetch(`${BASE_URL}&t=${title}`).then(res => res.json());
    }
}

