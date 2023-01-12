import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-project-w8hf.onrender.com/api",
});

export const getArticles = (topic) => {
    return newsApi.get("/articles", {params: { 
        topic_slug: topic }}).then((res) => {
        return res.data;
    })
}

export const getArticleById = (article_id) => {
    return newsApi.get(`/articles/${article_id}`).then((res) => {
        return res.data.article;
    })
}