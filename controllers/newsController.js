// controllers/newsController.js
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const API_KEY = "c3ddfd9e52fc4d83aea9e39dc25cf758";

async function fetchNews(category, res) {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

  try {
    const response = await axios.get(url);
    let articles = response.data.articles;

    if (articles && articles.length > 0) {
      return res.render("index", { articles, category });
    }

    console.log(`⚠️ No articles from API for ${category}, loading local JSON...`);
    const fallbackPath = path.join(__dirname, `../data/${category}.json`);
    const fallbackData = JSON.parse(fs.readFileSync(fallbackPath, "utf-8"));
    return res.render("index", { articles: fallbackData.articles, category });

  } catch (error) {
    console.error("❌ API Error:", error.message);

    try {
      const fallbackPath = path.join(__dirname, `../data/${category}.json`);
      const fallbackData = JSON.parse(fs.readFileSync(fallbackPath, "utf-8"));
      return res.render("index", { articles: fallbackData.articles, category });
    } catch (fsErr) {
      console.error("❌ Fallback JSON Error:", fsErr.message);
      return res.render("index", { articles: [], category });
    }
  }
}

exports.getTopHeadlines = (req, res) => fetchNews("general", res);
exports.getCategoryNews = (req, res) => {
  const category = req.params.cat;
  fetchNews(category, res);
};
