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

export const getComments = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
        return res.data;
    });
}

export const patchArticle = (article_id, increment) => {
    return newsApi
      .patch(`/articles/${article_id}`, {
        inc_votes: increment,
      })
      .then((res) => {
        console.log(res.data);
      });

}