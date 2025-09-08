const express = require("express");
const app = express();
const path = require("path");
const newsRoutes = require("./routes/newsRoutes");
const expressLayouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// ✅ Layouts enable
app.use(expressLayouts);
app.set("layout", "layout");

// Routes
app.use("/", newsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
