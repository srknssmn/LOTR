import express from "express";
import dotenv from 'dotenv';
import path from 'path';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();
dotenv.config();

// Middlewares
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/images'));
app.use(express.static(__dirname + '/public/js'));
app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/constants'));

app.use(express.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});