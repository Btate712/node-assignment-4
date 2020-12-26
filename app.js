const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const userRoutes = require("./routes/users");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);
app.use('/', (req, res) => {
  res.status(404).render('404page', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
