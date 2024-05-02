import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjFmNzg1OGVhNTU4MmQwNjNmYTllZDk0NjJhYWI5MiIsInN1YiI6IjY1ZGY0M2ZhOThmMWYxMDE2NDk5MmIwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xev8q_9_1YEM9-dzsUVJN81t9IrZw_totlJpBvQX1Fk',
    }
})

export default instance