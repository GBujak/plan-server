import express from 'express';
import mustacheExpress from 'mustache-express';
import { pool } from './db';

let app = express();
app.engine('html', mustacheExpress());
app.set('view-engine', 'mustache');
app.set('views', __dirname + '/views');

app.listen(3000);

app.get("/hello", async (req, res) => {
    res.render("index.html", {
    });
});