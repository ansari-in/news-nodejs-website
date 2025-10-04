# 📰 Node.js News Website

A dynamic **News Website** built using **Node.js**, **Express**, and **EJS**, demonstrating event-driven server-side JavaScript and API integration.  
This project was created as part of **MCA-420 (B): Lab on Web Programming** — Question 8: *"Demonstrate the Use of Node.js in a Website."*

---

## 🌐 Live Demo

🔹 **Main URL:** [https://newshub.intesab.live](https://newshub.intesab.live)  
🔹 **Render App:** [https://news-nodejs-website.onrender.com](https://news-nodejs-website.onrender.com)

---

## 📸 Preview

<p align="center">
  <img src="public/img/newspaper.png" alt="News Website Preview" width="400"/>
</p>

---

## 🚀 Features

- 🟢 **Node.js + Express** with MVC structure  
- 🧠 **Server-side Rendering** using **EJS Templates**
- 📰 **NewsAPI.org Integration** for live top headlines  
- 🧩 **Fallback Mechanism** using local JSON files when API fails  
- 🎨 **Bootstrap 5** responsive UI with clean layout  
- 👤 **About Me Page** with developer portfolio  
- ⚙️ **Modular Routing & Controllers** for better code organization

---

## 📂 Folder Structure

```

.
|-- app.js
|-- controllers
|   `-- newsController.js
|-- data
|   |-- backupNews.json
|   |-- business.json
|   |-- general.json
|   |-- health.json
|   |-- sports.json
|   `-- technology.json
|-- package-lock.json
|-- package.json
|-- public
|   |-- css
|   |   `-- style.css
|   `-- img
|       |-- favicon.ico
|       |-- newspaper.png
|       |-- placeholder.png
|       |-- profile.png
|       `-- profile.webp
|-- routes
|   `-- newsRoutes.js
`-- views
    |-- about.ejs
    |-- index.ejs
    `-- layout.ejs

7 directories, 20 files

```

---

## 🧠 Working Explanation

### 🔸 1. **API Integration**

The website fetches live news data from **[NewsAPI.org](https://newsapi.org/)** using Axios:

```js
const API_KEY = "c3ddfd9e52fc4d83aea9e39dc25cf758";
const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
````

If the API fails or returns empty data, it automatically loads **local JSON files** stored in the `/data/` folder.

---

### 🔸 2. **Routes**

| Route            | Description                                                       |
| ---------------- | ----------------------------------------------------------------- |
| `/`              | Loads top headlines (General)                                     |
| `/category/:cat` | Loads category-specific news (e.g., business, technology, sports) |
| `/about`         | Displays the “About Me” section                                   |

---

### 🔸 3. **EJS Layout**

All pages extend a single **layout template** (`views/layout.ejs`) for consistent navbar and footer.
Dynamic content is rendered with `<%- body %>` inside the layout.

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/ansari-in/news-nodejs-website.git
   cd news-nodejs-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   node app.js
   ```

4. **View in browser**

   ```
   http://localhost:5000
   ```

---

## 🧰 Tech Stack

| Technology      | Description                             |
| --------------- | --------------------------------------- |
| **Node.js**     | Backend runtime environment             |
| **Express.js**  | Web framework for routing & controllers |
| **EJS**         | Templating engine for dynamic HTML      |
| **Bootstrap 5** | Frontend styling                        |
| **Axios**       | HTTP client for API requests            |
| **NewsAPI.org** | External news data provider             |

---

## 🧑‍💻 About Developer

**👋 Ansari Intesab**
Full-Stack Web Developer skilled in **MERN**, **DevOps**, **PHP**, **WordPress**, and **Python**.
Passionate about building responsive, secure, and scalable web apps.

🌐 [Portfolio Website](https://intesab.live)

---

## 🏆 Academic Context

📘 **Course:** MCA-420 (B) — Lab on Web Programming
📚 **Question 8:** *Demonstrate the use of Node.js in a Website*
📅 **Topic:** *Node.js News Website using Express, EJS, and NewsAPI*

---

## 🧾 License

This project is **open-source** and available under the [MIT License](LICENSE).

---

### ⭐ Show your support

If you like this project, give it a ⭐ on [GitHub](https://github.com/ansari-in/news-nodejs-website)!
