import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-project-w8hf.onrender.com/api",
});